# Mündlich-Abi Mathe Trainer — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Eine gehostete Single-Folder-Lernapp (HTML/JS) für die mündliche Mathe-Nachprüfung (GAN), mit Lern-Trainer (3 Stufen + Spaced Repetition) und Prüfungs-Simulator (20+10+10), deren Mathe-Inhalte einzeln per sympy **und** Wolfram-Konnektor verifiziert sind.

**Architecture:** Statische Seite, lokal per Doppelklick **und** gehostet (Netlify/GH Pages) lauffähig. Reine Logik in `engine.js` (Node-testbar), DOM/Render in `ui.js`, Inhalte als JSON-Objektliteral in `content.js` (von Python-Tests parsebar, single source of truth — kein Build-Step). KaTeX **lokal gebündelt** in `vendor/katex/`. Fortschritt in `localStorage`.

**Tech Stack:** Vanilla JS (keine Frameworks), KaTeX (vendored), Node `node:test` (Engine-Logik), pytest + sympy (Inhalts-/Mathe-Validierung), Wolfram MCP-Konnektor (`mcp__claude_ai_Wolfram__WolframAlpha` / `WolframLanguageEvaluator`) für unabhängige Gegenprobe.

**Referenzen:**
- Design: `docs/plans/2026-06-08-muendlich-abi-mathe-trainer-design.md`
- Hausstil/Datenmodell: `../DifferenzierungsEngine/trainer/12-geom-ebenen.html`, `../DifferenzierungsEngine/spirale.css`
- Didaktik: `../Didaktik_Patterns_fuer_HTML_Tutorien.md`
- Prüfungsquellen (NIE 1:1 übernehmen): die 8 `*.docx` im Projektordner; Extraktion via `tools/extract_exams.py`
- Scope-Grenze: keine Funktionsscharen/e^x/ln/Kettenregel/windschief/HNF/Stochastik.

---

## Konventionen

- **Sprache:** UI, Kommentare, Commits auf Deutsch (Companion-Regel). Code-Bezeichner deutsch wo sinnvoll.
- **TDD:** Erst Test (rot), dann minimaler Code (grün), dann Commit. Engine-Logik über `node:test`, Inhalte über pytest.
- **Commits:** klein und häufig, Format `feat:`/`test:`/`fix:`/`chore:`.
- **Mathe-Wahrheit:** Kein Item gilt als fertig, bevor `loesung`/`loesungsweg`/`erwartungsbild` sowohl von sympy als auch von Wolfram bestätigt sind (siehe Phase 2/3 + Phase 9).

---

## Phase 0 — Scaffold & Tooling

### Task 0.1: Git-Repo initialisieren
**Step 1:** Run: `git init && git branch -M main`
**Step 2:** `.gitignore` anlegen — **Create:** `.gitignore`
```
__pycache__/
*.pyc
node_modules/
.DS_Store
tests/.cache/
recordings/
```
**Step 3:** Commit: `git add .gitignore docs && git commit -m "chore: repo init + design doc"`
(Die schon vorhandene `docs/plans/*-design.md` wird mit eingecheckt.)

### Task 0.2: Ordnerstruktur anlegen
**Step 1:** Verzeichnisse erstellen:
```
app/            # Deploy-Wurzel
app/vendor/
tests/
tools/
```
Run (PowerShell): `New-Item -ItemType Directory -Force app/vendor, tests, tools | Out-Null`
**Step 2:** Den vorhandenen Extraktor verschieben — **Move:** `_extract.py` → `tools/extract_exams.py` (Run: `git mv` falls schon getrackt, sonst `Move-Item _extract.py tools/extract_exams.py`).
**Step 3:** Commit: `git add -A && git commit -m "chore: Ordnerstruktur + Extraktor nach tools/"`

