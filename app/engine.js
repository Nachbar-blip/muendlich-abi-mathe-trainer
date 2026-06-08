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

  return { NEUE_KARTE, naechsteWiederholung, faellig };
});
