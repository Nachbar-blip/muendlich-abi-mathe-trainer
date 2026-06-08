(function (root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api; // Node-Tests
  root.Engine = api;                                                         // Browser
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Task 1.1 — Spaced Repetition (SM-2 light)
  // ---------------------------------------------------------------------------

  // Bewertung -> Qualitaet (SM-2 Skala)
  const QUALITAET = {
    wiederholen: 2,
    schwer: 3,
    gut: 4,
    sicher: 5,
  };

  function NEUE_KARTE() {
    return { intervall: 0, ef: 2.5, wiederholungen: 0, faelligTag: 0 };
  }

  function naechsteWiederholung(karte, bewertung, heuteTag = 0) {
    const q = QUALITAET[bewertung];
    if (typeof q !== 'number') {
      throw new Error('Unbekannte Bewertung: ' + bewertung);
    }

    let wiederholungen = karte.wiederholungen;
    let intervall = karte.intervall;

    // Easiness-Faktor neu berechnen (SM-2), Untergrenze 1.3
    let ef = karte.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
    if (ef < 1.3) ef = 1.3;

    if (q < 3) {
      // 'wiederholen' -> Reset
      wiederholungen = 0;
      intervall = 0;
    } else {
      wiederholungen += 1;
      if (wiederholungen === 1) {
        intervall = 1;
      } else if (wiederholungen === 2) {
        intervall = 6;
      } else {
        intervall = Math.round(intervall * ef);
      }
    }

    return {
      intervall,
      ef,
      wiederholungen,
      faelligTag: heuteTag + intervall,
    };
  }

  function faellig(karte, heuteTag) {
    return karte.faelligTag <= heuteTag;
  }

  // ---------------------------------------------------------------------------
  // Task 1.2 — Tageszaehler
  // ---------------------------------------------------------------------------

  function tagNummer(ms) {
    return Math.floor(ms / 86400000);
  }

  // ---------------------------------------------------------------------------
  // Task 1.3 — Gebiets-Paarung (Simulator)
  // ---------------------------------------------------------------------------

  function paarung(teil1Gebiet) {
    const teil2 = teil1Gebiet === 'analysis' ? 'geometrie' : 'analysis';
    return { teil1: teil1Gebiet, teil2 };
  }

  function zieheGebiet(r) {
    return r < 0.5 ? 'analysis' : 'geometrie';
  }

  // ---------------------------------------------------------------------------
  // Task 1.4 — GK-Scope-Guard
  // ---------------------------------------------------------------------------
  // WICHTIG: Diese Liste muss STRING-IDENTISCH zu scope_verbote.json sein
  // (Single Source der Verbotsmuster; ein Python-Test prueft die Gleichheit).
  const SCOPE_VERBOTE = [
    'f_[a-z]\\(',
    'f_\\{[a-z]\\}',
    'e\\^',
    '\\\\ln',
    'ln\\(',
    'Kettenregel',
    'Quotientenregel',
    'windschief',
    'Hesse',
    'HNF',
    'normalverteilt',
    'Normalverteilung',
    'Signifikanz',
    'Hypothesentest',
    'Binomialverteilung',
  ];

  // Aus der Verbotsliste eine kombinierte, case-insensitive RegExp bauen.
  const SCOPE_REGEX = new RegExp(SCOPE_VERBOTE.join('|'), 'i');

  function verstoesstGegenGK(text) {
    if (typeof text !== 'string' || text.length === 0) return false;
    return SCOPE_REGEX.test(text);
  }

  return {
    NEUE_KARTE,
    naechsteWiederholung,
    faellig,
    tagNummer,
    paarung,
    zieheGebiet,
    verstoesstGegenGK,
    SCOPE_VERBOTE,
  };
});
