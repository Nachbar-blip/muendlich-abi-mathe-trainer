/* ===========================================================================
   ui.js — UI-Unterbau (Phase 5 + 6.1)
   Klassisches Script. Nutzt window.Engine und window.CONTENT.
   Aufgaben: Storage-Wrapper, KaTeX-Render, Hash-Routing, Startbildschirm,
   navigierbare Stub-Views. file://-tauglich, kein Build, keine Module.
   =========================================================================== */
(function () {
  'use strict';

  // Engine ist Pflicht; ohne sie kann die App nicht arbeiten.
  var Engine = window.Engine;
  // CONTENT kann theoretisch fehlen/leer sein — defensiv mit Defaults arbeiten.
  var CONTENT = window.CONTENT || {};

  var STORAGE_KEY = 'muendlich-abi-v1';

  // ---------------------------------------------------------------------------
  // 1) Storage-Wrapper — robust gegen fehlenden/blockierten localStorage
  // ---------------------------------------------------------------------------

  // Merker: ist localStorage nutzbar? Bei Privatmodus/Sandbox wirft der Zugriff.
  var storageOk = true;
  var speicherWarnungGezeigt = false;
  // In-Memory-Fallback, falls localStorage nicht verfügbar ist.
  var memoryStore = null;

  // Einmaliger, schonender Funktionstest auf localStorage.
  (function pruefeStorage() {
    try {
      var probe = '__probe_muendlich__';
      window.localStorage.setItem(probe, '1');
      window.localStorage.removeItem(probe);
      storageOk = true;
    } catch (e) {
      storageOk = false;
    }
  })();

  function ladeState() {
    var roh = null;
    if (storageOk) {
      try {
        roh = window.localStorage.getItem(STORAGE_KEY);
      } catch (e) {
        // Lesen fehlgeschlagen -> ab jetzt In-Memory.
        storageOk = false;
      }
    }
    if (!storageOk) roh = memoryStore;

    if (roh == null) return Engine.NEUER_STATE();
    // deserialisiere() fängt kaputtes JSON selbst ab (-> NEUER_STATE).
    return Engine.deserialisiere(roh);
  }

  function speichereState(state) {
    var json = Engine.serialisiere(state);
    if (storageOk) {
      try {
        window.localStorage.setItem(STORAGE_KEY, json);
        return;
      } catch (e) {
        // Schreiben fehlgeschlagen (z. B. Quota/Privatmodus) -> Fallback.
        storageOk = false;
      }
    }
    memoryStore = json;
    zeigeSpeicherWarnung();
  }

  // Dezente, einmalige Warnung, dass nicht persistiert wird.
  function zeigeSpeicherWarnung() {
    if (speicherWarnungGezeigt) return;
    speicherWarnungGezeigt = true;
    // Wird beim nächsten render() oben eingeblendet (Flag steuert das).
  }

  // ---------------------------------------------------------------------------
  // 2) KaTeX-Render — nie crashen lassen
  // ---------------------------------------------------------------------------

  function rendereMathe(rootEl) {
    if (!rootEl || typeof window.renderMathInElement !== 'function') return;
    try {
      window.renderMathInElement(rootEl, {
        delimiters: [
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    } catch (e) {
      // Bei Fehler bleibt der Rohtext stehen — kein App-Crash.
    }
  }

  // ---------------------------------------------------------------------------
  // Hilfsfunktionen
  // ---------------------------------------------------------------------------

  // Kleiner HTML-Escaper für eingebetteten Text (Themennamen etc.).
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // Sicher eine Array-Liste aus CONTENT holen (auch wenn Key fehlt).
  function liste(name) {
    var l = CONTENT[name];
    return Array.isArray(l) ? l : [];
  }

  // Heutiger Tag als Tagesnummer (für Fälligkeit).
  function heuteTag() {
    return Engine.tagNummer(Date.now());
  }

  // Anzahl heute fälliger SRS-Karten.
  function anzahlFaellig(state) {
    var heute = heuteTag();
    var srs = (state && state.srs) || {};
    var n = 0;
    for (var id in srs) {
      if (!Object.prototype.hasOwnProperty.call(srs, id)) continue;
      if (Engine.faellig(srs[id], heute)) n++;
    }
    return n;
  }

  // Stufen-Status eines Themas defensiv lesen.
  function stufenVon(state, key) {
    var s = (state && state.stufen && state.stufen[key]) || {};
    return { '1': !!s['1'], '2': !!s['2'], '3': !!s['3'] };
  }

  // ---------------------------------------------------------------------------
  // 3) Hash-Routing
  // ---------------------------------------------------------------------------
  // Routen:
  //   #/start (Default)
  //   #/thema/<key>/<stufe>
  //   #/faellig
  //   #/simulator
  //   #/diagnose

  function parseHash() {
    var h = window.location.hash || '';
    // führendes '#' entfernen, dann an '/' trennen.
    var teile = h.replace(/^#\/?/, '').split('/').filter(function (t) {
      return t.length > 0;
    });
    return teile; // z. B. ['thema','geo-vektoren','2']
  }

  function navigiere(route) {
    window.location.hash = route;
  }

  // ---------------------------------------------------------------------------
  // View-Bausteine
  // ---------------------------------------------------------------------------

  function speicherWarnungHtml() {
    if (!speicherWarnungGezeigt) return '';
    return '<div class="hinweis" role="status">Fortschritt wird in diesem ' +
      'Modus nicht gespeichert.</div>';
  }

  function flashHtml() {
    if (!flashNachricht) return '';
    var klasse = flashIstFehler ? 'hinweis fehler' : 'hinweis';
    var html = '<div class="' + klasse + '" role="status">' +
      esc(flashNachricht) + '</div>';
    // Flash ist einmalig: nach dem Rendern zurücksetzen.
    flashNachricht = null;
    flashIstFehler = false;
    return html;
  }

  // Eine Gebiets-Sektion (Analysis oder Geometrie) mit Themenliste.
  function gebietHtml(state, gebiet, titel, modifier) {
    var themen = liste('themen').filter(function (t) {
      return t && t.gebiet === gebiet;
    });

    var items;
    if (themen.length === 0) {
      items = '<li class="leer">Noch keine Themen hinterlegt.</li>';
    } else {
      items = themen.map(function (t) {
        var st = stufenVon(state, t.key);
        var marker = ['1', '2', '3'].map(function (nr) {
          var fertig = st[nr] ? ' stufe--erledigt' : '';
          return '<span class="stufe' + fertig + '" aria-label="Stufe ' + nr +
            (st[nr] ? ' erledigt' : '') + '">' + nr + '</span>';
        }).join('');
        return '<li><a class="thema" href="#/thema/' + esc(t.key) + '/1">' +
          '<span class="thema-name">' + esc(t.name) + '</span>' +
          '<span class="stufen">' + marker + '</span>' +
          '</a></li>';
      }).join('');
    }

    return '<section class="gebiet gebiet--' + modifier + '">' +
      '<h2>' + esc(titel) + '</h2>' +
      '<ul class="themen-liste">' + items + '</ul>' +
      '</section>';
  }

  // ---------------------------------------------------------------------------
  // Views
  // ---------------------------------------------------------------------------

  function viewStart(state) {
    var faelligN = anzahlFaellig(state);
    var diagnoseKlasse = state.diagnoseGemacht ? 'btn' : 'btn btn-hervor';

    return '' +
      flashHtml() +
      speicherWarnungHtml() +
      '<h1>Übersicht</h1>' +
      '<p>Wähle ein Thema oder starte deine tägliche Wiederholung.</p>' +
      '<div class="aktionen">' +
        '<a class="btn btn-primaer" href="#/faellig">Heute fällig (' +
          faelligN + ')</a>' +
        '<a class="btn" href="#/simulator">Prüfungs-Simulator</a>' +
        '<a class="' + diagnoseKlasse + '" href="#/diagnose">Diagnose</a>' +
      '</div>' +
      '<div class="gebiete">' +
        gebietHtml(state, 'analysis', 'Analysis', 'analysis') +
        gebietHtml(state, 'geometrie', 'Geometrie', 'geometrie') +
      '</div>' +
      '<div class="aktionen">' +
        '<button type="button" class="btn" id="btn-sichern">Sichern</button>' +
        '<button type="button" class="btn" id="btn-laden">Laden</button>' +
        '<input type="file" id="datei-laden" class="datei-input" accept="application/json,.json">' +
      '</div>';
  }

  // Generischer Stub: Überschrift + Zurück-Link + Platzhalter.
  function viewStub(titel, untertitel) {
    return '' +
      flashHtml() +
      speicherWarnungHtml() +
      '<a class="zurueck" href="#/start">&larr; Zurück zur Übersicht</a>' +
      '<h1>' + esc(titel) + '</h1>' +
      (untertitel ? '<p>' + untertitel + '</p>' : '') +
      '<div class="platzhalter">(wird in einem späteren Schritt gebaut)</div>';
  }

  function viewThema(state, key, stufe) {
    // Thema zum Key suchen (kann fehlen, falls Hash veraltet ist).
    var thema = liste('themen').filter(function (t) {
      return t && t.key === key;
    })[0];
    var name = thema ? thema.name : key;
    var st = stufe || '1';
    return viewStub(
      'Thema: ' + name,
      'Stufe ' + esc(st) + ' — \\(\\text{Mathe-Inhalt folgt}\\)'
    );
  }

  // ---------------------------------------------------------------------------
  // Render-Steuerung
  // ---------------------------------------------------------------------------

  // Flash: einmalige Statusmeldung (z. B. Lade-Fehler) für den nächsten Render.
  var flashNachricht = null;
  var flashIstFehler = false;

  function setzeFlash(text, istFehler) {
    flashNachricht = text;
    flashIstFehler = !!istFehler;
  }

  function render() {
    var app = document.getElementById('app');
    if (!app) return;

    // Ohne Engine geht nichts — klare Fehlermeldung statt stillem Crash.
    if (!Engine) {
      app.innerHTML = '<div class="hinweis fehler">Engine konnte nicht ' +
        'geladen werden (engine.js).</div>';
      return;
    }

    var state = ladeState();
    var teile = parseHash();
    var view = teile[0] || 'start';
    var html;

    switch (view) {
      case 'thema':
        html = viewThema(state, teile[1], teile[2]);
        break;
      case 'faellig':
        html = viewStub('Heute fällig',
          anzahlFaellig(state) + ' Karte(n) zur Wiederholung.');
        break;
      case 'simulator':
        html = viewStub('Prüfungs-Simulator', null);
        break;
      case 'diagnose':
        html = viewStub('Diagnose', null);
        break;
      case 'start':
      default:
        html = viewStart(state);
        break;
    }

    app.innerHTML = html;

    // Nach jedem Render: Event-Handler binden und Mathe rendern.
    bindeStartHandler(state);
    rendereMathe(app);
  }

  // Handler für die Sichern/Laden-Buttons (nur auf dem Startbildschirm vorhanden).
  function bindeStartHandler(state) {
    var btnSichern = document.getElementById('btn-sichern');
    if (btnSichern) {
      btnSichern.addEventListener('click', function () {
        sichereDatei(state);
      });
    }

    var btnLaden = document.getElementById('btn-laden');
    var input = document.getElementById('datei-laden');
    if (btnLaden && input) {
      btnLaden.addEventListener('click', function () {
        input.value = ''; // erneutes Laden derselben Datei ermöglichen
        input.click();
      });
      input.addEventListener('change', function () {
        var datei = input.files && input.files[0];
        if (datei) ladeAusDatei(datei);
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Sichern / Laden als Datei
  // ---------------------------------------------------------------------------

  function sichereDatei(state) {
    try {
      var json = Engine.serialisiere(state);
      var blob = new Blob([json], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'muendlich-abi-fortschritt.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      // URL nach kurzer Zeit freigeben.
      setTimeout(function () { URL.revokeObjectURL(url); }, 0);
    } catch (e) {
      setzeFlash('Sichern fehlgeschlagen.', true);
      render();
    }
  }

  function ladeAusDatei(datei) {
    var reader = new FileReader();
    reader.onload = function () {
      var text = String(reader.result || '');
      // deserialisiere() fängt kaputtes JSON ab -> NEUER_STATE.
      // Um echte Fehler zu erkennen, prüfen wir JSON.parse separat.
      var gueltig = true;
      try { JSON.parse(text); } catch (e) { gueltig = false; }

      if (!gueltig) {
        setzeFlash('Datei konnte nicht gelesen werden (kein gültiges JSON).', true);
        render();
        return;
      }

      var neu = Engine.deserialisiere(text);
      speichereState(neu);
      setzeFlash('Fortschritt geladen.', false);
      // Auf den Startbildschirm zurück (zeigt geladenen Stand).
      if ((window.location.hash || '') !== '#/start') {
        navigiere('#/start'); // löst onhashchange -> render() aus
      } else {
        render();
      }
    };
    reader.onerror = function () {
      setzeFlash('Datei konnte nicht gelesen werden.', true);
      render();
    };
    reader.readAsText(datei);
  }

  // ---------------------------------------------------------------------------
  // Bootstrap
  // ---------------------------------------------------------------------------

  window.addEventListener('hashchange', render);

  function start() {
    // Default-Route setzen, wenn kein/leerer Hash (löst dann onhashchange aus,
    // sonst direkt rendern).
    if (!window.location.hash) {
      window.location.replace('#/start');
    }
    render();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
