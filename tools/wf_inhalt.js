export const meta = {
  name: 'muendlich-inhalt',
  description: 'Authort & verifiziert (sympy + Wolfram) GK-Mathe-Inhalte fuer den muendlich-ABI-Trainer',
  phases: [
    { title: 'Autor', detail: 'pro Thema Items erzeugen, mit sympy selbst geprueft' },
    { title: 'Verify', detail: 'unabhaengig: sympy + Wolfram + Frage-Loesung-Abgleich, repariert Fehler' },
  ],
}

// ---------------------------------------------------------------------------
// Gemeinsame Spezifikation (in jeden Prompt eingebettet)
// ---------------------------------------------------------------------------
const SPEC = `
GK-SCOPE (STRENG einhalten):
- Nur GANZRATIONALE Funktionen bis Grad 4 (Analysis) und Vektorgeometrie im R^3 (Geometrie).
- VERBOTEN: Funktionsscharen (KEIN f_a, g_k, ...), e^x / ln, Ketten-/Quotientenregel,
  windschiefe Geraden-Abstaende, 3D Punkt-Gerade-Abstand, Hessesche Normalform/HNF, Stochastik.
- Formeln IMMER als LaTeX in \\( ... \\) (inline) bzw. \\[ ... \\] (abgesetzt).
  Vektoren als \\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}. Keine Unicode-Mathesymbole.
- NIEMALS eine Originalaufgabe aus echten Pruefungen abbilden — eigene Zahlen/Funktionen waehlen.
  Frage-FORMULIERUNGEN duerfen im Pruefungsstil sein ("Beschreiben Sie die Vorgehensweise ...",
  "Begruenden Sie ohne Rechnung ...", "Weisen Sie nach, dass ...", "Erlaeutern Sie ...").

SCHEMA der Item-Typen (Feldnamen exakt so):
- verfahren: { "id", "frage", "schritte": [>=3 Strings in RICHTIGER Reihenfolge] }
    (z.B. Standardverfahren als geordnete Schritte; werden im Trainer zum Sortieren gemischt.)
- rechnen: { "id", "level" (1..4), "typ" ("numerisch" | "mc"), "frage", "tipp", "loesungsweg", ["check"], ... }
    numerisch: zusaetzlich "loesung" = GENAU EINE Zahl. Bei irrationalen/gerundeten Werten
       "toleranz" setzen (z.B. 0.01) und loesung passend gerundet angeben (z.B. 2.83).
    mc: zusaetzlich "optionen" (>=3 Strings) und "korrekt" (Integer-Index der richtigen Option).
- erklaeren: { "id", "frage", "erwartungsbild": [>=2 Stichpunkte] }
    (Frage im muendlichen Pruefungsstil; erwartungsbild = die erwarteten Antwort-Stichpunkte.)

CHECK-Feld (maschinelle Verifikation, sympy-Syntax; verfuegbar: x,y,z, Matrix, Rational, sqrt, diff, integrate, solve):
- numerisch  -> "check": { "art":"ausdruck", "expr":"<sympy-Ausdruck, der die loesung ergibt>" }
       Bsp: { "art":"ausdruck", "expr":"integrate(-5*x**2/4+5,(x,-2,2))" } fuer loesung 13.33 (toleranz 0.01).
- Mengen-Antwort (z.B. Nullstellen/Extremstellen): baue es als mc ODER als numerisch auf EINEN Wert
       (z.B. "Bestimmen Sie die groesste Nullstelle"). Optional check
       { "art":"menge", "gleichung":"<expr>", "var":"x", "erwartet":[ "-sqrt(3)", "0", "sqrt(3)" ] }.
- Vektor-/Koordinaten-Antwort: baue es als mc; check
       { "art":"vektor", "expr":"Matrix([-2,3,0]).cross(Matrix([-3,0,2]))", "erwartet":[6,4,9] }.
- Jedes numerisch-Item MUSS ein "check" mit art "ausdruck" haben. mc darf optional check (menge/vektor) haben.

IDs: prefix mit dem Thema-Key, z.B. "geo-ebene-v1" (verfahren), "geo-ebene-r1".."r6" (rechnen),
     "geo-ebene-e1".."e4" (erklaeren). Eindeutig.

UMFANG pro Thema: 1 verfahren (wo ein Standardverfahren existiert; sonst 0), 5-6 rechnen
(ueber level 1..4 verteilt, Mischung numerisch/mc), 3-4 erklaeren.
`

