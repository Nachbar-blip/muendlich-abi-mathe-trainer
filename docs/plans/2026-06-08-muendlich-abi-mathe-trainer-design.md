# Design: Mündlich-Abi Mathe — Trainer & Prüfungs-Simulator

**Datum:** 2026-06-08
**Status:** Freigegeben (Brainstorming abgeschlossen)
**Kontext:** Lernapp für die mündliche Mathe-Nachprüfung (Abitur, **GAN** = grundlegendes Anforderungsniveau). Eine Schülerin bereitet sich auf die mündliche Nachprüfung vor; sie zieht eine von mehreren aktuellen Prüfungen.

---

## 1. Problem & Zielgruppe

Eine Schülerin muss die mündliche Mathe-Nachprüfung bestehen. Die App soll sie auf **beide** geprüften Gebiete vorbereiten und sowohl **Verfahrenssicherheit (Rechnen)** als auch **freies Erklären (Sprechen)** aufbauen — laut Bedarfsklärung sind beide etwa gleich stark Baustelle.

### Prüfungsformat (gilt für alle gesichteten Jahrgänge, GAN wie EAN)
- **Teil 1 — Vortrag:** 20 min Vorbereitung, dann 10 min Präsentation einer vollständigen, mehrteiligen Aufgabe aus **einem** Gebiet.
- **Teil 2 — Prüfungsgespräch:** 10 min Dialog über das **andere** Gebiet. Dominierende Frageformen: „Beschreiben Sie die Vorgehensweise …", „Begründen Sie …", „Erläutern Sie *ohne Rechnung* …".
- Die beiden Gebiete sind **gekoppelt**: ist Teil 1 Analysis, ist Teil 2 Geometrie — und umgekehrt. Die Schülerin weiß vorher nicht, welches Gebiet Teil 1 wird ⇒ **beide** müssen sitzen.

### Quellen (im Projektordner, gelesen)
`GAN 2026 A1`, `GAN 2026 A2` (aktuell), `GAN 2020 A1`, `mdl_GAN MA 20`, `mündliche Nachprüfung 170620`, `mdl. Prüfung GAN 2017`, `mdl. Prüfung EAN 2017`, `mdl. Prüfung EAN 2021`.

---

## 2. Inhalts-Scope (GAN, geprüft gegen aktuelle Prüfung + Lehrplan-Audit)

Zwei Gebiete, je in Themen gegliedert:

