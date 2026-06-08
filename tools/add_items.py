"""Ergaenzt 3 zusaetzliche, sympy+Wolfram-verifizierte GK-Rechenaufgaben in
app/content.js und schreibt die Wolfram-Gegenproben in tests/wolfram_log.md fort.
Einmal-Skript (idempotent: fuegt nur Items hinzu, deren id noch fehlt).
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
from tools.load_content import load_content  # noqa: E402

NEUE_ITEMS = [
    {
        "id": "ana-extrema-r7", "thema": "ana-extrema", "level": 2, "typ": "numerisch",
        "frage": "Gegeben ist \\(f(x)=x^3-6x^2+9x\\). Berechnen Sie den Wert der zweiten "
                 "Ableitung an der Stelle \\(x_0=3\\), also \\(f''(3)\\).",
        "tipp": "Leite zweimal ab und setze \\(x_0=3\\) ein.",
        "loesungsweg": "\\(f'(x)=3x^2-12x+9\\), \\(f''(x)=6x-12\\). "
                       "\\(f''(3)=6\\cdot 3-12=6\\).",
        "loesung": 6,
        "check": {"art": "ausdruck", "expr": "diff(x**3-6*x**2+9*x, x, 2).subs(x, 3)"},
    },
    {
        "id": "geo-vektoren-r7", "thema": "geo-vektoren", "level": 2, "typ": "numerisch",
        "frage": "Gegeben sind die Punkte \\(A(1|2|2)\\) und \\(B(4|6|2)\\). Berechnen Sie "
                 "die Länge des Vektors \\(\\vec{AB}\\).",
        "tipp": "Bilde den Verbindungsvektor \\(\\vec{AB}=\\vec{OB}-\\vec{OA}\\) und dann "
                "seinen Betrag.",
        "loesungsweg": "\\(\\vec{AB}=\\begin{pmatrix}3\\\\4\\\\0\\end{pmatrix}\\), "
                       "\\(|\\vec{AB}|=\\sqrt{3^2+4^2+0^2}=\\sqrt{25}=5\\).",
        "loesung": 5,
        "check": {"art": "ausdruck", "expr": "sqrt(3**2+4**2+0**2)"},
    },
    {
        "id": "ana-integral-r7", "thema": "ana-integral", "level": 2, "typ": "numerisch",
        "frage": "Berechnen Sie das bestimmte Integral \\(\\int_{0}^{2} 3x^2\\,dx\\).",
        "tipp": "Bilde eine Stammfunktion und setze die Grenzen ein.",
        "loesungsweg": "Eine Stammfunktion ist \\(x^3\\). "
                       "\\(\\int_{0}^{2}3x^2\\,dx=[x^3]_0^2=8-0=8\\).",
        "loesung": 8,
        "check": {"art": "ausdruck", "expr": "integrate(3*x**2,(x,0,2))"},
    },
]

# Wolfram-Gegenproben (manuell ueber den Konnektor ausgefuehrt, Ergebnisse bestaetigt).
WOLFRAM_LOG = [
    ("ana-extrema-r7", "ok", "D[x^3-6x^2+9x,{x,2}] /. x->3", "6",
     "Sympy=6, Wolfram=6, = loesung 6. Ganzrational Grad 3, GK-konform."),
    ("geo-vektoren-r7", "ok", "Norm[{4-1,6-2,2-2}]", "5",
     "Sympy=5, Wolfram=5, = loesung 5. Betrag Verbindungsvektor, GK-konform."),
    ("ana-integral-r7", "ok", "Integrate[3 x^2,{x,0,2}]", "8",
     "Sympy=8, Wolfram=8, = loesung 8. Bestimmtes Integral ganzrational, GK-konform."),
]


def main():
    content = load_content()
    vorhandene = {it["id"] for it in content["rechnen"]}
    hinzugefuegt = []
    for it in NEUE_ITEMS:
        if it["id"] in vorhandene:
            continue
        content["rechnen"].append(it)
        hinzugefuegt.append(it["id"])

    if not hinzugefuegt:
        print("Nichts hinzugefuegt (Items existieren bereits).")
        return

    js = "const CONTENT = " + json.dumps(content, ensure_ascii=False, indent=2) + ";\nwindow.CONTENT = CONTENT;\n"
    (ROOT / "app" / "content.js").write_text(js, encoding="utf-8")

    log_pfad = ROOT / "tests" / "wolfram_log.md"
    zeilen = []
    for row in WOLFRAM_LOG:
        if row[0] in hinzugefuegt:
            cells = [str(c).replace("|", "\\|").replace("\n", " ").strip() for c in row]
            zeilen.append("| " + " | ".join(cells) + " |")
    if zeilen:
        with log_pfad.open("a", encoding="utf-8") as f:
            f.write("\n".join(zeilen) + "\n")

    print("Hinzugefuegt:", hinzugefuegt, "| rechnen jetzt:", len(content["rechnen"]))


if __name__ == "__main__":
    main()