// ---------------------------------------------------------------------------
// Themen mit fachlichem Fokus (10)
// ---------------------------------------------------------------------------
const TOPICS = [
  { key: 'ana-symmetrie', gebiet: 'analysis',
    fokus: 'Achsen-/Punktsymmetrie ganzrationaler Funktionen ueber gerade/ungerade Exponenten; f(-x) berechnen und mit f(x) bzw. -f(x) vergleichen. erklaeren: "Erlaeutern Sie, wie man ganzrationale Funktionen auf Symmetrie untersucht." rechnen: Symmetrietyp bestimmen (mc), f(-x) auswerten (numerisch).' },
  { key: 'ana-nullstellen', gebiet: 'analysis',
    fokus: 'Nullstellen ganzrationaler Funktionen: Ausklammern, p-q-Formel, Anzahl aus Grad/Graph. rechnen: groesste/kleinste Nullstelle (numerisch), Anzahl der Nullstellen (numerisch/mc). erklaeren: "Begruenden Sie ohne Rechnung anhand des Graphen, dass f genau eine Nullstelle hat."' },
  { key: 'ana-extrema', gebiet: 'analysis',
    fokus: 'Extrema via f\'=0 und f\'\'-Kriterium; Art bestimmen; Wendepunkte (f\'\'=0, f\'\'\' != 0). verfahren: Schritte der Extremstellenbestimmung. rechnen: f\'\'(x0) auswerten, x-Koordinate eines Hoch-/Tiefpunkts (numerisch). erklaeren: "Begruenden Sie ohne weitere Rechnung die Existenz eines Wendepunktes."' },
  { key: 'ana-ableitung-graph', gebiet: 'analysis',
    fokus: 'Vom Graphen von f auf f\' schliessen: Vorzeichen von f\', Nullstellen von f\' an Extremstellen von f. Ueberwiegend mc/konzeptionell. erklaeren: "Schliessen Sie aus dem Verlauf von f auf den Verlauf von f\'."' },
  { key: 'ana-integral', gebiet: 'analysis',
    fokus: 'Bestimmtes Integral; Flaeche zwischen zwei Graphen (obere minus untere); Flaeche zwischen f und f\'. verfahren: Schnittstellen=Grenzen, obere-untere, abschnittsweise bei Vorzeichenwechsel. rechnen: Integralwert/Flaecheninhalt (numerisch, ggf. toleranz). erklaeren: "Beschreiben Sie die Vorgehensweise zur Berechnung der Flaeche zwischen f und f\'."' },
  { key: 'geo-vektoren', gebiet: 'geometrie',
    fokus: 'Verbindungsvektor zweier Punkte, Betrag eines Vektors, Mittelpunkt zweier Punkte, Vektorzug (OD = ... ). rechnen: Betrag (numerisch, toleranz), Mittelpunkt-Koordinate (numerisch) oder Vektor (mc, check vektor). erklaeren: Bedeutung von Stuetz-/Spannvektor.' },
  { key: 'geo-ebene', gebiet: 'geometrie',
    fokus: 'Ebene von Parameter- in Koordinatenform: Normalenvektor via Kreuzprodukt der Spannvektoren, d durch Einsetzen eines Punktes; Normalenvektor aus Koordinatenform ablesen; Punktprobe. verfahren: Schritte Parameter->Koordinatenform. rechnen: Komponente des Normalenvektors / d (numerisch), Normalenvektor (mc, check vektor), Punktprobe-Wert (numerisch). erklaeren: "Beschreiben Sie die Vorgehensweise beim Erstellen der Koordinatengleichung der Ebene."' },
  { key: 'geo-lage-abstand', gebiet: 'geometrie',
    fokus: 'Liegt ein Punkt in der Ebene (Einsetzen)? Abstand Punkt-Punkt; Abstand Punkt-Ebene (nur GK: via Lotfusspunkt-Idee bzw. Einsetzen in normierte Koordinatenform). rechnen: Abstand P-P (numerisch, toleranz), linke Seite der Ebenengleichung beim Einsetzen (numerisch). erklaeren: Vorgehensweise Abstand Punkt-Ebene.' },
  { key: 'geo-spiegelung', gebiet: 'geometrie',
    fokus: 'Punkt an Ebene spiegeln: Lotgerade durch P mit Normalenvektor als Richtung, Durchstosspunkt D mit der Ebene, dann OP\' = OD + PD bzw. OP\' = OP + 2*PD. verfahren: diese Schritte. rechnen: einzelne Zwischengroessen (numerisch). erklaeren: "Beschreiben Sie die Vorgehensweise zur Bestimmung des Spiegelpunktes P\'."' },
  { key: 'geo-dreieck', gebiet: 'geometrie',
    fokus: 'Dreieck im Raum: gleichschenklig ueber gleiche Seitenbetraege nachweisen; Flaeche = 1/2 |AB x AC|; Kreis ueber Durchmesser (Mittelpunkt, Radius); Parallelogramm ABCD ergaenzen (mehrere moegliche D). rechnen: Flaecheninhalt (numerisch, toleranz), Seitenbetrag (numerisch), Punkt D (mc, check vektor). erklaeren: warum mehrere Punkte D moeglich sind.' },
]