| 🔵 Analysis | 🟢 Analytische Geometrie |
|---|---|
| Symmetrie (gerade/ungerade Exponenten) | Vektoren: Betrag, Mittelpunkt, Vektorzug |
| Nullstellen (+ Argumentation am Graphen) | Ebene: Parameter- ↔ Koordinatenform (Kreuzprodukt → Normalenvektor, d einsetzen) |
| Extrema (f''-Kriterium) & Wendepunkte | Lagebeziehungen & Abstände (Punkt–Punkt, Punkt–Ebene) |
| Ableitung ↔ Graph (auf f' aus f schließen, skizzieren) | Punkt an Ebene **spiegeln** (Lotgerade, Durchstoßpunkt, OP′) |
| Integral: Fläche zwischen Graphen (auch f & f') | Dreieck im Raum: gleichschenklig nachweisen, Fläche via Kreuzprodukt, Kreis (M, r) über Durchmesser, Parallelogramm ergänzen |

### Ausdrücklich AUSGESCHLOSSEN (GK-Grenze, deckt sich mit Lehrplan-Audit 2026-04-09)
- **Funktionsscharen** (vom Nutzer ausdrücklich bestätigt: im aktuellen GAN raus — die 2020er-Prüfungen mit `f_a`, `f_k` sind veraltet)
- e^x- / ln-Funktionen, Ketten-/Quotientenregel
- windschiefe Geraden-Abstände, 3D Punkt/Gerade-Abstände, HNF-Terminologie
- Stochastik (kommt in dieser mündlichen Prüfung nicht vor)

---

## 3. Architektur & Technik

- **Deploy-Ordner** (gehostet auf Netlify/GitHub Pages): `index.html` + `vendor/katex/` + optional `content.js`.
- **KaTeX lokal gebündelt** (nicht via CDN) — robust gegen Schulnetz-Firewalls, die fremde CDNs blocken; bei Hosting kostenlos. Begründung gegenüber der Familien-Konvention (CDN) dokumentiert.
- **Hausstil** der Trainer-Familie: Spirale-Optik, Analysis-Blau (`#2E75B6`) / Geometrie-Grün (`#70AD47`) als Akzente, responsive (Handy + Laptop).
- **Persistenz** vollständig in `localStorage` (Schema-Version + Key-Namespace), keine Cloud/Anmeldung. **Export/Import als JSON** für Backup/Gerätewechsel.
- **Ansatz C (Hybrid):** eigenständige App im mündlichen Format, Rechen-Items **frisch im Hausformat erzeugt** (nicht blind aus Bestandstrainern kopiert, da diese laut Audit EAN-Verstöße enthalten) und einzeln GK-/rechengeprüft.

### Inhalts-Datenmodell (pro Thema drei Item-Typen → drei Lernstufen)
```js
// Thema
{ key, gebiet: 'analysis'|'geometrie', name, stufen: {...} }

// 1) verfahren  — geordnete Schrittfolge
{ id, thema, typ:'verfahren', frage, schritte:[...], // richtige Reihenfolge
  // gerendert als "Schritte sortieren" oder Lückentext
}

// 2) rechnen — auto-korrigierbar (Hausformat)
{ id, thema, level:1..4, typ:'numerisch'|'mc',
  frage, loesung|optionen+korrekt, toleranz?, tipp, loesungsweg }

// 3) erklaeren — offen + Erwartungsbild (Spaced Repetition)
{ id, thema, typ:'erklaeren', frage, // im Prüfungs-O-Ton
  erwartungsbild:[...], // Stichpunkte wie im Original-Erwartungsbild
  afb? }

// Simulator-Aufgabe (mehrteilig, prüfungsähnlich, NIE Original)
{ id, gebiet, teil1:{ teilaufgaben:[{frage, erwartungsbild, afb}] },
  // Teil 2 wird aus erklaeren-Items des anderen Gebiets gespeist
}
```

---

## 4. Modus 1 — Lern-Trainer

Pro Thema drei Stufen (Didaktik: „Ebenenwechsler" — geführt → frei):

1. **Stufe 1 — Verfahren verstehen (geführt).** Schritte eines Standardverfahrens in richtige Reihenfolge bringen / Lücken im Verfahrensschema füllen. Sofort-Feedback.
2. **Stufe 2 — Selbst rechnen.** Auto-korrigierte Aufgaben (`numerisch`/`mc`) mit Tipp + ausgeschriebenem Lösungsweg, steigendes Level (leicht → prüfungsnah). GK-konform & geprüft.
3. **Stufe 3 — Frei erklären (mündlich).** Prüfungs-O-Ton-Frage → laut erklären (optionaler Aufnahme-Knopf, lokal via MediaRecorder) → „Erwartungsbild aufdecken" → Selbsteinschätzung (Wiederholen / Schwer / Gut / Sicher) → **Spaced Repetition** steuert Wiedervorlage.

**Drumherum:**
- **Diagnose-Einstieg** (Didaktik-Pattern 1, optional/überspringbar): ~8 gemischte Fragen über beide Gebiete → kleine „Kann ich / Luft nach oben"-Übersicht + Themen-Empfehlung.
- **Spaced Repetition:** leichtgewichtiges SM-2, „Heute fällig"-Stapel über beide Gebiete.
- **Mini-Fehlertyp-Reflexion** (Didaktik-Pattern 3) nach Stufe 2/3: Flüchtigkeit / Verfahren unklar / Begriff vergessen.

---

## 5. Modus 2 — Prüfungs-Simulator (echtes 20+10+10)

- **Ziehen:** Knopf zieht eine Prüfungssituation — ein Gebiet = Teil 1 (Vortrag), das andere automatisch Teil 2 (Gespräch). Gekoppelt wie echt.
- **Teil 1 — Vortrag (20 min Vorbereitung → 10 min Vortrag):**
  - neue, **prüfungsähnliche** mehrteilige Aufgabe (a–d, mit AFB-Stufen I/II/III), **nie ein Original** — gleiche Struktur, andere Zahlen/Funktionen.
  - **20-min-Timer** (sichtbar, pausierbar), Schülerin rechnet auf Papier.
  - dann „Vortrag starten": 10-min-Timer, laut präsentieren (optional Aufnahme), pro Teilaufgabe „Erwartungsbild aufdecken" + AFB-Hinweis.
- **Teil 2 — Gespräch (10 min):** Fragenfolge aus dem anderen Gebiet, eine nach der anderen, 10-min-Timer, Erwartungsbild je Frage aufdeckbar.
- **Abschluss-Reflexion** (Fehlertyp-Reflexion, vollständig): gut/schlecht + Fehlertypen → konkrete Übe-Empfehlungen, **verlinkt** in die passenden Trainer-Themen.
- **Didaktik-Regel:** während laufender Simulation **keine** Hilfen/Eingriffe (Klausur-Simulation); Lernen in der Reflexion danach.

---

## 6. Fehlerbehandlung / Robustheit

- KaTeX-Renderfehler → lesbarer Text-Fallback statt Absturz.
- Mikrofon: keine Erlaubnis/kein Gerät → Aufnahme-Knopf deaktiviert mit Hinweis, Rest läuft.
- `localStorage` blockiert (Privatmodus) / voll → App läuft, warnt nur, dass Fortschritt nicht gespeichert wird.
- Defensiver Umgang mit altem gespeicherten Zustand (Schema-Version + Migration/Reset).

---

## 7. Qualitätssicherung (zentral, weil Mathe)

- **Jedes** Item (Rechnung, Lösungsweg, Erwartungsbild, Simulator-Teilaufgabe) wird **maschinell nachgerechnet** UND **über den Wolfram-Konnektor** (`mcp__claude_ai_Wolfram__*`) gegengeprüft.
- **GK-Scope-Filter:** kein Funktionsschar / e^x / ln / Kettenregel / Quotientenregel / windschief / HNF / Stochastik.
- **Keine Originalaufgaben:** Abgleich gegen die 8 Prüfungsdateien — nur strukturelle Ähnlichkeit erlaubt, andere Zahlen/Funktionen.
- **Integritäts-Tests** (Pflichtfelder vorhanden, Lösung ↔ Lösungsweg konsistent, SR-Logik korrekt) + manueller Browser-Funktionscheck vor „fertig".

---

## 8. Bewusst NICHT enthalten (YAGNI)

- Keine Cloud/Backend/Login.
- Kein Mehrbenutzer-/Lehrer-Dashboard.
- Keine automatische Bewertung der gesprochenen Erklärung (nur Selbsteinschätzung + Aufnahme zum Zurückhören).
- Übungspartner-Modus nicht in v1 (Selbstcheck + optionale Aufnahme gewählt).

---

## 9. Offene Punkte

- `git init` im Ordner für Commit des Design-Docs (auf Wunsch).
- Genaue Anzahl Items pro Thema wird im Umsetzungsplan festgelegt (Richtwert: je Thema Stufe 1: 1–2 Verfahren, Stufe 2: 6–10 Rechen-Items, Stufe 3: 4–8 Erklär-Karten; Simulator: ≥2 Aufgaben pro Gebiet).
