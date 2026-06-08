"""Tests fuer das sympy-Recompute-Harness (Task 2.4).

Enthaelt zwei Ebenen:
1. Echte Unit-Tests mit Beispiel-Items, die pruefe_item selbst verifizieren
   (positive UND negative Faelle — sonst ist das Harness nicht abgesichert).
2. Ein parametrisierter Lauf ueber alle Content-Items mit "check"-Feld
   (bei leerem Inhalt: keine Items -> trivially gruen).
"""
import sys
from pathlib import Path

import pytest

ROOT = Path(__file__).resolve().parent.parent
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from tools.check_math import pruefe_item  # noqa: E402
from tools.load_content import load_content  # noqa: E402

CONTENT = load_content(str(ROOT / "app" / "content.js"))


def _items_mit_check():
    out = []
    for item in CONTENT["rechnen"]:
        if "check" in item:
            out.append((item["id"], item))
    for eintrag in CONTENT["simulator"]:
        for i, ta in enumerate(eintrag.get("teilaufgaben", []) or []):
            if "check" in ta:
                out.append((f"{eintrag['id']}#{i}", ta))
    return out


# ---------------------------------------------------------------------------
# 1. Unit-Tests fuer das Harness selbst (echtes Verhalten, nicht nur leerer Content)
# ---------------------------------------------------------------------------

def test_art_menge_nullstellen():
    # x^3 - 3x = 0  ->  {-sqrt(3), 0, sqrt(3)}
    item = {
        "check": {"art": "menge", "gleichung": "x**3 - 3*x", "var": "x",
                  "erwartet": ["-sqrt(3)", "0", "sqrt(3)"]},
    }
    ok, grund = pruefe_item(item)
    assert ok, grund


def test_art_menge_erkennt_falsche_erwartung():
    # Negativkontrolle: falsche erwartete Menge muss als Fehler erkannt werden.
    item = {
        "check": {"art": "menge", "gleichung": "x**3 - 3*x", "var": "x",
                  "erwartet": ["0", "1"]},
    }
    ok, grund = pruefe_item(item)
    assert not ok and grund


def test_art_ausdruck_integral():
    # Integral von -5*x^2/4 + 5 von -2 bis 2 = 40/3 ~ 13.333...
    item = {
        "loesung": 40 / 3,
        "toleranz": 1e-6,
        "check": {"art": "ausdruck", "expr": "integrate(-5*x**2/4 + 5, (x, -2, 2))"},
    }
    ok, grund = pruefe_item(item)
    assert ok, grund


def test_art_ausdruck_exakt_ohne_toleranz():
    # Toleranz 0 -> exakter/symbolischer Vergleich: Rational(40,3) == 40/3.
    item = {
        "loesung": "40/3",
        "check": {"art": "ausdruck", "expr": "integrate(-5*x**2/4 + 5, (x, -2, 2))"},
    }
    ok, grund = pruefe_item(item)
    assert ok, grund


def test_art_ausdruck_erkennt_abweichung():
    # Negativkontrolle: falsche loesung ausserhalb der Toleranz -> Fehler.
    item = {
        "loesung": 13.0,
        "toleranz": 0.01,
        "check": {"art": "ausdruck", "expr": "integrate(-5*x**2/4 + 5, (x, -2, 2))"},
    }
    ok, grund = pruefe_item(item)
    assert not ok and grund


def test_art_vektor_kreuzprodukt():
    # Kreuzprodukt (1,0,0) x (0,1,0) = (0,0,1).
    item = {
        "check": {"art": "vektor",
                  "expr": "Matrix([1,0,0]).cross(Matrix([0,1,0]))",
                  "erwartet": [0, 0, 1]},
    }
    ok, grund = pruefe_item(item)
    assert ok, grund


def test_art_vektor_erkennt_falsche_komponente():
    # Negativkontrolle: falsche erwartete Komponente -> Fehler.
    item = {
        "check": {"art": "vektor",
                  "expr": "Matrix([1,0,0]).cross(Matrix([0,1,0]))",
                  "erwartet": [0, 0, 2]},
    }
    ok, grund = pruefe_item(item)
    assert not ok and grund


def test_unbekannte_art_wird_klar_abgelehnt():
    ok, grund = pruefe_item({"check": {"art": "voodoo"}})
    assert not ok and "voodoo" in grund


# ---------------------------------------------------------------------------
# 2. Lauf ueber den echten Content (bei leerem Inhalt keine Parameter -> gruen)
# ---------------------------------------------------------------------------

@pytest.mark.parametrize("ident,item", _items_mit_check())
def test_content_check(ident, item):
    ok, grund = pruefe_item(item)
    assert ok, f"{ident}: {grund}"