### Task 0.3: KaTeX lokal bündeln
**Step 1:** KaTeX-Dist holen und nach `app/vendor/katex/` kopieren:
Run: `npm pack katex@0.16.9` (erzeugt ein .tgz), dann entpacken und `dist/` nach `app/vendor/katex/` kopieren. Alternativ direkt von unpkg laden:
```powershell
$base="https://unpkg.com/katex@0.16.9/dist"
New-Item -ItemType Directory -Force app/vendor/katex/fonts | Out-Null
Invoke-WebRequest "$base/katex.min.css" -OutFile app/vendor/katex/katex.min.css
Invoke-WebRequest "$base/katex.min.js"  -OutFile app/vendor/katex/katex.min.js
Invoke-WebRequest "$base/contrib/auto-render.min.js" -OutFile app/vendor/katex/auto-render.min.js
```
**Step 2:** Schriftarten holen. `katex.min.css` referenziert `fonts/KaTeX_*.woff2`. Die in `katex.min.css` gelisteten woff2-Dateien (ca. 20) nach `app/vendor/katex/fonts/` laden (Liste aus der CSS extrahieren; Schleife über die Dateinamen).
**Step 3 (Verifikation):** Eine Wegwerf-`app/_katexcheck.html` mit einer Formel öffnen → Formel rendert ohne Netz (DevTools-Network offline). Datei danach löschen.
**Step 4:** Commit: `git add app/vendor && git commit -m "chore: KaTeX 0.16.9 lokal gebündelt"`