// ---------------------------------------------------------------------------
// Simulator-Aufgaben (2): je eine vollstaendige, mehrteilige, pruefungsAEHNLICHE Aufgabe
// ---------------------------------------------------------------------------
const SIMS = [
  { id: 'sim-ana-1', gebiet: 'analysis',
    fokus: 'Ganzrationale Funktion 3. Grades (EIGENE Koeffizienten). Teilaufgaben a-d mit steigendem AFB: a) Symmetrie/Nullstellen-Argument (AFB I/II), b) Extrem-/Wendepunkt berechnen (AFB II), c) aus f auf f\' schliessen/skizzieren beschreiben (AFB III), d) Flaeche zwischen f und f\' Vorgehensweise (AFB II/III). Pro Teilaufgabe frage + erwartungsbild (Stichpunkte) + afb.' },
  { id: 'sim-geo-1', gebiet: 'geometrie',
    fokus: 'Dreieck ABC im R^3 mit EIGENEN Koordinaten. a) gleichschenklig nachweisen (AFB I/II), b) Flaecheninhalt (AFB II), c) Kreis ueber eine Kante als Durchmesser: Mittelpunkt+Radius (AFB II/III), d) zu Parallelogramm ABCD ergaenzen, zwei verschiedene D (AFB III). Pro Teilaufgabe frage + erwartungsbild + afb.' },
]

