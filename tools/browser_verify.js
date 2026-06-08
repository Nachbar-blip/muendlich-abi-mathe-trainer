/* Browser-Verifikation (Playwright/Chromium) ueber file:// — testet die App so,
   wie sie per Doppelklick laeuft: lokales KaTeX, klassische Skripte, localStorage,
   Events, Timer. Sammelt Konsolen-/Seitenfehler und macht Screenshots.
   Aufruf: node tools/browser_verify.js  */
const { chromium } = require('playwright');
const path = require('path');
const url = require('url');
const fs = require('fs');

const APP = url.pathToFileURL(path.join(__dirname, '..', 'app', 'index.html')).href;
const SHOTS = path.join(__dirname, '_qa_shots');
fs.mkdirSync(SHOTS, { recursive: true });

const fehler = [];
const schritte = [];
function ok(s) { schritte.push('OK   ' + s); }
function bad(s) { schritte.push('FAIL ' + s); fehler.push(s); }

async function geh(page, hash) {
  await page.goto(APP + hash, { waitUntil: 'load' });
  await page.waitForTimeout(350); // Render + KaTeX
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const konsole = [];
  page.on('console', (m) => { if (m.type() === 'error') konsole.push(m.text()); });
  page.on('pageerror', (e) => konsole.push('PAGEERROR ' + e.message));

  try {
    // --- Start ---
    await geh(page, '#/start');
    const bodyStart = await page.textContent('body');
    if (/Analysis/.test(bodyStart) && /Geometrie/.test(bodyStart)) ok('Start: beide Gebiete sichtbar');
    else bad('Start: Gebiete fehlen');
    if (/Heute f.llig/.test(bodyStart)) ok('Start: Faellig-Button da'); else bad('Start: Faellig-Button fehlt');
    const themaLinks = await page.locator('a.thema').count();
    if (themaLinks === 10) ok('Start: 10 Themen verlinkt'); else bad('Start: ' + themaLinks + ' Themen (erwartet 10)');
    await page.screenshot({ path: path.join(SHOTS, '01-start.png'), fullPage: true });

    // --- Stufe 2 (Rechnen) eines Themas ---
    await geh(page, '#/thema/ana-extrema/2');
    const katexN = await page.locator('.katex').count();
    if (katexN > 0) ok('Stufe2: KaTeX gerendert (' + katexN + ' Formeln)'); else bad('Stufe2: keine KaTeX-Formeln');
    const rawTex = (await page.textContent('body')).includes('\\(');
    if (!rawTex) ok('Stufe2: kein roher LaTeX-Code sichtbar'); else bad('Stufe2: roher \\( sichtbar (KaTeX nicht gerendert)');
    await page.screenshot({ path: path.join(SHOTS, '02-stufe2.png'), fullPage: true });

    // --- Stufe 1 (Verfahren) ---
    await geh(page, '#/thema/geo-spiegelung/1');
    const b1 = await page.textContent('body');
    if (/Schritt|Reihenfolge|Verfahren|oben|unten|Pr.fen/i.test(b1)) ok('Stufe1: Verfahrens-View da'); else bad('Stufe1: View unklar');
    await page.screenshot({ path: path.join(SHOTS, '03-stufe1.png'), fullPage: true });

    // --- Stufe 3 (Erklaeren) + aufdecken ---
    await geh(page, '#/thema/geo-ebene/3');
    const aufdecken = page.locator('button:has-text("aufdecken"), button:has-text("Aufdecken")').first();
    if (await aufdecken.count()) {
      await aufdecken.click();
      await page.waitForTimeout(200);
      const b3 = await page.textContent('body');
      const bewBtn = await page.locator('button:has-text("Sicher"), button:has-text("Gut"), button:has-text("Schwer")').count();
      if (bewBtn >= 2) ok('Stufe3: Erwartungsbild aufgedeckt + Bewertungsknoepfe'); else bad('Stufe3: Bewertungsknoepfe fehlen');
    } else bad('Stufe3: Aufdecken-Button fehlt');
    await page.screenshot({ path: path.join(SHOTS, '04-stufe3.png'), fullPage: true });

    // --- Simulator: ziehen -> Vorbereitung ---
    await geh(page, '#/simulator');
    const zieh = page.locator('button:has-text("ziehen"), button:has-text("Pr.fung ziehen")').first();
    if (await zieh.count()) {
      await zieh.click();
      await page.waitForTimeout(300);
      const bv = await page.textContent('body');
      if (/20:00/.test(bv)) ok('Sim: 20:00-Vorbereitungstimer'); else bad('Sim: 20:00 fehlt');
      // Didaktik: in Vorbereitung KEIN Aufdecken-Knopf (Erwartungsbild-INHALT erst im Vortrag).
      // (Der Hinweistext darf das Wort "Erwartungsbild" nennen — gepruefe wird der Reveal-Knopf.)
      const aufdeckKnoepfe = await page.locator('button:has-text("aufdecken"), button:has-text("Aufdecken")').count();
      if (aufdeckKnoepfe === 0) ok('Sim: kein Aufdecken-Knopf in Vorbereitung (Didaktik-Regel)'); else bad('Sim: ' + aufdeckKnoepfe + ' Aufdecken-Knopf/Knoepfe in Vorbereitung');
      await page.screenshot({ path: path.join(SHOTS, '05-sim-vorbereitung.png'), fullPage: true });
      // Timer starten und Countdown pruefen
      const startBtn = page.locator('button:has-text("Start")').first();
      if (await startBtn.count()) {
        await startBtn.click();
        await page.waitForTimeout(2200);
        const uhr = await page.locator('.sim-uhr').first().textContent();
        if (uhr && uhr.trim() !== '20:00' && /19:5/.test(uhr)) ok('Sim: Countdown laeuft (' + uhr.trim() + ')');
        else bad('Sim: Countdown unklar (' + (uhr || '?') + ')');
      } else bad('Sim: Start-Button fehlt');
    } else bad('Sim: Ziehen-Button fehlt');

    // --- Diagnose ---
    await geh(page, '#/diagnose');
    const bd = await page.textContent('body');
    if (/Diagnose|Frage|berspringen|Abbrechen/i.test(bd)) ok('Diagnose: View da'); else bad('Diagnose: View unklar');
    await page.screenshot({ path: path.join(SHOTS, '06-diagnose.png'), fullPage: true });

  } catch (e) {
    bad('EXCEPTION ' + e.message);
  } finally {
    await browser.close();
  }

  console.log('=== SCHRITTE ===');
  schritte.forEach((s) => console.log(s));
  console.log('=== KONSOLEN-/SEITENFEHLER (' + konsole.length + ') ===');
  konsole.slice(0, 20).forEach((s) => console.log('  ' + s));
  console.log('=== ERGEBNIS ===');
  console.log(fehler.length === 0 && konsole.length === 0 ? 'ALLES GRUEN' : ('PROBLEME: ' + fehler.length + ' Schritt-Fails, ' + konsole.length + ' Konsolenfehler'));
  process.exit(fehler.length === 0 && konsole.length === 0 ? 0 : 1);
})();
