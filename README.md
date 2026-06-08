# Mündlich-Abi Mathe — Trainer & Prüfungs-Simulator

Lern-App zur Vorbereitung auf die **mündliche Mathe-Nachprüfung** (Abitur, **grundlegendes
Anforderungsniveau / GAN**). Zwei Gebiete, genau wie in der Prüfung gekoppelt: **Analysis** und
**Analytische Geometrie**.

> Niveau: **GAN**. Bewusst **nicht** enthalten: Funktionsscharen, e^x/ln, Ketten-/Quotientenregel,
> windschiefe Abstände, Hessesche Normalform, Stochastik. (Für erhöhtes Niveau ist die App nicht gedacht.)

## Funktionen

- **Lern-Trainer** — pro Thema drei Stufen:
  1. **Verfahren** (Schritte in die richtige Reihenfolge bringen),
  2. **Selbst rechnen** (auto-korrigierte Aufgaben mit Tipp + Lösungsweg),
  3. **Frei erklären** (Frage im Prüfungs-O-Ton → Erwartungsbild aufdecken → Selbsteinschätzung
     mit **Spaced Repetition**, optionale **Audio-Aufnahme** zum Zurückhören).
- **Heute fällig** — Wiederholungsstapel über beide Gebiete (Spaced Repetition).
- **Diagnose-Einstieg** — kurzer gemischter Durchlauf mit Themen-Empfehlung.
- **Prüfungs-Simulator** — echtes Timing **20 + 10 + 10 min**: Aufgabe ziehen (Gebiete gekoppelt),
  Vorbereitung, Vortrag (Erwartungsbild pro Teilaufgabe aufdeckbar), Prüfungsgespräch im anderen
  Gebiet, Abschluss-Reflexion mit Rücklinks in die passenden Trainer-Themen.

## Datenschutz

Alles bleibt **lokal im Browser** (`localStorage`). Keine Cloud, kein Login, keine Übertragung.
Audio-Aufnahmen werden nur im Speicher gehalten und nicht gespeichert. Fortschritt lässt sich als
JSON **sichern/laden** (Backup / Gerätewechsel).

## Starten

- **Lokal:** `app/index.html` im Browser öffnen (Doppelklick genügt — alles läuft offline, KaTeX ist
  lokal gebündelt).
- **Lokaler Server (optional):** `python -m http.server` im Ordner `app/`, dann `http://localhost:8000`.
- **Hosting:** Veröffentlichungs-Verzeichnis ist `app/`.
  - **Netlify:** über `netlify.toml` vorkonfiguriert (`publish = "app"`).
  - **GitHub Pages:** Pages-Quelle auf den Ordner `/app` setzen (bzw. `app/` per Action deployen).

## Inhalt & Qualitätssicherung

- Aufgaben sind **prüfungsähnlich, aber keine Originale** (eigene Zahlen/Funktionen; ein
  Jaccard-Plagiatstest gleicht gegen die echten Prüfungen ab).
- **Jedes** rechnerische Item ist doppelt verifiziert — mit **sympy** *und* dem **Wolfram-Konnektor**.
  Protokoll: [`tests/wolfram_log.md`](tests/wolfram_log.md).
- Ein **GK-Scope-Guard** stellt sicher, dass keine über das Niveau hinausgehenden Methoden auftauchen.

## Tests

```bash
node --test tests/*.test.js     # Engine + UI-Logik (Node, kein Build)
python -m pytest tests/ -q       # Inhalts-Schema, GK-Scope, Kein-Original, sympy-Recompute
node tools/browser_verify.js     # End-to-End im echten Browser (Playwright/Chromium)
```

## Aufbau

```
app/            # Deploy-Wurzel (statische Seite, klassische Skripte, file://-tauglich)
  index.html
  styles.css
  engine.js     # reine Logik: Spaced Repetition, Gebiets-Paarung, GK-Scope, Persistenz
  content.js    # window.CONTENT — alle Themen/Aufgaben (sympy+Wolfram-verifiziert)
  ui.js         # Routing, Views, Storage, KaTeX-Render, Simulator
  vendor/katex/ # lokal gebündeltes KaTeX (offline / schulnetzfest)
tools/          # Generierungs-/Prüf-Skripte (Extraktion, Merge, Browser-QA)
tests/          # node:test + pytest + Verifikationsprotokoll
docs/plans/     # Design-Doc + Implementierungsplan
```