// ---------------------------------------------------------------------------
// Schemas (structured output)
// ---------------------------------------------------------------------------
const FRAGMENT_SCHEMA = {
  type: 'object',
  required: ['verfahren', 'rechnen', 'erklaeren'],
  additionalProperties: false,
  properties: {
    verfahren: { type: 'array', items: {
      type: 'object', required: ['id', 'frage', 'schritte'], additionalProperties: false,
      properties: { id: { type: 'string' }, frage: { type: 'string' },
        schritte: { type: 'array', minItems: 3, items: { type: 'string' } } } } },
    rechnen: { type: 'array', items: {
      type: 'object', required: ['id', 'level', 'typ', 'frage', 'tipp', 'loesungsweg'], additionalProperties: false,
      properties: {
        id: { type: 'string' }, level: { type: 'integer' }, typ: { type: 'string' },
        frage: { type: 'string' }, tipp: { type: 'string' }, loesungsweg: { type: 'string' },
        loesung: { type: 'number' }, toleranz: { type: 'number' },
        optionen: { type: 'array', items: { type: 'string' } }, korrekt: { type: 'integer' },
        check: { type: 'object', additionalProperties: true } } } },
    erklaeren: { type: 'array', items: {
      type: 'object', required: ['id', 'frage', 'erwartungsbild'], additionalProperties: false,
      properties: { id: { type: 'string' }, frage: { type: 'string' },
        erwartungsbild: { type: 'array', minItems: 2, items: { type: 'string' } } } } },
  },
}

const VERIFY_SCHEMA = {
  type: 'object',
  required: ['verfahren', 'rechnen', 'erklaeren', 'pruefprotokoll'],
  additionalProperties: false,
  properties: {
    ...FRAGMENT_SCHEMA.properties,
    pruefprotokoll: { type: 'array', items: {
      type: 'object', required: ['id', 'status'], additionalProperties: false,
      properties: {
        id: { type: 'string' }, status: { type: 'string' }, // "ok" | "korrigiert" | "entfernt"
        wolfram_query: { type: 'string' }, wolfram_ergebnis: { type: 'string' },
        anmerkung: { type: 'string' } } } },
  },
}

const SIM_SCHEMA = {
  type: 'object',
  required: ['id', 'gebiet', 'teilaufgaben', 'pruefprotokoll'],
  additionalProperties: false,
  properties: {
    id: { type: 'string' }, gebiet: { type: 'string' },
    teilaufgaben: { type: 'array', minItems: 4, items: {
      type: 'object', required: ['frage', 'erwartungsbild', 'afb'], additionalProperties: false,
      properties: { frage: { type: 'string' },
        erwartungsbild: { type: 'array', minItems: 1, items: { type: 'string' } },
        afb: { type: 'string' } } } },
    pruefprotokoll: { type: 'array', items: {
      type: 'object', required: ['teil', 'status'], additionalProperties: false,
      properties: { teil: { type: 'string' }, status: { type: 'string' },
        wolfram_query: { type: 'string' }, wolfram_ergebnis: { type: 'string' },
        anmerkung: { type: 'string' } } } },
  },
}

// ---------------------------------------------------------------------------
// Pipeline: pro Thema  Autor -> Verify(+Repair)
// ---------------------------------------------------------------------------
log(`Starte Inhalts-Authoring fuer ${TOPICS.length} Themen + ${SIMS.length} Simulator-Aufgaben`)