### Task 0.4: package.json für Node-Tests
**Step 1:** **Create:** `package.json` — **bewusst OHNE `"type":"module"`** (CommonJS), damit Browser-Skripte klassisch (file://-tauglich) bleiben und Node-Tests `require` nutzen.
```json
{
  "name": "muendlich-abi-trainer",
  "private": true,
  "scripts": { "test": "node --test tests/" }
}
```
**Step 2:** Commit: `git add package.json && git commit -m "chore: node:test Setup"`

---

## Phase 1 — Engine (reine Logik, TDD mit node:test)

Datei `app/engine.js` enthält reine Funktionen (keine DOM-Zugriffe) im **UMD-lite-Muster**: hängt die API an `globalThis.Engine` (Browser, klassisches `<script src>`, file://-tauglich) **und** an `module.exports` (Node-Tests via `require`). KEIN ESM (`<script type=module>` ist bei file:// CORS-blockiert).

### Task 1.1: Spaced-Repetition (SM-2 light)
**Files:** Create `app/engine.js`, Test `tests/engine.srs.test.js`

**Step 1 — Failing test:** **Create:** `tests/engine.srs.test.js`
```js
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { naechsteWiederholung, NEUE_KARTE } = require('../app/engine.js');

test('neue Karte startet bei Intervall 0', () => {
  assert.equal(NEUE_KARTE().intervall, 0);
  assert.equal(NEUE_KARTE().ef, 2.5);
});

test('"Sicher" verlängert Intervall, "Wiederholen" setzt zurück', () => {
  let k = NEUE_KARTE();
  k = naechsteWiederholung(k, 'sicher');   // 1. Erfolg
  assert.equal(k.intervall, 1);
  k = naechsteWiederholung(k, 'sicher');   // 2. Erfolg
  assert.equal(k.intervall, 6);
  const zurueck = naechsteWiederholung(k, 'wiederholen');
  assert.equal(zurueck.intervall, 0);      // Reset
  assert.ok(zurueck.ef >= 1.3);            // EF nie unter 1.3
});
```
**Step 2:** Run `node --test tests/engine.srs.test.js` → FAIL (Modul/Funktion fehlt).
**Step 3 — Implementierung:** **Create:** `app/engine.js` (UMD-lite-Hülle)
```js
(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api; // Node-Tests
  root.Engine = api;                                                         // Browser
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  // Spaced Repetition — vereinfachtes SM-2.
  // Bewertung: 'wiederholen' | 'schwer' | 'gut' | 'sicher'
  const QUALITAET = { wiederholen: 2, schwer: 3, gut: 4, sicher: 5 };

  function NEUE_KARTE() {
    return { intervall: 0, ef: 2.5, wiederholungen: 0, faelligTag: 0 };
  }

  function naechsteWiederholung(karte, bewertung, heuteTag = 0) {
    const q = QUALITAET[bewertung];
    let { intervall, ef, wiederholungen } = karte;
    if (q < 3) {                 // 'wiederholen' → Reset
      wiederholungen = 0; intervall = 0;
    } else {
      wiederholungen += 1;
      if (wiederholungen === 1) intervall = 1;
      else if (wiederholungen === 2) intervall = 6;
      else intervall = Math.round(intervall * ef);
      ef = Math.max(1.3, ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
    }
    return { intervall, ef, wiederholungen, faelligTag: heuteTag + intervall };
  }

  function faellig(karte, heuteTag) { return karte.faelligTag <= heuteTag; }

  return { NEUE_KARTE, naechsteWiederholung, faellig };
  // Spätere Tasks ergänzen hier: tagNummer, paarung, zieheGebiet, verstoesstGegenGK,
  // serialisiere, deserialisiere, NEUER_STATE — und erweitern das return-Objekt.
});
```
**Step 4:** Run `node --test tests/engine.srs.test.js` → PASS.
**Step 5:** Commit `git add app/engine.js tests/engine.srs.test.js && git commit -m "feat: SRS-Engine (SM-2 light) + Tests"`

### Task 1.2: Tages-Zähler & Fälligkeit
**Step 1 — Test ergänzen** in `tests/engine.srs.test.js`: `faellig(k, heute)` true wenn `faelligTag<=heute`. `tagNummer(datumMs)` liefert ganzzahligen Tagesindex (für Fälligkeit ohne Zeitzonen-Drama: `Math.floor(datumMs/86400000)`).
**Step 2:** Run → FAIL.
**Step 3 — Impl:** in `engine.js` `export function tagNummer(ms){ return Math.floor(ms/86400000); }`.
**Step 4:** Run → PASS. **Step 5:** Commit.

### Task 1.3: Gebiets-Paarung für den Simulator
**Files:** Test `tests/engine.simulator.test.js`
**Step 1 — Test:** `paarung('analysis')` → `{ teil1:'analysis', teil2:'geometrie' }` und umgekehrt; `zieheGebiet(zufallsZahl)` wählt deterministisch bei gegebener Zahl in [0,1).
**Step 2:** FAIL.
**Step 3 — Impl:** in `engine.js`:
```js
export function paarung(teil1Gebiet) {
  const anderes = teil1Gebiet === 'analysis' ? 'geometrie' : 'analysis';
  return { teil1: teil1Gebiet, teil2: anderes };
}
export function zieheGebiet(r) { return r < 0.5 ? 'analysis' : 'geometrie'; }
```
**Step 4:** PASS. **Step 5:** Commit.

### Task 1.4: Scope-Filter (GK-Konformität als Code-Guard)
**Files:** Test `tests/engine.scope.test.js`
**Step 1 — Test:** `verstoesstGegenGK(text)` erkennt verbotene Muster (Funktionsschar-Parameter wie `f_a`/`f_k`, `e^`, `\ln`, `e^{`, „windschief", „Hessesche", „normalverteilt", „Signifikanz"). Beispiele:
```js
assert.equal(verstoesstGegenGK('f_a(x)=x^2+a'), true);
assert.equal(verstoesstGegenGK('e^{-x}'), true);
assert.equal(verstoesstGegenGK('f(x)=x^3-3x'), false);
```
**Step 2:** FAIL.
**Step 3 — Impl:** Liste von RegExp in `engine.js`, `verstoesstGegenGK` true bei Treffer. (Wird in Phase 2 vom Python-Validator gespiegelt — beide Quellen halten dieselbe Verbotsliste; Single source: eine `scope_verbote.json`, die JS und Python lesen.)
**Step 4:** PASS. **Step 5:** Commit `feat: GK-Scope-Guard`.

> **Hinweis:** `scope_verbote.json` im Repo-Root anlegen; `engine.js` lädt sie nicht zur Laufzeit (Browser), sondern die Liste wird in `engine.js` als Konstante gepflegt und der Python-Test prüft, dass beide identisch sind (Test in Phase 2).

---

## Phase 2 — Inhalts-Schema & Validierung

### Task 2.1: Inhalts-Schema + leere content.js
**Files:** Create `app/content.js`
**Step 1:** **Create:** `app/content.js` mit Gerüst (gültiges JSON-Objektliteral, von Python parsebar):
```js
const CONTENT = {
  "version": 1,
  "themen": [
    { "key": "ana-symmetrie", "gebiet": "analysis", "name": "Symmetrie" },
    { "key": "ana-nullstellen", "gebiet": "analysis", "name": "Nullstellen" },
    { "key": "ana-extrema", "gebiet": "analysis", "name": "Extrema & Wendepunkte" },
    { "key": "ana-ableitung-graph", "gebiet": "analysis", "name": "Ableitung ↔ Graph" },
    { "key": "ana-integral", "gebiet": "analysis", "name": "Fläche & Integral" },
    { "key": "geo-vektoren", "gebiet": "geometrie", "name": "Vektoren, Betrag, Mittelpunkt" },
    { "key": "geo-ebene", "gebiet": "geometrie", "name": "Ebene: Parameter- & Koordinatenform" },
    { "key": "geo-lage-abstand", "gebiet": "geometrie", "name": "Lage & Abstände" },
    { "key": "geo-spiegelung", "gebiet": "geometrie", "name": "Punkt an Ebene spiegeln" },
    { "key": "geo-dreieck", "gebiet": "geometrie", "name": "Dreieck im Raum" }
  ],
  "verfahren": [],
  "rechnen": [],
  "erklaeren": [],
  "simulator": []
};
window.CONTENT = CONTENT;
```
(Im Browser via klassisches `<script src="content.js">` → `window.CONTENT`, von `ui.js` (ebenfalls klassisch) lesbar. Kein ESM/Node-Export nötig — die Python-Tests parsen die Datei per Regex, führen sie nicht aus. Das Objektliteral muss **gültiges JSON** sein, deshalb doppelte Anführungszeichen.)
**Step 2:** Commit `feat: Inhalts-Schema (leer)`.

### Task 2.2: Python-Loader für content.js
**Files:** Create `tools/load_content.py`
**Step 1:** Funktion `load_content(pfad)` liest `app/content.js`, extrahiert das Objektliteral nach `const CONTENT =` bis zum abschließenden `};` (vor `window.CONTENT = CONTENT;`), `json.loads`. **Test:** `tests/test_content.py::test_laedt` lädt und prüft `version==1` und 10 Themen.
**Step 2:** Run `pytest tests/test_content.py -q` → FAIL.
**Step 3 — Impl** des Loaders (Regex `const CONTENT\s*=\s*(\{.*\});\s*window\.CONTENT` über `re.DOTALL`).
**Step 4:** PASS. **Step 5:** Commit.

### Task 2.3: Schema-Integritätstest
**Files:** `tests/test_content.py`
**Step 1 — Tests** (alle erst rot, dann Inhalte in Phase 3 grün):
- jedes `rechnen`-Item hat `id, thema (∈ themen.key), level∈1..4, typ∈{numerisch,mc}, frage, tipp, loesungsweg` und je nach Typ `loesung` oder `optionen+korrekt`.
- jedes `erklaeren`-Item hat `id, thema, frage, erwartungsbild(list, ≥2)`.
- jedes `verfahren`-Item hat `schritte(list, ≥3)`.
- jeder `simulator`-Eintrag hat `gebiet, teilaufgaben(≥3, je frage+erwartungsbild+afb)`.
- **IDs eindeutig** über alle Item-Listen.
- **Scope-Guard:** kein `frage/loesungsweg/erwartungsbild`-Text matcht die Verbotsliste aus `scope_verbote.json`.
- **Verbotsliste-Sync:** die Regex-Konstante in `app/engine.js` == `scope_verbote.json`.
- **Kein-Original-Test:** Normalisierter Aufgabentext hat <0.6 Jaccard-Ähnlichkeit (Wort-Shingles) zu jedem extrahierten Originalabsatz (aus `tools/extract_exams.py`). Schwelle dokumentiert.
**Step 2:** Run → FAIL (leer/teilweise). **Step 3:** kein Code (Schema erfüllt sich in Phase 3). **Step 4:** Commit `test: Inhalts-Integrität + Scope + Kein-Original`.

### Task 2.4: sympy-Recompute-Harness
**Files:** Create `tools/check_math.py`, Test `tests/test_math.py`
**Step 1:** Konvention: Jedes `rechnen`-Item (und Simulator-Teilaufgabe) bekommt ein optionales Feld `"check"` mit einer maschinenlesbaren Spezifikation, z. B.
```json
"check": { "art": "nullstellen", "f": "x**3-3*x" }            // erwartet: loesung-Menge
"check": { "art": "extremstellen", "f": "x**3-3*x" }
"check": { "art": "integral", "f": "g-f", "von": -2, "bis": 2 }
"check": { "art": "skalar", "ausdruck": "Matrix([6,-3,2]).dot(Matrix([1,2,3]))" }
"check": { "art": "kreuzprodukt", "a": "[-2,3,0]", "b": "[-3,0,2]" }
"check": { "art": "betrag", "v": "[-2,3,0]" }
```
`check_math.py` rechnet pro `art` mit sympy und vergleicht mit `loesung` (Toleranz beachten).
**Step 2 — Test** `tests/test_math.py`: lädt content, ruft für jedes Item mit `check` `pruefe_item(item)` → muss `True` liefern. (Erst rot bis Phase 3 Items existieren.)
**Step 3 — Impl** `check_math.py` mit den o. g. `art`-Handlern (sympy: `solve`, `diff`, `integrate`, `Matrix`).
**Step 4:** Run `pytest tests/test_math.py -q`. **Step 5:** Commit `feat: sympy-Recompute-Harness`.

---

## Phase 3 — Inhalts-Authoring (pro Thema, jeweils verifiziert)

> **Vorgehen je Thema (10 Themen):** (1) Items schreiben (verfahren + rechnen Level 1–4 + erklaeren), jeweils mit `check`-Feld wo rechenbar; (2) `pytest tests/test_content.py tests/test_math.py -q` grün; (3) **Wolfram-Gegenprobe** für jedes rechnerische Ergebnis (siehe Phase 9-Methode, hier schon pro Thema anwenden) → Ergebnis in `tests/wolfram_log.md` notieren; (4) Commit `feat(inhalt): <thema>`.
>
> **Quelle für Frageformen:** O-Ton der Erwartungsbilder aus den Prüfungen (z. B. „Beschreiben Sie die Vorgehensweise beim Erstellen der Koordinatengleichung der Ebene", „Begründen Sie ohne Rechnung …") — **Formulierungen übernehmen, Zahlen/Funktionen neu**.
> **Scope:** strikt GK, keine Funktionsscharen.

### Task 3.1–3.5: Analysis-Themen
- **3.1 Symmetrie:** verfahren (Achsen-/Punktsymmetrie-Prüfschema); rechnen (gerade/ungerade Exponenten erkennen, `f(-x)`-Vergleich, Punktprobe); erklaeren („Erläutern Sie, wie man ganzrationale Funktionen auf Symmetrie untersucht").
- **3.2 Nullstellen:** rechnen (Ausklammern, p-q bei quadratisch, Anzahl aus Grad/Graph); erklaeren („Begründen Sie ohne Rechnung anhand des Graphen, dass f genau eine Nullstelle hat").
- **3.3 Extrema & Wendepunkte:** verfahren (notwendig/hinreichend, f''-Kriterium); rechnen (f', f'', Extremstellen, Art, WP); erklaeren („Begründen Sie die Existenz eines Wendepunktes ohne weitere Rechnung").
- **3.4 Ableitung ↔ Graph:** rechnen/mc (Vorzeichen f', Hoch/Tief → Nullstellen von f'); erklaeren („Schließen Sie aus dem Verlauf von f auf den Verlauf von f′").
- **3.5 Fläche & Integral:** verfahren (Schnittstellen=Grenzen, obere−untere, abschnittsweise bei Vorzeichenwechsel); rechnen (bestimmtes Integral, Fläche zwischen zwei Graphen, Fläche f & f′); erklaeren („Beschreiben Sie die Vorgehensweise zur Berechnung der Fläche zwischen f und f′").
- Je Task: Steps wie oben (schreiben → pytest → Wolfram → commit).

### Task 3.6–3.10: Geometrie-Themen
- **3.6 Vektoren/Betrag/Mittelpunkt:** rechnen (Verbindungsvektor, Betrag, Mittelpunkt, Vektorzug `OD=…`); erklaeren (Bedeutung Stütz-/Spannvektor).
- **3.7 Ebene Parameter↔Koordinatenform:** verfahren (Normalenvektor via Kreuzprodukt, d einsetzen); rechnen (Punktprobe, Normalenvektor ablesen, Koordinatenform aufstellen); erklaeren („Beschreiben Sie die Vorgehensweise beim Erstellen der Koordinatengleichung", „Erläutern Sie, was die Parametergleichung beschreibt").
- **3.8 Lage & Abstände:** rechnen (Punkt in Ebene?, Abstand Punkt–Punkt, Abstand Punkt–Ebene); erklaeren (Vorgehensweise Abstand Punkt–Ebene).
- **3.9 Spiegelung an Ebene:** verfahren (Lotgerade → Durchstoßpunkt D → OP′=OD+PD bzw. OB′=OB+2·BD); erklaeren („Beschreiben Sie die Vorgehensweise zur Bestimmung des Spiegelpunktes").
- **3.10 Dreieck im Raum:** rechnen (gleichschenklig via Beträge, Fläche ½|AB×AC|, Kreis M & r über Durchmesser, Parallelogramm-Punkt D — mehrere Lösungen); erklaeren (warum mehrere D möglich).

### Task 3.11: Simulator-Aufgaben
- Pro Gebiet ≥2 vollständige, mehrteilige (a–d) **prüfungsähnliche** Aufgaben mit AFB I/II/III und Erwartungsbild je Teil. Struktur an Originalen orientiert, **andere Zahlen/Funktionen**. Kein-Original-Test muss grün bleiben.
- Steps: schreiben → pytest (inkl. Kein-Original + Math) → Wolfram → commit.

---

## Phase 4 — Persistenz (localStorage)

### Task 4.1: Storage-Wrapper mit Schema-Version
**Files:** add to `app/engine.js`, Test `tests/engine.storage.test.js`
**Step 1 — Test:** reine Funktionen `serialisiere(state)`/`deserialisiere(json)` mit `schemaVersion`; unbekannte/alte Version → `NEUER_STATE`. (DOM/localStorage selbst wird in `ui.js` dünn umwickelt, hier nur reine Serialisierung getestet.)
**Step 2:** FAIL. **Step 3:** Impl `serialisiere`/`deserialisiere`/`NEUER_STATE` (hält SR-Karten pro Item-ID, erledigte Stufen pro Thema, Reflexionen). **Step 4:** PASS. **Step 5:** Commit.

### Task 4.2: Export/Import JSON
**Step 1 — Test:** `serialisiere` → `deserialisiere` ist Identität (Round-Trip). **Step 2:** FAIL→**Step 3:** ggf. Fix. **Step 4:** PASS. **Step 5:** Commit.
(UI-Knöpfe „Sichern/Laden" kommen in Phase 6.)

---

## Phase 5 — KaTeX-Rendering + Fallback

### Task 5.1: Render-Helfer mit Fallback
**Files:** add to `app/ui.js` (neu)
**Step 1:** `rendereMathe(rootEl)` ruft `renderMathInElement` (auto-render) mit Delimitern `\(..\)` und `\[..\]`; in `try/catch` — bei Fehler bleibt der Rohtext stehen (kein Absturz). Manueller Check: eine Beispielformel rendert; bei absichtlich kaputtem LaTeX bleibt lesbarer Text.
**Step 2:** Commit `feat: KaTeX-Render mit Fallback`.

---

## Phase 6 — Modus 1: Lern-Trainer (UI)

> UI in `app/ui.js` + Markup in `app/index.html` + Stil `app/styles.css` (an `spirale.css` angelehnt: Akzent Analysis `#2E75B6`, Geometrie `#70AD47`). Render-Funktionen pro Ansicht, Hash-Routing (`#/start`, `#/thema/<key>/<stufe>`, `#/faellig`, `#/simulator`).

### Task 6.1: App-Shell & Navigation
Startbildschirm: zwei Gebiets-Spalten mit Themenliste, „Heute fällig (n)"-Knopf, „Prüfungs-Simulator"-Knopf, „Diagnose starten", „Sichern/Laden". Commit.

### Task 6.2: Stufe 1 — Verfahren (Schritte sortieren)
Drag-/Klick-Sortierung der `schritte`; „Prüfen" markiert richtig/falsch; bei korrekt Stufe als erledigt markieren. Commit.

### Task 6.3: Stufe 2 — Selbst rechnen
`numerisch` (Eingabe + Toleranzvergleich) und `mc` (Optionen). Tipp-Knopf, „Lösungsweg zeigen" (KaTeX). Level-Fortschritt. Mini-Fehlertyp-Reflexion bei falsch. Commit.

### Task 6.4: Stufe 3 — Frei erklären + SRS
Frage zeigen → „Ich hab's erklärt, aufdecken" → Erwartungsbild (Stichpunkte) → 4 Selbsteinschätzungs-Knöpfe → `naechsteWiederholung` aktualisiert SR-Karte. Commit.

### Task 6.5: „Heute fällig"-Stapel
Sammelt alle SR-Karten mit `faellig(...)` über beide Gebiete, führt nacheinander durch Stufe-3-Logik. Commit.

### Task 6.6: Diagnose-Einstieg
~8 gemischte Fragen (1 pro Thema, Mix Stufe 2/3), am Ende „Kann ich / Luft"-Übersicht + Themen-Empfehlung (Links). Überspringbar, nur beim ersten Start angeboten. Commit.

### Task 6.7: Export/Import-Knöpfe
„Sichern" lädt `state` als `.json`-Download; „Laden" liest Datei → `deserialisiere`. Robuster Umgang mit kaputter Datei (Hinweis). Commit.

---

## Phase 7 — Audio-Aufnahme (optional)

### Task 7.1: MediaRecorder-Wrapper
**Step 1:** `app/ui.js`: Aufnahme-Knopf bei Stufe 3 / Simulator-Vortrag. `navigator.mediaDevices.getUserMedia({audio:true})`; bei Ablehnung/kein Gerät → Knopf deaktiviert + Hinweis, App läuft weiter. Aufnahme nur im Speicher (Blob-URL) zum Zurückhören; **nicht** persistiert. Manueller Browser-Check (Mikrofon erlauben → aufnehmen → abspielen; ablehnen → graceful). **Step 2:** Commit `feat: optionale lokale Audio-Aufnahme`.

---

## Phase 8 — Modus 2: Prüfungs-Simulator (UI)

### Task 8.1: Ziehen & Ablauf-Gerüst
„Prüfung ziehen" → `zieheGebiet(Math.random())` → `paarung(...)`; State-Machine: `vorbereitung → vortrag → gespraech → reflexion`. Commit.

### Task 8.2: Teil 1 — 20-min-Vorbereitung
Aufgabe (mehrteilig) anzeigen, **20:00-Timer** (sichtbar, Start/Pause), Hinweis „auf Papier rechnen". Bei Ablauf sanfter Hinweis, kein Hard-Stop. **Während der Vorbereitung keine Erwartungsbilder/Hilfen** (Didaktik-Regel). Commit.

### Task 8.3: Teil 1 — 10-min-Vortrag
„Vortrag starten" → 10:00-Timer; pro Teilaufgabe einzeln „Erwartungsbild aufdecken" + AFB-Hinweis; optional Aufnahme. Commit.

### Task 8.4: Teil 2 — 10-min-Gespräch
Fragenfolge aus `erklaeren`-Items des **anderen** Gebiets, eine nach der anderen, 10:00-Timer, Erwartungsbild je Frage aufdeckbar. Commit.

### Task 8.5: Abschluss-Reflexion + Rücklinks
Fehlertyp-Reflexion (Pattern 3): was lief gut/schlecht, Fehlertypen ankreuzen → konkrete Empfehlungen mit **Links** in die betroffenen Trainer-Themen. In `state` speichern. Commit.

---

## Phase 9 — Integrations-QA, Wolfram-Gesamtprüfung, Deploy

### Task 9.1: Wolfram-Gesamtgegenprobe (Pflicht)
**Methode:** Für **jedes** `rechnen`-Item und jede Simulator-Teilaufgabe mit Zahlenergebnis eine Wolfram-Abfrage stellen:
- `WolframLanguageEvaluator` für exakte Algebra (z. B. `Solve[x^3-3x==0,x]`, `D[...]`, `Integrate[...]`, `Cross[...]`, `Norm[...]`), oder `WolframAlpha` für Klartext-Checks.
- Ergebnis muss mit `loesung`/`loesungsweg`/`erwartungsbild` übereinstimmen.
- **Log:** `tests/wolfram_log.md` — pro Item: ID, Abfrage, Wolfram-Ergebnis, ✓/✗. Abweichungen werden gefixt, dann erneut geprüft.

> **Ultracode-Hinweis:** Diese Gegenprobe ist ideal als Workflow-Fan-out (ein Agent je Thema/Item-Batch ruft sympy + Wolfram, Schema `{id, ok, wolfram, abweichung}`), Ergebnisse einsammeln und nur die ✗ nacharbeiten.

### Task 9.2: Voller Testlauf
Run: `pytest tests/ -q` (Inhalt+Mathe) **und** `node --test tests/` (Engine) → alles grün. Commit nur bei grün.

### Task 9.3: Manueller Browser-Funktionscheck
Checkliste lokal (Doppelklick `app/index.html`) **und** über lokalen Server (`python -m http.server` in `app/`): Navigation, alle drei Stufen je Gebiet, „Heute fällig", Diagnose, Simulator-Volllauf (Timer laufen, Erwartungsbilder decken auf), Export/Import, Aufnahme erlauben+ablehnen, Formeln rendern **mit deaktiviertem Netz** (vendored KaTeX). Responsive: Handy-Breite (DevTools) + Laptop. Befunde notieren, fixen, Commit.

### Task 9.4: Deploy-Konfig
**Create:** `netlify.toml`
```toml
[build]
  publish = "app"
  command = ""
```
Für GH Pages alternativ Hinweis in `README.md`: Pages-Quelle = `/app` (oder `app/` in `gh-pages`-Branch). **Create:** `README.md` (Kurzbeschreibung, Scope, „nicht für EAN", Deploy-Hinweis, Datenschutz: alles lokal). Commit.

### Task 9.5: Abschluss
`superpowers:finishing-a-development-branch` für Merge/PR-Entscheidung. (Falls kein Remote: lokal auf `main` mergen.)

---

## Definition of Done
- [ ] Beide Gebiete vollständig mit Items je Stufe; Funktionsscharen/EAN-Inhalte ausgeschlossen (Scope-Test grün).
- [ ] Jedes rechnerische Item von **sympy UND Wolfram** bestätigt (`tests/wolfram_log.md` ohne offene ✗).
- [ ] Kein-Original-Test grün (keine 1:1-Prüfungsaufgaben).
- [ ] `pytest tests/` und `node --test tests/` grün.
- [ ] Simulator-Volllauf 20+10+10 manuell verifiziert; Timer + Erwartungsbild-Aufdecken funktionieren.
- [ ] Offline (vendored KaTeX) rendert; localStorage-Persistenz + Export/Import funktionieren; Mikrofon-Ablehnung graceful.
- [ ] Auf Netlify/GH deploybar (publish=`app`).