const themenErgebnisse = await pipeline(
  TOPICS,
  (t) => agent(
    `Du bist Mathematik-Autor (Sekundarstufe II, grundlegendes Anforderungsniveau). Erzeuge die Trainer-Items fuer das Thema "${t.key}" (Gebiet: ${t.gebiet}).\n\nFOKUS: ${t.fokus}\n\n${SPEC}\n\nWICHTIG: Rechne JEDES rechnen-Item mit Python+sympy SELBST nach, bevor du es zurueckgibst (nutze die Bash/python-Tools; pruefe, dass dein check.expr die loesung ergibt und die Mathematik stimmt). Korrigiere, bis alles sympy-sauber ist. Gib NUR das Fragment-Objekt zurueck.`,
    { label: `autor:${t.key}`, phase: 'Autor', schema: FRAGMENT_SCHEMA }
  ),
  (fragment, t) => agent(
    `Du bist unabhaengiger Pruefer fuer GK-Mathe-Inhalte. Hier ein Fragment fuer Thema "${t.key}" (${t.gebiet}):\n\n${JSON.stringify(fragment)}\n\n${SPEC}\n\nDEINE AUFGABE — pruefe JEDES Item unabhaengig und repariere Fehler:\n1) Rechne jedes rechnen-Item mit Python+sympy nach (loesung vs check.expr).\n2) Cross-Check mit dem Wolfram-Konnektor: nutze ToolSearch ("select:mcp__claude_ai_Wolfram__WolframLanguageEvaluator"), lade das Tool und verifiziere jedes rechnerische Ergebnis unabhaengig (Solve/Integrate/Cross/Norm ...). Notiere Query+Ergebnis im pruefprotokoll.\n3) Pruefe, ob die loesung/das Erwartungsbild WIRKLICH die Frage beantwortet (Frage<->Loesung-Abgleich), ob der loesungsweg korrekt ist, und ob der GK-Scope eingehalten ist (keine Funktionsscharen/e^x/ln/Kettenregel/windschief/HNF/Stochastik).\n4) Repariere fehlerhafte Items (loesung/check/loesungsweg/Frage). Wenn ein Item unrettbar ist, entferne es und vermerke status "entfernt".\n\nGib das KORRIGIERTE, vollstaendige Fragment zurueck (verfahren/rechnen/erklaeren) PLUS pruefprotokoll (ein Eintrag je rechnen-Item mit id, status "ok"/"korrigiert"/"entfernt", wolfram_query, wolfram_ergebnis, anmerkung). Alle Items im Ergebnis muessen sympy- UND Wolfram-bestaetigt sein.`,
    { label: `verify:${t.key}`, phase: 'Verify', schema: VERIFY_SCHEMA }
  )
)

// Simulator-Aufgaben: Autor -> Verify, parallel zu den Themen-Resultaten
const simErgebnisse = await pipeline(
  SIMS,
  (s) => agent(
    `Du bist Mathematik-Autor. Erstelle EINE vollstaendige, mehrteilige, PRUEFUNGSAEHNLICHE (NIE originale) Aufgabe fuer den Simulator, Gebiet ${s.gebiet}, id "${s.id}".\n\nFOKUS: ${s.fokus}\n\n${SPEC}\n\nGib ein Objekt { id:"${s.id}", gebiet:"${s.gebiet}", teilaufgaben:[ {frage, erwartungsbild:[...], afb}, ... >=4 ] } zurueck (ohne pruefprotokoll). AFB kanonisch ohne Leerzeichen: "I","II","III","I/II","II/III". Rechne alle Loesungen mit Python+sympy nach.`,
    { label: `autor:${s.id}`, phase: 'Autor', schema: { type: 'object', required: ['id', 'gebiet', 'teilaufgaben'], additionalProperties: false, properties: { id: { type: 'string' }, gebiet: { type: 'string' }, teilaufgaben: SIM_SCHEMA.properties.teilaufgaben } } }
  ),
  (aufgabe, s) => agent(
    `Unabhaengige Pruefung der Simulator-Aufgabe "${s.id}" (${s.gebiet}):\n\n${JSON.stringify(aufgabe)}\n\n${SPEC}\n\nPruefe jede Teilaufgabe: sympy-Nachrechnung + Wolfram-Cross-Check (ToolSearch "select:mcp__claude_ai_Wolfram__WolframLanguageEvaluator"), Frage<->Erwartungsbild-Abgleich, GK-Scope, AFB-Plausibilitaet. Repariere Fehler. Stelle sicher, dass die Aufgabe NICHT mit einer bekannten Originalaufgabe identisch ist (eigene Zahlen). Gib die korrigierte Aufgabe (id, gebiet, teilaufgaben) + pruefprotokoll (je Teilaufgabe: teil, status, wolfram_query, wolfram_ergebnis, anmerkung) zurueck.`,
    { label: `verify:${s.id}`, phase: 'Verify', schema: SIM_SCHEMA }
  )
)

return {
  themen: themenErgebnisse,
  simulator: simErgebnisse,
}
