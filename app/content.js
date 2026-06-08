const CONTENT = {
  "version": 1,
  "themen": [
    {
      "key": "ana-symmetrie",
      "gebiet": "analysis",
      "name": "Symmetrie"
    },
    {
      "key": "ana-nullstellen",
      "gebiet": "analysis",
      "name": "Nullstellen"
    },
    {
      "key": "ana-extrema",
      "gebiet": "analysis",
      "name": "Extrema & Wendepunkte"
    },
    {
      "key": "ana-ableitung-graph",
      "gebiet": "analysis",
      "name": "Ableitung ↔ Graph"
    },
    {
      "key": "ana-integral",
      "gebiet": "analysis",
      "name": "Fläche & Integral"
    },
    {
      "key": "geo-vektoren",
      "gebiet": "geometrie",
      "name": "Vektoren, Betrag, Mittelpunkt"
    },
    {
      "key": "geo-ebene",
      "gebiet": "geometrie",
      "name": "Ebene: Parameter- & Koordinatenform"
    },
    {
      "key": "geo-lage-abstand",
      "gebiet": "geometrie",
      "name": "Lage & Abstände"
    },
    {
      "key": "geo-spiegelung",
      "gebiet": "geometrie",
      "name": "Punkt an Ebene spiegeln"
    },
    {
      "key": "geo-dreieck",
      "gebiet": "geometrie",
      "name": "Dreieck im Raum"
    }
  ],
  "verfahren": [
    {
      "id": "ana-symmetrie-v1",
      "frage": "Bringen Sie die Schritte in die richtige Reihenfolge, um eine ganzrationale Funktion f auf Symmetrie zum Koordinatensystem zu untersuchen.",
      "schritte": [
        "Bilde den Term f(-x), indem du in f(x) jedes x durch -x ersetzt.",
        "Vereinfache f(-x) vollstaendig (beachte: (-x) mit geradem Exponenten ergibt +, mit ungeradem Exponenten ergibt -).",
        "Vergleiche f(-x) mit f(x): Gilt f(-x) = f(x), so ist der Graph achsensymmetrisch zur y-Achse.",
        "Vergleiche f(-x) mit -f(x): Gilt f(-x) = -f(x), so ist der Graph punktsymmetrisch zum Ursprung.",
        "Trifft keine der beiden Bedingungen zu, liegt keine Symmetrie zum Koordinatensystem vor."
      ],
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-nullstellen-v1",
      "frage": "Beschreiben Sie die Vorgehensweise, um saemtliche Nullstellen der ganzrationalen Funktion \\( f(x) = x^3 - 4x \\) zu bestimmen.",
      "schritte": [
        "Funktionsterm gleich Null setzen: \\( x^3 - 4x = 0 \\).",
        "Den groessten gemeinsamen Faktor ausklammern: \\( x(x^2 - 4) = 0 \\).",
        "Satz vom Nullprodukt anwenden: ein Produkt ist Null, wenn ein Faktor Null ist.",
        "Den ersten Faktor betrachten: \\( x = 0 \\) ist eine Nullstelle.",
        "Den zweiten Faktor gleich Null setzen und loesen: \\( x^2 - 4 = 0 \\Rightarrow x = \\pm 2 \\).",
        "Loesungsmenge angeben: die Nullstellen sind \\( x_1 = -2,\\; x_2 = 0,\\; x_3 = 2 \\)."
      ],
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-extrema-v1",
      "frage": "Beschreiben Sie die Vorgehensweise, um die lokalen Extremstellen einer ganzrationalen Funktion f und deren Art (Hoch- oder Tiefpunkt) mit Hilfe des Vorzeichens der zweiten Ableitung zu bestimmen.",
      "schritte": [
        "Erste Ableitung f'(x) und zweite Ableitung f''(x) bilden.",
        "Notwendige Bedingung: Gleichung f'(x) = 0 loesen, um die Kandidaten (kritischen Stellen) x_0 zu erhalten.",
        "Hinreichende Bedingung pruefen: jede Kandidatenstelle x_0 in f''(x) einsetzen.",
        "Art bestimmen: Ist f''(x_0) < 0, liegt ein Hochpunkt vor; ist f''(x_0) > 0, ein Tiefpunkt.",
        "Zugehoerigen Funktionswert f(x_0) berechnen, um die Koordinaten des Extrempunktes anzugeben."
      ],
      "thema": "ana-extrema"
    },
    {
      "id": "ana-ableitung-graph-v1",
      "frage": "Beschreiben Sie die Vorgehensweise, wie Sie aus dem Graphen von \\(f\\) den Graphen der Ableitung \\(f'\\) qualitativ skizzieren.",
      "schritte": [
        "Lokalisieren Sie die Stellen mit waagerechter Tangente (Extrem- und Sattelstellen von \\(f\\)) - dort hat \\(f'\\) eine Nullstelle.",
        "Bestimmen Sie die Intervalle, in denen \\(f\\) streng monoton steigt - dort gilt \\(f'(x)>0\\), der Graph von \\(f'\\) verlaeuft oberhalb der x-Achse.",
        "Bestimmen Sie die Intervalle, in denen \\(f\\) streng monoton faellt - dort gilt \\(f'(x)<0\\), der Graph von \\(f'\\) verlaeuft unterhalb der x-Achse.",
        "Achten Sie auf das Vorzeichenwechselverhalten an den Nullstellen von \\(f'\\): Wechsel von + nach - bedeutet Hochpunkt von \\(f\\), von - nach + bedeutet Tiefpunkt, kein Wechsel bedeutet Sattelpunkt.",
        "Verbinden Sie die ermittelten Informationen zu einem stetigen Graphen von \\(f'\\)."
      ],
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-integral-v1",
      "frage": "Bringen Sie die Schritte zur Berechnung des Flaecheninhalts der von zwei Graphen \\(f\\) und \\(g\\) eingeschlossenen Flaeche in die richtige Reihenfolge.",
      "schritte": [
        "Schnittstellen von \\(f\\) und \\(g\\) bestimmen, indem man \\(f(x)=g(x)\\) loest; diese Schnittstellen liefern die Integrationsgrenzen.",
        "Auf einem Probepunkt im Inneren des Intervalls feststellen, welcher Graph oben (groessere Funktionswerte) und welcher unten liegt.",
        "Die Differenzfunktion 'obere minus untere' bilden, also \\(d(x)=f(x)-g(x)\\) oder \\(g(x)-f(x)\\), je nach Lage.",
        "Das bestimmte Integral der Differenzfunktion ueber die Schnittstellen als Grenzen berechnen.",
        "Den so erhaltenen (nichtnegativen) Wert als Flaecheninhalt angeben, ggf. bei Vorzeichenwechsel der Differenz abschnittsweise integrieren."
      ],
      "thema": "ana-integral"
    },
    {
      "id": "geo-vektoren-v1",
      "frage": "Beschreiben Sie die Vorgehensweise, um den Betrag (die Laenge) des Verbindungsvektors zweier Punkte A und B im Raum zu bestimmen.",
      "schritte": [
        "Verbindungsvektor aufstellen: \\( \\vec{AB} = \\vec{OB} - \\vec{OA} \\), also komponentenweise die Koordinaten von A von denen von B subtrahieren.",
        "Jede Komponente des Vektors \\( \\vec{AB} = \\begin{pmatrix} a_1 \\\\ a_2 \\\\ a_3 \\end{pmatrix} \\) einzeln quadrieren.",
        "Die drei Quadrate addieren: \\( a_1^2 + a_2^2 + a_3^2 \\).",
        "Aus der Summe die Quadratwurzel ziehen: \\( |\\vec{AB}| = \\sqrt{a_1^2 + a_2^2 + a_3^2} \\)."
      ],
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-ebene-v1",
      "frage": "Bringen Sie die Schritte in die richtige Reihenfolge, um aus der Parameterform einer Ebene die Koordinatengleichung zu erstellen.",
      "schritte": [
        "Spannvektoren \\(\\vec{u}\\) und \\(\\vec{v}\\) sowie den Stuetzpunkt \\(A\\) aus der Parameterform ablesen.",
        "Normalenvektor \\(\\vec{n} = \\vec{u} \\times \\vec{v}\\) durch das Kreuzprodukt der beiden Spannvektoren berechnen.",
        "Mit \\(\\vec{n}\\) den linken Teil der Koordinatengleichung \\(n_1 x + n_2 y + n_3 z = d\\) aufstellen.",
        "Den Stuetzpunkt \\(A\\) in die linke Seite einsetzen, um \\(d = \\vec{n}\\cdot\\vec{A}\\) zu bestimmen.",
        "Die vollstaendige Koordinatengleichung \\(n_1 x + n_2 y + n_3 z = d\\) angeben."
      ],
      "thema": "geo-ebene"
    },
    {
      "id": "geo-lage-abstand-v1",
      "frage": "Bringen Sie die Schritte in die richtige Reihenfolge: Bestimmung des Abstands eines Punktes P von einer Ebene E (gegeben in Koordinatenform mit normierbarem Normalenvektor).",
      "schritte": [
        "Ebenengleichung in der Form \\(a x + b y + c z = d\\) bereitstellen und den Normalenvektor \\(\\vec{n}=\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}\\) ablesen.",
        "Die Koordinaten des Punktes \\(P(p_1\\,|\\,p_2\\,|\\,p_3)\\) in den Term \\(a x + b y + c z - d\\) einsetzen.",
        "Den Betrag \\(|\\vec{n}|=\\sqrt{a^2+b^2+c^2}\\) des Normalenvektors berechnen.",
        "Den eingesetzten Wert durch \\(|\\vec{n}|\\) teilen und den Betrag bilden: \\(d(P,E)=\\dfrac{|a p_1 + b p_2 + c p_3 - d|}{\\sqrt{a^2+b^2+c^2}}\\)."
      ],
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-spiegelung-v1",
      "frage": "Ordnen Sie die Schritte zur Spiegelung eines Punktes P an einer Ebene E (gegeben in Koordinatenform) in die richtige Reihenfolge.",
      "schritte": [
        "Lese den Normalenvektor \\(\\vec n\\) der Ebene aus der Koordinatenform ab; er ist die Richtung der Lotgeraden.",
        "Stelle die Lotgerade \\(g\\colon \\vec X = \\overrightarrow{OP} + t\\,\\vec n\\) durch P mit Richtungsvektor \\(\\vec n\\) auf.",
        "Setze die Geradengleichung in die Koordinatenform der Ebene ein und loese nach dem Parameter \\(t\\) auf.",
        "Setze das gefundene \\(t\\) in die Geradengleichung ein und erhalte den Durchstosspunkt (Lotfusspunkt) \\(D\\) auf der Ebene.",
        "Berechne den Verbindungsvektor \\(\\overrightarrow{PD} = \\overrightarrow{OD} - \\overrightarrow{OP}\\).",
        "Bestimme den Spiegelpunkt ueber \\(\\overrightarrow{OP'} = \\overrightarrow{OP} + 2\\,\\overrightarrow{PD}\\) (gleichbedeutend mit \\(\\overrightarrow{OP'} = 2\\,\\overrightarrow{OD} - \\overrightarrow{OP}\\))."
      ],
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-dreieck-v1",
      "frage": "Beschreiben Sie die Vorgehensweise, um nachzuweisen, dass ein Dreieck ABC im Raum gleichschenklig ist, und um anschliessend seinen Flaecheninhalt zu bestimmen.",
      "schritte": [
        "Verbindungsvektoren der drei Seiten aufstellen: \\( \\overrightarrow{AB}=B-A \\), \\( \\overrightarrow{AC}=C-A \\) und \\( \\overrightarrow{BC}=C-B \\).",
        "Die Betraege (Laengen) der drei Seiten berechnen, z. B. \\( |\\overrightarrow{AB}|=\\sqrt{AB_1^2+AB_2^2+AB_3^2} \\).",
        "Die drei Seitenlaengen vergleichen: Sind genau zwei Laengen gleich, so ist das Dreieck gleichschenklig (die beiden gleich langen Seiten sind die Schenkel).",
        "Das Kreuzprodukt zweier Seitenvektoren bilden, z. B. \\( \\overrightarrow{AB}\\times\\overrightarrow{AC} \\).",
        "Den Flaecheninhalt ueber \\( A=\\tfrac{1}{2}\\,|\\overrightarrow{AB}\\times\\overrightarrow{AC}| \\) berechnen."
      ],
      "thema": "geo-dreieck"
    }
  ],
  "rechnen": [
    {
      "id": "ana-symmetrie-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^4 - 3x^2 + 5 \\). Berechnen Sie \\( f(-2) \\).",
      "tipp": "Setze \\(-2\\) fuer \\(x\\) ein und beachte: \\((-2)^4 = 16\\) und \\((-2)^2 = 4\\).",
      "loesungsweg": "\\( f(-2) = (-2)^4 - 3\\cdot(-2)^2 + 5 = 16 - 3\\cdot 4 + 5 = 16 - 12 + 5 = 9 \\).",
      "loesung": 9,
      "check": {
        "art": "ausdruck",
        "expr": "(-2)**4 - 3*(-2)**2 + 5"
      },
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-r2",
      "level": 2,
      "typ": "mc",
      "frage": "Welche Symmetrie besitzt der Graph von \\( f(x) = x^4 - 3x^2 + 5 \\)?",
      "tipp": "Schaue auf die Exponenten der vorkommenden Potenzen von \\(x\\). Die Konstante \\(5\\) zaehlt wie \\(x^0\\) (gerader Exponent).",
      "loesungsweg": "Es treten nur Potenzen mit geraden Exponenten auf (\\(x^4, x^2, x^0\\)). Daher gilt \\( f(-x) = f(x) \\): Der Graph ist achsensymmetrisch zur y-Achse.",
      "optionen": [
        "Achsensymmetrisch zur y-Achse",
        "Punktsymmetrisch zum Ursprung",
        "Keine Symmetrie zum Koordinatensystem"
      ],
      "korrekt": 0,
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-r3",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = 2x^3 - 5x \\). Berechnen Sie \\( f(-3) \\).",
      "tipp": "Beachte das Vorzeichen: \\((-3)^3 = -27\\). Ein ungerader Exponent erhaelt das Minuszeichen.",
      "loesungsweg": "\\( f(-3) = 2\\cdot(-3)^3 - 5\\cdot(-3) = 2\\cdot(-27) + 15 = -54 + 15 = -39 \\).",
      "loesung": -39,
      "check": {
        "art": "ausdruck",
        "expr": "2*(-3)**3 - 5*(-3)"
      },
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-r4",
      "level": 3,
      "typ": "mc",
      "frage": "Welche Symmetrie besitzt der Graph von \\( f(x) = 2x^3 - 5x \\)? Begruenden Sie ohne Wertetabelle.",
      "tipp": "Bilde \\( f(-x) \\) und vergleiche mit \\( f(x) \\) bzw. \\( -f(x) \\). Es treten nur ungerade Exponenten auf.",
      "loesungsweg": "\\( f(-x) = 2(-x)^3 - 5(-x) = -2x^3 + 5x = -(2x^3 - 5x) = -f(x) \\). Wegen \\( f(-x) = -f(x) \\) ist der Graph punktsymmetrisch zum Ursprung.",
      "optionen": [
        "Achsensymmetrisch zur y-Achse",
        "Punktsymmetrisch zum Ursprung",
        "Keine Symmetrie zum Koordinatensystem"
      ],
      "korrekt": 1,
      "check": {
        "art": "ausdruck",
        "expr": "2*(-3)**3 - 5*(-3) + (2*3**3 - 5*3)",
        "erwartet": 0
      },
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-r5",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( g(x) = -x^4 + 2x^2 \\). Berechnen Sie \\( g(-1{,}5) \\).",
      "tipp": "Es genuegt, \\( g(1{,}5) \\) zu berechnen, denn \\(g\\) ist achsensymmetrisch (nur gerade Exponenten), also \\( g(-1{,}5) = g(1{,}5) \\). Es gilt \\(1{,}5^2 = 2{,}25\\) und \\(1{,}5^4 = 5{,}0625\\).",
      "loesungsweg": "\\( g(-1{,}5) = -(-1{,}5)^4 + 2\\cdot(-1{,}5)^2 = -5{,}0625 + 2\\cdot 2{,}25 = -5{,}0625 + 4{,}5 = -0{,}5625 \\).",
      "loesung": -0.5625,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "-(-Rational(3,2))**4 + 2*(-Rational(3,2))**2"
      },
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-r6",
      "level": 4,
      "typ": "mc",
      "frage": "Welche Symmetrie besitzt der Graph von \\( h(x) = x^3 - x^2 \\)?",
      "tipp": "Bilde \\( h(-x) = (-x)^3 - (-x)^2 \\) und pruefe, ob \\( h(-x) = h(x) \\) oder \\( h(-x) = -h(x) \\) gilt. Hier mischen sich gerader und ungerader Exponent.",
      "loesungsweg": "\\( h(-x) = (-x)^3 - (-x)^2 = -x^3 - x^2 \\). Dies ist weder gleich \\( h(x) = x^3 - x^2 \\) noch gleich \\( -h(x) = -x^3 + x^2 \\). Da sowohl gerade als auch ungerade Exponenten auftreten, liegt keine Symmetrie zum Koordinatensystem vor.",
      "optionen": [
        "Achsensymmetrisch zur y-Achse",
        "Punktsymmetrisch zum Ursprung",
        "Keine Symmetrie zum Koordinatensystem"
      ],
      "korrekt": 2,
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-nullstellen-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^3 - 4x \\). Bestimmen Sie die groesste Nullstelle.",
      "tipp": "Klammern Sie zunaechst \\( x \\) aus: \\( x(x^2-4)=0 \\). Welche Loesung ist am groessten?",
      "loesungsweg": "Ausklammern: \\( x^3 - 4x = x(x^2-4) = 0 \\). Satz vom Nullprodukt: \\( x=0 \\) oder \\( x^2-4=0 \\Rightarrow x=\\pm 2 \\). Die Nullstellen sind \\( -2,\\,0,\\,2 \\); die groesste ist \\( x = 2 \\).",
      "loesung": 2,
      "check": {
        "art": "ausdruck",
        "expr": "Max(*solve(x**3-4*x, x))"
      },
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^2 - 6x + 5 \\). Bestimmen Sie die kleinste Nullstelle.",
      "tipp": "Wenden Sie die p-q-Formel an: \\( x_{1,2} = -\\tfrac{p}{2} \\pm \\sqrt{\\left(\\tfrac{p}{2}\\right)^2 - q} \\) mit \\( p=-6,\\; q=5 \\).",
      "loesungsweg": "p-q-Formel mit \\( p=-6,\\, q=5 \\): \\( x_{1,2} = 3 \\pm \\sqrt{9-5} = 3 \\pm 2 \\). Somit \\( x_1 = 1,\\; x_2 = 5 \\). Die kleinste Nullstelle ist \\( x = 1 \\).",
      "loesung": 1,
      "check": {
        "art": "ausdruck",
        "expr": "Min(*solve(x**2-6*x+5, x))"
      },
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-r3",
      "level": 3,
      "typ": "mc",
      "frage": "Wie viele (verschiedene reelle) Nullstellen besitzt die Funktion \\( f(x) = x^4 - 5x^2 + 4 \\)?",
      "tipp": "Substituieren Sie \\( u = x^2 \\) und loesen Sie die entstehende quadratische Gleichung. Pruefen Sie danach, wie viele reelle x-Werte sich ergeben.",
      "loesungsweg": "Substitution \\( u=x^2 \\): \\( u^2 - 5u + 4 = 0 \\Rightarrow u = 1 \\) oder \\( u = 4 \\). Ruecksubstitution: \\( x^2=1 \\Rightarrow x=\\pm 1 \\) und \\( x^2=4 \\Rightarrow x=\\pm 2 \\). Es gibt also vier verschiedene Nullstellen: \\( -2,\\,-1,\\,1,\\,2 \\).",
      "optionen": [
        "2 Nullstellen",
        "3 Nullstellen",
        "4 Nullstellen",
        "Keine reelle Nullstelle"
      ],
      "korrekt": 2,
      "check": {
        "art": "menge",
        "gleichung": "x**4-5*x**2+4",
        "var": "x",
        "erwartet": [
          "-2",
          "-1",
          "1",
          "2"
        ]
      },
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-r4",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = 2x^2 - 3x - 2 \\). Bestimmen Sie die groesste Nullstelle.",
      "tipp": "Teilen Sie zuerst durch den Leitkoeffizienten 2, um die Normalform fuer die p-q-Formel zu erhalten.",
      "loesungsweg": "Durch 2 teilen: \\( x^2 - \\tfrac{3}{2}x - 1 = 0 \\). p-q-Formel mit \\( p=-\\tfrac{3}{2},\\, q=-1 \\): \\( x_{1,2} = \\tfrac{3}{4} \\pm \\sqrt{\\tfrac{9}{16}+1} = \\tfrac{3}{4} \\pm \\tfrac{5}{4} \\). Somit \\( x_1 = -\\tfrac{1}{2},\\; x_2 = 2 \\). Die groesste Nullstelle ist \\( x = 2 \\).",
      "loesung": 2,
      "check": {
        "art": "ausdruck",
        "expr": "Max(*solve(2*x**2-3*x-2, x))"
      },
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-r5",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^3 - 2x^2 - 3x \\). Bestimmen Sie die kleinste Nullstelle.",
      "tipp": "Klammern Sie \\( x \\) aus und wenden Sie auf den quadratischen Faktor die p-q-Formel an.",
      "loesungsweg": "Ausklammern: \\( x^3 - 2x^2 - 3x = x(x^2 - 2x - 3) = 0 \\). Also \\( x=0 \\) oder \\( x^2 - 2x - 3 = 0 \\). p-q-Formel: \\( x = 1 \\pm \\sqrt{1+3} = 1 \\pm 2 \\Rightarrow x = -1 \\) oder \\( x = 3 \\). Die Nullstellen sind \\( -1,\\,0,\\,3 \\); die kleinste ist \\( x = -1 \\).",
      "loesung": -1,
      "check": {
        "art": "ausdruck",
        "expr": "Min(*solve(x**3-2*x**2-3*x, x))"
      },
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-r6",
      "level": 4,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^2 - 2x - 1 \\). Bestimmen Sie die groesste Nullstelle (auf zwei Nachkommastellen gerundet).",
      "tipp": "Die p-q-Formel liefert hier eine Wurzel, die nicht aufgeht. Runden Sie das Ergebnis am Ende.",
      "loesungsweg": "p-q-Formel mit \\( p=-2,\\, q=-1 \\): \\( x_{1,2} = 1 \\pm \\sqrt{1+1} = 1 \\pm \\sqrt{2} \\). Damit \\( x_1 = 1-\\sqrt{2} \\approx -0{,}41 \\) und \\( x_2 = 1+\\sqrt{2} \\approx 2{,}41 \\). Die groesste Nullstelle ist \\( x = 1+\\sqrt{2} \\approx 2{,}41 \\).",
      "loesung": 2.41,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "Max(*solve(x**2-2*x-1, x))"
      },
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-extrema-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^3 - 6x^2 + 9x + 2 \\). Berechnen Sie den Wert der zweiten Ableitung an der Stelle \\( x_0 = 1 \\), also \\( f''(1) \\).",
      "tipp": "Leiten Sie zweimal ab: \\( f'(x) = 3x^2 - 12x + 9 \\), dann \\( f''(x) = 6x - 12 \\). Setzen Sie anschliessend \\( x_0 = 1 \\) ein.",
      "loesungsweg": "\\( f'(x) = 3x^2 - 12x + 9 \\), \\( f''(x) = 6x - 12 \\). Einsetzen: \\( f''(1) = 6 \\cdot 1 - 12 = -6 \\). Da \\( f''(1) < 0 \\), liegt an einer (hier vorhandenen) Extremstelle bei \\( x_0 = 1 \\) ein Hochpunkt vor.",
      "loesung": -6,
      "check": {
        "art": "ausdruck",
        "expr": "diff(x**3 - 6*x**2 + 9*x + 2, x, 2).subs(x, 1)"
      },
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^3 - 3x^2 \\). Bestimmen Sie die x-Koordinate des Tiefpunktes.",
      "tipp": "Loesen Sie \\( f'(x) = 0 \\) und pruefen Sie die Kandidaten mit \\( f''(x) = 6x - 6 \\). Beim Tiefpunkt ist \\( f''(x_0) > 0 \\).",
      "loesungsweg": "\\( f'(x) = 3x^2 - 6x = 3x(x-2) = 0 \\Rightarrow x = 0 \\) oder \\( x = 2 \\). \\( f''(x) = 6x - 6 \\). \\( f''(0) = -6 < 0 \\) (Hochpunkt), \\( f''(2) = 6 > 0 \\) (Tiefpunkt). Die x-Koordinate des Tiefpunktes ist \\( x = 2 \\).",
      "loesung": 2,
      "check": {
        "art": "ausdruck",
        "expr": "Max(*solve(diff(x**3 - 3*x**2, x), x))"
      },
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-r3",
      "level": 2,
      "typ": "mc",
      "frage": "Gegeben ist \\( f(x) = x^3 - 12x \\). An den kritischen Stellen gilt \\( f''(2) = 12 \\) und \\( f''(-2) = -12 \\). Welche Aussage ueber die Art der Extrempunkte ist korrekt?",
      "tipp": "Hinreichende Bedingung: \\( f''(x_0) > 0 \\Rightarrow \\) Tiefpunkt, \\( f''(x_0) < 0 \\Rightarrow \\) Hochpunkt.",
      "loesungsweg": "Bei \\( x = 2 \\) ist \\( f''(2) = 12 > 0 \\), also Tiefpunkt. Bei \\( x = -2 \\) ist \\( f''(-2) = -12 < 0 \\), also Hochpunkt.",
      "optionen": [
        "Bei \\( x = 2 \\) liegt ein Tiefpunkt, bei \\( x = -2 \\) ein Hochpunkt.",
        "Bei \\( x = 2 \\) liegt ein Hochpunkt, bei \\( x = -2 \\) ein Tiefpunkt.",
        "An beiden Stellen liegt ein Hochpunkt vor.",
        "An beiden Stellen liegt ein Sattelpunkt vor."
      ],
      "korrekt": 0,
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-r4",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^4 - 6x^2 + 5 \\). Bestimmen Sie die groesste Wendestelle (groesste x-Koordinate eines Wendepunktes).",
      "tipp": "Notwendige Bedingung fuer Wendestellen: \\( f''(x) = 0 \\). Hinreichend: \\( f'''(x) \\neq 0 \\). Berechnen Sie \\( f''(x) = 12x^2 - 12 \\).",
      "loesungsweg": "\\( f'(x) = 4x^3 - 12x \\), \\( f''(x) = 12x^2 - 12 = 0 \\Rightarrow x^2 = 1 \\Rightarrow x = \\pm 1 \\). \\( f'''(x) = 24x \\); \\( f'''(1) = 24 \\neq 0 \\) und \\( f'''(-1) = -24 \\neq 0 \\), also sind beide Wendestellen. Die groesste Wendestelle ist \\( x = 1 \\).",
      "loesung": 1,
      "check": {
        "art": "ausdruck",
        "expr": "Max(*solve(diff(x**4 - 6*x**2 + 5, x, 2), x))"
      },
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-r5",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^3 - 6x \\). Bestimmen Sie die x-Koordinate des Hochpunktes (auf zwei Nachkommastellen gerundet).",
      "tipp": "Loesen Sie \\( f'(x) = 3x^2 - 6 = 0 \\). Es ergeben sich \\( x = \\pm\\sqrt{2} \\). Pruefen Sie mit \\( f''(x) = 6x \\), an welcher Stelle ein Hochpunkt vorliegt.",
      "loesungsweg": "\\( f'(x) = 3x^2 - 6 = 0 \\Rightarrow x^2 = 2 \\Rightarrow x = \\pm\\sqrt{2} \\). \\( f''(x) = 6x \\); \\( f''(-\\sqrt{2}) = -6\\sqrt{2} < 0 \\) (Hochpunkt), \\( f''(\\sqrt{2}) = 6\\sqrt{2} > 0 \\) (Tiefpunkt). Die x-Koordinate des Hochpunktes ist \\( x = -\\sqrt{2} \\approx -1{,}41 \\).",
      "loesung": -1.41,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "Min(*solve(diff(x**3 - 6*x, x), x))"
      },
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-r6",
      "level": 4,
      "typ": "numerisch",
      "frage": "Gegeben ist \\( f(x) = x^4 - 8x^2 + 3 \\). Bestimmen Sie den y-Wert (Funktionswert) des Tiefpunktes, der bei \\( x = 2 \\) liegt.",
      "tipp": "Weisen Sie zunaechst mit \\( f''(2) > 0 \\) nach, dass bei \\( x = 2 \\) ein Tiefpunkt vorliegt, und setzen Sie dann \\( x = 2 \\) in \\( f \\) ein.",
      "loesungsweg": "\\( f'(x) = 4x^3 - 16x = 4x(x^2 - 4) = 0 \\Rightarrow x = 0; \\pm 2 \\). \\( f''(x) = 12x^2 - 16 \\); \\( f''(2) = 32 > 0 \\Rightarrow \\) Tiefpunkt. Funktionswert: \\( f(2) = 2^4 - 8 \\cdot 2^2 + 3 = 16 - 32 + 3 = -13 \\).",
      "loesung": -13,
      "check": {
        "art": "ausdruck",
        "expr": "(x**4 - 8*x**2 + 3).subs(x, 2)"
      },
      "thema": "ana-extrema"
    },
    {
      "id": "ana-ableitung-graph-r1",
      "level": 1,
      "typ": "mc",
      "frage": "Der Graph einer ganzrationalen Funktion \\(f\\) dritten Grades besitzt genau einen Hochpunkt und einen Tiefpunkt. Wie viele Nullstellen hat die Ableitung \\(f'\\)?",
      "tipp": "An jeder Extremstelle von \\(f\\) hat \\(f'\\) eine Nullstelle. Wie viele Extremstellen liegen vor?",
      "loesungsweg": "An einem Hochpunkt und an einem Tiefpunkt von \\(f\\) liegt jeweils eine waagerechte Tangente vor, also \\(f'(x)=0\\). Da \\(f\\) genau zwei Extremstellen besitzt, hat \\(f'\\) genau zwei Nullstellen. (Das passt zu \\(f'\\) als Funktion zweiten Grades.)",
      "optionen": [
        "keine",
        "genau eine",
        "genau zwei",
        "genau drei"
      ],
      "korrekt": 2,
      "check": {
        "art": "menge",
        "gleichung": "x**2 + x - 2",
        "var": "x",
        "erwartet": [
          "-2",
          "1"
        ]
      },
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist \\(f(x)=\\tfrac{1}{3}x^3-2x^2+3x\\). Der Graph von \\(f\\) besitzt zwei Stellen mit waagerechter Tangente. Bestimmen Sie die groessere dieser beiden Stellen (groesste Nullstelle von \\(f'\\)).",
      "tipp": "Waagerechte Tangente bedeutet \\(f'(x)=0\\). Leiten Sie ab und loesen Sie die quadratische Gleichung.",
      "loesungsweg": "Es ist \\(f'(x)=x^2-4x+3\\). Aus \\(x^2-4x+3=0\\) folgt mit der p-q-Formel oder Faktorisierung \\((x-1)(x-3)=0\\), also \\(x_1=1\\) und \\(x_2=3\\). Die groessere Stelle ist \\(x=3\\).",
      "loesung": 3,
      "toleranz": 0,
      "check": {
        "art": "ausdruck",
        "expr": "Max(*solve(diff(Rational(1,3)*x**3 - 2*x**2 + 3*x, x), x))"
      },
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-r3",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist \\(f(x)=x^4-4x^2+2\\). Bestimmen Sie die Steigung des Graphen von \\(f\\) an der Stelle \\(x=-1\\), also den Wert \\(f'(-1)\\).",
      "tipp": "Die Steigung an einer Stelle ist der Funktionswert der Ableitung dort. Bilde \\(f'\\) und setze \\(x=-1\\) ein.",
      "loesungsweg": "Die Ableitung lautet \\(f'(x)=4x^3-8x\\). Einsetzen von \\(x=-1\\) ergibt \\(f'(-1)=4\\cdot(-1)^3-8\\cdot(-1)=-4+8=4\\).",
      "loesung": 4,
      "toleranz": 0,
      "check": {
        "art": "ausdruck",
        "expr": "diff(x**4 - 4*x**2 + 2, x).subs(x, -1)"
      },
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-r4",
      "level": 2,
      "typ": "mc",
      "frage": "Der Graph einer Funktion \\(f\\) faellt im Intervall \\(]a;b[\\) streng monoton. Welche Aussage ueber \\(f'\\) auf diesem Intervall ist richtig?",
      "tipp": "Verknuepfe Monotonie von \\(f\\) mit dem Vorzeichen von \\(f'\\). Fallen entspricht welchem Vorzeichen?",
      "loesungsweg": "Faellt \\(f\\) auf einem Intervall streng monoton, so ist dort \\(f'(x)<0\\). Der Graph von \\(f'\\) verlaeuft auf \\(]a;b[\\) also unterhalb der x-Achse.",
      "optionen": [
        "\\(f'(x)>0\\) auf dem ganzen Intervall",
        "\\(f'(x)<0\\) auf dem ganzen Intervall",
        "\\(f'(x)=0\\) auf dem ganzen Intervall",
        "\\(f'\\) wechselt im Intervall mehrfach das Vorzeichen"
      ],
      "korrekt": 1,
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-r5",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\(f(x)=-x^3+3x^2+9x-1\\). Der Graph von \\(f\\) besitzt einen Tief- und einen Hochpunkt. Bestimmen Sie die kleinste Stelle mit waagerechter Tangente (kleinste Nullstelle von \\(f'\\)).",
      "tipp": "Setze \\(f'(x)=0\\). Achte auf das negative Vorzeichen des Leitterms beim Ableiten.",
      "loesungsweg": "Es ist \\(f'(x)=-3x^2+6x+9\\). Aus \\(-3x^2+6x+9=0\\) folgt nach Division durch \\(-3\\) die Gleichung \\(x^2-2x-3=0\\), also \\((x+1)(x-3)=0\\) mit \\(x_1=-1\\) und \\(x_2=3\\). Die kleinste Stelle ist \\(x=-1\\).",
      "loesung": -1,
      "toleranz": 0,
      "check": {
        "art": "ausdruck",
        "expr": "Min(*solve(diff(-x**3 + 3*x**2 + 9*x - 1, x), x))"
      },
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-r6",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\(f(x)=x^4-2x^3\\). An wie vielen Stellen besitzt der Graph von \\(f\\) eine waagerechte Tangente (Anzahl der verschiedenen Nullstellen von \\(f'\\))?",
      "tipp": "Eine waagerechte Tangente liegt genau dort vor, wo \\(f'(x)=0\\) ist. Bilde \\(f'\\), klammere aus und zaehle die verschiedenen Loesungen.",
      "loesungsweg": "Es ist \\(f'(x)=4x^3-6x^2=2x^2(2x-3)\\). Aus \\(2x^2(2x-3)=0\\) folgt \\(x=0\\) oder \\(x=\\tfrac{3}{2}\\). Es gibt also zwei verschiedene Stellen mit waagerechter Tangente.",
      "loesung": 2,
      "toleranz": 0,
      "check": {
        "art": "ausdruck",
        "expr": "len(solve(diff(x**4 - 2*x**3, x), x))"
      },
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-integral-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Berechnen Sie das bestimmte Integral \\(\\displaystyle\\int_{0}^{2} 3x^2 \\, dx\\).",
      "tipp": "Stammfunktion von \\(3x^2\\) ist \\(x^3\\). Setzen Sie die obere und untere Grenze ein und bilden Sie die Differenz.",
      "loesungsweg": "Eine Stammfunktion ist \\(F(x)=x^3\\). Damit gilt \\(\\int_{0}^{2} 3x^2\\,dx = F(2)-F(0) = 2^3 - 0^3 = 8\\).",
      "loesung": 8,
      "check": {
        "art": "ausdruck",
        "expr": "integrate(3*x**2,(x,0,2))"
      },
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Berechnen Sie das bestimmte Integral \\(\\displaystyle\\int_{-1}^{1} \\left(x^3 - 2x + 1\\right) \\, dx\\).",
      "tipp": "Bilden Sie die Stammfunktion summandenweise: \\(\\tfrac{1}{4}x^4 - x^2 + x\\). Beachten Sie das Vorzeichen beim Einsetzen der unteren Grenze.",
      "loesungsweg": "Stammfunktion: \\(F(x)=\\tfrac{1}{4}x^4 - x^2 + x\\). Es ist \\(F(1)=\\tfrac{1}{4}-1+1=\\tfrac{1}{4}\\) und \\(F(-1)=\\tfrac{1}{4}-1-1=-\\tfrac{7}{4}\\). Also \\(\\int_{-1}^{1}(x^3-2x+1)\\,dx = \\tfrac{1}{4}-\\left(-\\tfrac{7}{4}\\right)=2\\).",
      "loesung": 2,
      "check": {
        "art": "ausdruck",
        "expr": "integrate(x**3-2*x+1,(x,-1,1))"
      },
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-r3",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben sind \\(f(x)=x^2\\) und \\(g(x)=2x+3\\). Berechnen Sie den Inhalt der von den beiden Graphen eingeschlossenen Flaeche. Runden Sie auf zwei Nachkommastellen.",
      "tipp": "Bestimmen Sie zuerst die Schnittstellen aus \\(x^2 = 2x+3\\). Im Inneren liegt die Gerade ueber der Parabel, also integrieren Sie 'obere minus untere' = \\(g(x)-f(x)\\).",
      "loesungsweg": "Schnittstellen: \\(x^2=2x+3 \\Rightarrow x^2-2x-3=0 \\Rightarrow (x-3)(x+1)=0\\), also \\(x=-1\\) und \\(x=3\\). Probepunkt \\(x=1\\): \\(g(1)=5>f(1)=1\\), die Gerade liegt oben. Flaeche \\(A=\\int_{-1}^{3}\\big((2x+3)-x^2\\big)\\,dx = \\left[x^2+3x-\\tfrac{1}{3}x^3\\right]_{-1}^{3} = \\tfrac{32}{3} \\approx 10{,}67\\).",
      "loesung": 10.67,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "integrate((2*x+3)-x**2,(x,-1,3))"
      },
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-r4",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\(f(x)=x^2\\) mit der Ableitung \\(f'(x)=2x\\). Berechnen Sie den Inhalt der Flaeche, die zwischen den Graphen von \\(f\\) und \\(f'\\) eingeschlossen wird. Runden Sie auf zwei Nachkommastellen.",
      "tipp": "Setzen Sie \\(f(x)=f'(x)\\), also \\(x^2=2x\\), um die Grenzen zu finden. Pruefen Sie mit einem Probepunkt, welcher Graph oben liegt.",
      "loesungsweg": "Es ist \\(f'(x)=2x\\). Schnittstellen: \\(x^2=2x \\Rightarrow x^2-2x=0 \\Rightarrow x(x-2)=0\\), also \\(x=0\\) und \\(x=2\\). Probepunkt \\(x=1\\): \\(f'(1)=2 > f(1)=1\\), also liegt \\(f'\\) oben. Flaeche \\(A=\\int_{0}^{2}\\big(2x-x^2\\big)\\,dx = \\left[x^2-\\tfrac{1}{3}x^3\\right]_{0}^{2} = 4-\\tfrac{8}{3} = \\tfrac{4}{3} \\approx 1{,}33\\).",
      "loesung": 1.33,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "integrate(2*x-x**2,(x,0,2))"
      },
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-r5",
      "level": 4,
      "typ": "mc",
      "frage": "Gegeben ist \\(f(x)=x^2-4\\). Welcher Wert beschreibt den Inhalt der Flaeche, die der Graph von \\(f\\) mit der x-Achse zwischen \\(x=-2\\) und \\(x=2\\) einschliesst?",
      "tipp": "Auf dem Intervall \\([-2,\\,2]\\) ist \\(f(x)\\le 0\\). Der reine Integralwert ist daher negativ; der Flaecheninhalt ist der Betrag. Integrieren Sie \\(-(x^2-4)\\).",
      "loesungsweg": "Nullstellen \\(x=\\pm 2\\); dazwischen ist \\(f(x)<0\\), der Graph verlaeuft unterhalb der x-Achse. Der Flaecheninhalt ist \\(A=\\int_{-2}^{2}\\big(-(x^2-4)\\big)\\,dx = \\int_{-2}^{2}(4-x^2)\\,dx = \\left[4x-\\tfrac{1}{3}x^3\\right]_{-2}^{2} = \\tfrac{32}{3} \\approx 10{,}67\\). Der unkorrigierte Integralwert \\(-\\tfrac{32}{3}\\) ist kein Flaecheninhalt.",
      "optionen": [
        "\\(\\tfrac{32}{3}\\approx 10{,}67\\)",
        "\\(-\\tfrac{32}{3}\\approx -10{,}67\\)",
        "\\(0\\)",
        "\\(\\tfrac{16}{3}\\approx 5{,}33\\)"
      ],
      "korrekt": 0,
      "check": {
        "art": "ausdruck",
        "expr": "integrate(-(x**2-4),(x,-2,2))",
        "erwartet": "32/3"
      },
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-r6",
      "level": 4,
      "typ": "numerisch",
      "frage": "Gegeben sind \\(f(x)=-x^2+4x\\) und \\(g(x)=x\\). Berechnen Sie den Inhalt der von beiden Graphen eingeschlossenen Flaeche.",
      "tipp": "Loesen Sie \\(-x^2+4x = x\\) zur Bestimmung der Grenzen. Pruefen Sie mit einem Probepunkt, ob \\(f\\) oder \\(g\\) oben liegt.",
      "loesungsweg": "Schnittstellen: \\(-x^2+4x=x \\Rightarrow -x^2+3x=0 \\Rightarrow x(3-x)=0\\), also \\(x=0\\) und \\(x=3\\). Probepunkt \\(x=1\\): \\(f(1)=3 > g(1)=1\\), also liegt \\(f\\) oben. Flaeche \\(A=\\int_{0}^{3}\\big((-x^2+4x)-x\\big)\\,dx = \\int_{0}^{3}(-x^2+3x)\\,dx = \\left[-\\tfrac{1}{3}x^3+\\tfrac{3}{2}x^2\\right]_{0}^{3} = -9+\\tfrac{27}{2} = \\tfrac{9}{2} = 4{,}5\\).",
      "loesung": 4.5,
      "check": {
        "art": "ausdruck",
        "expr": "integrate((-x**2+4*x)-x,(x,0,3))"
      },
      "thema": "ana-integral"
    },
    {
      "id": "geo-vektoren-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Berechnen Sie den Betrag des Vektors \\( \\vec{a} = \\begin{pmatrix} 3 \\\\ 4 \\\\ 0 \\end{pmatrix} \\).",
      "tipp": "Betrag eines Vektors: \\( |\\vec{a}| = \\sqrt{a_1^2 + a_2^2 + a_3^2} \\).",
      "loesungsweg": "\\( |\\vec{a}| = \\sqrt{3^2 + 4^2 + 0^2} = \\sqrt{9 + 16 + 0} = \\sqrt{25} = 5 \\).",
      "loesung": 5,
      "check": {
        "art": "ausdruck",
        "expr": "sqrt(Matrix([3,4,0]).dot(Matrix([3,4,0])))"
      },
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben sind die Punkte \\( A(1\\,|\\,2\\,|\\,2) \\) und \\( B(5\\,|\\,4\\,|\\,6) \\). Berechnen Sie den Abstand der beiden Punkte, also den Betrag des Verbindungsvektors \\( \\vec{AB} \\).",
      "tipp": "Erst \\( \\vec{AB} = \\vec{OB} - \\vec{OA} \\) aufstellen, dann den Betrag berechnen.",
      "loesungsweg": "\\( \\vec{AB} = \\begin{pmatrix} 5-1 \\\\ 4-2 \\\\ 6-2 \\end{pmatrix} = \\begin{pmatrix} 4 \\\\ 2 \\\\ 4 \\end{pmatrix} \\). Dann \\( |\\vec{AB}| = \\sqrt{4^2 + 2^2 + 4^2} = \\sqrt{16 + 4 + 16} = \\sqrt{36} = 6 \\).",
      "loesung": 6,
      "check": {
        "art": "ausdruck",
        "expr": "sqrt((Matrix([5,4,6])-Matrix([1,2,2])).dot(Matrix([5,4,6])-Matrix([1,2,2])))"
      },
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-r3",
      "level": 3,
      "typ": "numerisch",
      "frage": "Berechnen Sie den Betrag des Vektors \\( \\vec{v} = \\begin{pmatrix} 2 \\\\ -3 \\\\ 5 \\end{pmatrix} \\). Runden Sie auf zwei Nachkommastellen.",
      "tipp": "Auch negative Komponenten werden quadriert und damit positiv. Das Ergebnis ist irrational.",
      "loesungsweg": "\\( |\\vec{v}| = \\sqrt{2^2 + (-3)^2 + 5^2} = \\sqrt{4 + 9 + 25} = \\sqrt{38} \\approx 6{,}16 \\).",
      "loesung": 6.16,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "sqrt(Matrix([2,-3,5]).dot(Matrix([2,-3,5])))"
      },
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-r4",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben sind die Punkte \\( A(2\\,|\\,4\\,|\\,6) \\) und \\( B(8\\,|\\,2\\,|\\,4) \\). Bestimmen Sie die \\( z \\)-Koordinate des Mittelpunktes \\( M \\) der Strecke \\( \\overline{AB} \\).",
      "tipp": "Mittelpunkt: \\( M = \\tfrac{1}{2}\\left(\\vec{OA} + \\vec{OB}\\right) \\). Die \\( z \\)-Koordinate ist der Mittelwert der \\( z \\)-Werte.",
      "loesungsweg": "\\( M = \\frac{1}{2}\\begin{pmatrix} 2+8 \\\\ 4+2 \\\\ 6+4 \\end{pmatrix} = \\frac{1}{2}\\begin{pmatrix} 10 \\\\ 6 \\\\ 10 \\end{pmatrix} = \\begin{pmatrix} 5 \\\\ 3 \\\\ 5 \\end{pmatrix} \\). Die \\( z \\)-Koordinate ist also \\( 5 \\).",
      "loesung": 5,
      "check": {
        "art": "ausdruck",
        "expr": "((Matrix([2,4,6])+Matrix([8,2,4]))/2)[2]"
      },
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-r5",
      "level": 3,
      "typ": "mc",
      "frage": "Ein Vektorzug ist gegeben durch \\( \\vec{OD} = \\vec{a} + \\vec{b} \\) mit \\( \\vec{a} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix} \\) und \\( \\vec{b} = \\begin{pmatrix} 1 \\\\ 4 \\\\ -2 \\end{pmatrix} \\). Welcher Vektor ist \\( \\vec{OD} \\)?",
      "tipp": "Vektoren werden komponentenweise addiert.",
      "loesungsweg": "\\( \\vec{OD} = \\begin{pmatrix} 2+1 \\\\ -1+4 \\\\ 3+(-2) \\end{pmatrix} = \\begin{pmatrix} 3 \\\\ 3 \\\\ 1 \\end{pmatrix} \\).",
      "optionen": [
        "\\( \\begin{pmatrix} 3 \\\\ 3 \\\\ 1 \\end{pmatrix} \\)",
        "\\( \\begin{pmatrix} 1 \\\\ -5 \\\\ 5 \\end{pmatrix} \\)",
        "\\( \\begin{pmatrix} -1 \\\\ 5 \\\\ -5 \\end{pmatrix} \\)",
        "\\( \\begin{pmatrix} 2 \\\\ -4 \\\\ -6 \\end{pmatrix} \\)"
      ],
      "korrekt": 0,
      "loesung": 0,
      "check": {
        "art": "vektor",
        "expr": "Matrix([2,-1,3])+Matrix([1,4,-2])",
        "erwartet": [
          3,
          3,
          1
        ]
      },
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-r6",
      "level": 4,
      "typ": "mc",
      "frage": "Gegeben sind die Punkte \\( A(-2\\,|\\,3\\,|\\,1) \\) und \\( B(4\\,|\\,-1\\,|\\,5) \\). Welcher Vektor ist der Verbindungsvektor \\( \\vec{AB} \\)?",
      "tipp": "\\( \\vec{AB} = \\vec{OB} - \\vec{OA} \\): Spitze (B) minus Fuss (A).",
      "loesungsweg": "\\( \\vec{AB} = \\begin{pmatrix} 4-(-2) \\\\ -1-3 \\\\ 5-1 \\end{pmatrix} = \\begin{pmatrix} 6 \\\\ -4 \\\\ 4 \\end{pmatrix} \\).",
      "optionen": [
        "\\( \\begin{pmatrix} 6 \\\\ -4 \\\\ 4 \\end{pmatrix} \\)",
        "\\( \\begin{pmatrix} -6 \\\\ 4 \\\\ -4 \\end{pmatrix} \\)",
        "\\( \\begin{pmatrix} 2 \\\\ 2 \\\\ 6 \\end{pmatrix} \\)",
        "\\( \\begin{pmatrix} 6 \\\\ 4 \\\\ 4 \\end{pmatrix} \\)"
      ],
      "korrekt": 0,
      "loesung": 0,
      "check": {
        "art": "vektor",
        "expr": "Matrix([4,-1,5])-Matrix([-2,3,1])",
        "erwartet": [
          6,
          -4,
          4
        ]
      },
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-ebene-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Gegeben ist die Ebene \\(E:\\ \\vec{x} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 2 \\end{pmatrix} + r\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix} + s\\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}\\). Berechnen Sie die erste Komponente \\(n_1\\) des Normalenvektors \\(\\vec{n} = \\vec{u}\\times\\vec{v}\\).",
      "tipp": "Erste Komponente des Kreuzprodukts: \\(n_1 = u_2 v_3 - u_3 v_2\\).",
      "loesungsweg": "Mit \\(\\vec{u}=\\begin{pmatrix} 1 \\\\ 2 \\\\ 0 \\end{pmatrix},\\ \\vec{v}=\\begin{pmatrix} 0 \\\\ 1 \\\\ 3 \\end{pmatrix}\\) ist \\(n_1 = u_2 v_3 - u_3 v_2 = 2\\cdot 3 - 0\\cdot 1 = 6\\).",
      "loesung": 6,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([1,2,0]).cross(Matrix([0,1,3]))[0]"
      },
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Eine Ebene \\(E\\) hat den Normalenvektor \\(\\vec{n} = \\begin{pmatrix} -2 \\\\ 4 \\\\ 1 \\end{pmatrix}\\) und enthaelt den Punkt \\(A(2\\,|\\,1\\,|\\,1)\\). Bestimmen Sie den Wert \\(d\\) in der Koordinatengleichung \\(-2x + 4y + z = d\\).",
      "tipp": "Setzen Sie die Koordinaten von \\(A\\) in die linke Seite ein: \\(d = \\vec{n}\\cdot\\vec{A}\\).",
      "loesungsweg": "\\(d = \\vec{n}\\cdot\\vec{A} = (-2)\\cdot 2 + 4\\cdot 1 + 1\\cdot 1 = -4 + 4 + 1 = 1\\).",
      "loesung": 1,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([-2,4,1]).dot(Matrix([2,1,1]))"
      },
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-r3",
      "level": 2,
      "typ": "numerisch",
      "frage": "Die Ebene \\(E\\) wird von den Spannvektoren \\(\\vec{u} = \\begin{pmatrix} 3 \\\\ 0 \\\\ 1 \\end{pmatrix}\\) und \\(\\vec{v} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}\\) aufgespannt. Berechnen Sie die dritte Komponente \\(n_3\\) des Normalenvektors \\(\\vec{n} = \\vec{u}\\times\\vec{v}\\).",
      "tipp": "Dritte Komponente des Kreuzprodukts: \\(n_3 = u_1 v_2 - u_2 v_1\\).",
      "loesungsweg": "\\(n_3 = u_1 v_2 - u_2 v_1 = 3\\cdot 2 - 0\\cdot 1 = 6\\).",
      "loesung": 6,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([3,0,1]).cross(Matrix([1,2,2]))[2]"
      },
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-r4",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist \\(E:\\ \\vec{x} = \\begin{pmatrix} 1 \\\\ 1 \\\\ 0 \\end{pmatrix} + r\\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix} + s\\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix}\\). Bestimmen Sie das \\(d\\) der Koordinatengleichung, indem Sie den Stuetzpunkt in \\(n_1 x + n_2 y + n_3 z = d\\) einsetzen.",
      "tipp": "Zuerst \\(\\vec{n} = \\vec{u}\\times\\vec{v}\\) berechnen, dann \\(d = \\vec{n}\\cdot\\vec{A}\\) mit dem Stuetzpunkt \\(A(1\\,|\\,1\\,|\\,0)\\).",
      "loesungsweg": "Kreuzprodukt: \\(\\vec{n} = \\begin{pmatrix} 1 \\\\ 0 \\\\ -1 \\end{pmatrix}\\times\\begin{pmatrix} 2 \\\\ 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 1 \\end{pmatrix}\\). Einsetzen von \\(A(1\\,|\\,1\\,|\\,0)\\): \\(d = 1\\cdot 1 + (-2)\\cdot 1 + 1\\cdot 0 = -1\\).",
      "loesung": -1,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([1,0,-1]).cross(Matrix([2,1,0])).dot(Matrix([1,1,0]))"
      },
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-r5",
      "level": 3,
      "typ": "numerisch",
      "frage": "Pruefen Sie mit der Punktprobe, ob \\(P(1\\,|\\,1\\,|\\,2)\\) in der Ebene \\(E:\\ 2x - y + 3z = 7\\) liegt. Geben Sie den Wert an, den die linke Seite \\(2x - y + 3z\\) fuer \\(P\\) annimmt.",
      "tipp": "Koordinaten von \\(P\\) in den Term \\(2x - y + 3z\\) einsetzen und mit \\(7\\) vergleichen.",
      "loesungsweg": "\\(2\\cdot 1 - 1 + 3\\cdot 2 = 2 - 1 + 6 = 7\\). Da der Wert gleich \\(7\\) ist, liegt \\(P\\) in der Ebene.",
      "loesung": 7,
      "check": {
        "art": "ausdruck",
        "expr": "2*1 - 1 + 3*2"
      },
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-r6",
      "level": 2,
      "typ": "mc",
      "frage": "Die Ebene \\(E\\) wird von \\(\\vec{u} = \\begin{pmatrix} 2 \\\\ -1 \\\\ 0 \\end{pmatrix}\\) und \\(\\vec{v} = \\begin{pmatrix} 1 \\\\ 0 \\\\ 3 \\end{pmatrix}\\) aufgespannt. Welcher Vektor ist ein Normalenvektor von \\(E\\)?",
      "tipp": "Ein Normalenvektor steht senkrecht auf beiden Spannvektoren und ergibt sich aus \\(\\vec{u}\\times\\vec{v}\\).",
      "loesungsweg": "\\(\\vec{u}\\times\\vec{v} = \\begin{pmatrix} (-1)\\cdot 3 - 0\\cdot 0 \\\\ 0\\cdot 1 - 2\\cdot 3 \\\\ 2\\cdot 0 - (-1)\\cdot 1 \\end{pmatrix} = \\begin{pmatrix} -3 \\\\ -6 \\\\ 1 \\end{pmatrix}\\).",
      "optionen": [
        "\\(\\begin{pmatrix} -3 \\\\ -6 \\\\ 1 \\end{pmatrix}\\)",
        "\\(\\begin{pmatrix} 3 \\\\ -1 \\\\ 3 \\end{pmatrix}\\)",
        "\\(\\begin{pmatrix} 2 \\\\ 0 \\\\ 0 \\end{pmatrix}\\)",
        "\\(\\begin{pmatrix} 1 \\\\ -1 \\\\ 3 \\end{pmatrix}\\)"
      ],
      "korrekt": 0,
      "check": {
        "art": "vektor",
        "expr": "Matrix([2,-1,0]).cross(Matrix([1,0,3]))",
        "erwartet": [
          -3,
          -6,
          1
        ]
      },
      "thema": "geo-ebene"
    },
    {
      "id": "geo-lage-abstand-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Berechnen Sie den Abstand der beiden Punkte \\(P(1\\,|\\,2\\,|\\,2)\\) und \\(Q(4\\,|\\,6\\,|\\,14)\\).",
      "tipp": "Verwende \\(d(P,Q)=\\sqrt{(q_1-p_1)^2+(q_2-p_2)^2+(q_3-p_3)^2}\\).",
      "loesungsweg": "Differenzen: \\(4-1=3\\), \\(6-2=4\\), \\(14-2=12\\). Damit \\(d=\\sqrt{3^2+4^2+12^2}=\\sqrt{9+16+144}=\\sqrt{169}=13\\).",
      "loesung": 13,
      "check": {
        "art": "ausdruck",
        "expr": "sqrt((4-1)**2+(6-2)**2+(14-2)**2)"
      },
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben sei die Ebene \\(E\\colon 2x - y + 2z = 6\\) und der Punkt \\(P(3\\,|\\,1\\,|\\,4)\\). Berechnen Sie den Wert der linken Seite \\(2x - y + 2z\\), wenn Sie die Koordinaten von \\(P\\) einsetzen.",
      "tipp": "Setze \\(x=3\\), \\(y=1\\), \\(z=4\\) in \\(2x-y+2z\\) ein. Der Vergleich mit der rechten Seite \\(6\\) zeigt dann, ob \\(P\\) in \\(E\\) liegt.",
      "loesungsweg": "\\(2\\cdot 3 - 1 + 2\\cdot 4 = 6 - 1 + 8 = 13\\). Da \\(13 \\neq 6\\), liegt \\(P\\) nicht in der Ebene.",
      "loesung": 13,
      "check": {
        "art": "ausdruck",
        "expr": "2*3 - 1 + 2*4"
      },
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-r3",
      "level": 1,
      "typ": "mc",
      "frage": "Liegt der Punkt \\(P(2\\,|\\,3\\,|\\,3)\\) in der Ebene \\(E\\colon x + 2y - z = 5\\)?",
      "tipp": "Setze die Koordinaten von \\(P\\) in die linke Seite ein und vergleiche mit \\(5\\).",
      "loesungsweg": "Einsetzen: \\(2 + 2\\cdot 3 - 3 = 2 + 6 - 3 = 5\\). Da \\(5 = 5\\), ist die Ebenengleichung erfuellt und \\(P\\) liegt in \\(E\\).",
      "optionen": [
        "Ja, denn das Einsetzen liefert \\(5 = 5\\).",
        "Nein, das Einsetzen liefert einen Wert ungleich \\(5\\).",
        "Das laesst sich ohne Lotfusspunkt nicht entscheiden."
      ],
      "korrekt": 0,
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-r4",
      "level": 2,
      "typ": "numerisch",
      "frage": "Berechnen Sie den Abstand der Punkte \\(A(1\\,|\\,1\\,|\\,1)\\) und \\(B(3\\,|\\,4\\,|\\,5)\\). Runden Sie auf zwei Nachkommastellen.",
      "tipp": "Bilde den Verbindungsvektor \\(\\overrightarrow{AB}\\) und berechne seinen Betrag.",
      "loesungsweg": "\\(\\overrightarrow{AB}=\\begin{pmatrix} 2 \\\\ 3 \\\\ 4 \\end{pmatrix}\\), also \\(d=\\sqrt{2^2+3^2+4^2}=\\sqrt{4+9+16}=\\sqrt{29}\\approx 5{,}39\\).",
      "loesung": 5.39,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "sqrt((3-1)**2+(4-1)**2+(5-1)**2)"
      },
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-r5",
      "level": 3,
      "typ": "numerisch",
      "frage": "Bestimmen Sie den Abstand des Punktes \\(P(4\\,|\\,3\\,|\\,5)\\) von der Ebene \\(E\\colon 2x + y + 2z = 9\\).",
      "tipp": "Setze \\(P\\) in \\(2x+y+2z-9\\) ein und teile den Betrag durch \\(|\\vec{n}|=\\sqrt{2^2+1^2+2^2}\\).",
      "loesungsweg": "Normalenvektor \\(\\vec{n}=\\begin{pmatrix} 2 \\\\ 1 \\\\ 2 \\end{pmatrix}\\) mit \\(|\\vec{n}|=\\sqrt{4+1+4}=3\\). Einsetzen: \\(2\\cdot4+1\\cdot3+2\\cdot5-9 = 8+3+10-9 = 12\\). Abstand: \\(d=\\dfrac{|12|}{3}=4\\).",
      "loesung": 4,
      "check": {
        "art": "ausdruck",
        "expr": "Abs(2*4+1*3+2*5-9)/sqrt(2**2+1**2+2**2)"
      },
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-r6",
      "level": 3,
      "typ": "numerisch",
      "frage": "Gegeben ist die Ebene \\(E\\colon x + 2y + 2z = 4\\) und der Punkt \\(P(2\\,|\\,2\\,|\\,2)\\). Berechnen Sie den Abstand von \\(P\\) zu \\(E\\).",
      "tipp": "Hier ist \\(|\\vec{n}|=\\sqrt{1^2+2^2+2^2}=3\\). Setze \\(P\\) in \\(x+2y+2z-4\\) ein und teile durch \\(3\\).",
      "loesungsweg": "Einsetzen: \\(2 + 2\\cdot2 + 2\\cdot2 - 4 = 2+4+4-4 = 6\\). Mit \\(|\\vec{n}|=\\sqrt{1+4+4}=3\\) folgt \\(d=\\dfrac{|6|}{3}=2\\).",
      "loesung": 2,
      "check": {
        "art": "ausdruck",
        "expr": "Abs(1*2+2*2+2*2-4)/sqrt(1**2+2**2+2**2)"
      },
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-r7",
      "level": 4,
      "typ": "mc",
      "frage": "Die Ebene \\(E\\colon 3x - 4z = 0\\) und der Punkt \\(P(2\\,|\\,5\\,|\\,1)\\) sind gegeben. Welcher Abstand ergibt sich?",
      "tipp": "Beachte, dass \\(y\\) in der Gleichung fehlt: \\(\\vec{n}=\\begin{pmatrix} 3 \\\\ 0 \\\\ -4 \\end{pmatrix}\\), also \\(|\\vec{n}|=5\\).",
      "loesungsweg": "Einsetzen in \\(3x-4z\\): \\(3\\cdot2 - 4\\cdot1 = 6-4 = 2\\). Mit \\(|\\vec{n}|=\\sqrt{3^2+0^2+(-4)^2}=\\sqrt{25}=5\\) folgt \\(d=\\dfrac{|2|}{5}=0{,}4\\).",
      "optionen": [
        "\\(0{,}4\\)",
        "\\(2\\)",
        "\\(0{,}25\\)",
        "\\(10\\)"
      ],
      "korrekt": 0,
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-spiegelung-r1",
      "level": 1,
      "typ": "numerisch",
      "frage": "Gegeben sind die Ebene \\(E\\colon x + 2y + 2z = 6\\) mit Normalenvektor \\(\\vec n = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}\\) und der Punkt \\(P(1\\mid -2\\mid 0)\\). Berechnen Sie das Skalarprodukt \\(\\vec n \\cdot \\overrightarrow{OP}\\).",
      "tipp": "Multipliziere komponentenweise und addiere: \\(1\\cdot 1 + 2\\cdot(-2) + 2\\cdot 0\\). Dieser Wert wird beim Einsetzen der Lotgeraden in die Ebenengleichung gebraucht.",
      "loesungsweg": "\\(\\vec n \\cdot \\overrightarrow{OP} = 1\\cdot 1 + 2\\cdot(-2) + 2\\cdot 0 = 1 - 4 + 0 = -3.\\)",
      "loesung": -3,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([1,2,2]).dot(Matrix([1,-2,0]))"
      },
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Fuer \\(E\\colon x + 2y + 2z = 6\\) und \\(P(1\\mid -2\\mid 0)\\) lautet die Lotgerade \\(g\\colon \\vec X = \\begin{pmatrix} 1 \\\\ -2 \\\\ 0 \\end{pmatrix} + t\\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}\\). Bestimmen Sie den Parameterwert \\(t\\) des Durchstosspunktes mit der Ebene.",
      "tipp": "Setze die Koordinaten \\(x=1+t,\\ y=-2+2t,\\ z=2t\\) in \\(x+2y+2z=6\\) ein und loese nach \\(t\\). Beachte \\(|\\vec n|^2 = 9\\).",
      "loesungsweg": "Einsetzen: \\((1+t) + 2(-2+2t) + 2(2t) = 6 \\Rightarrow 1 + t - 4 + 4t + 4t = 6 \\Rightarrow 9t - 3 = 6 \\Rightarrow 9t = 9 \\Rightarrow t = 1.\\)",
      "loesung": 1,
      "check": {
        "art": "ausdruck",
        "expr": "solve(Matrix([1,2,2]).dot(Matrix([1,-2,0])+t*Matrix([1,2,2]))-6, t)[0]"
      },
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-r3",
      "level": 2,
      "typ": "mc",
      "frage": "Fuer \\(E\\colon x + 2y + 2z = 6\\), \\(P(1\\mid -2\\mid 0)\\) ergibt sich \\(t = 1\\). Welche Koordinaten hat der Durchstosspunkt (Lotfusspunkt) \\(D\\)?",
      "tipp": "Setze \\(t=1\\) in \\(\\vec X = \\overrightarrow{OP} + t\\,\\vec n\\) ein: \\(D = (1+1\\mid -2+2\\mid 0+2)\\).",
      "loesungsweg": "\\(\\overrightarrow{OD} = \\begin{pmatrix} 1 \\\\ -2 \\\\ 0 \\end{pmatrix} + 1\\cdot\\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 0 \\\\ 2 \\end{pmatrix}.\\) Also \\(D(2\\mid 0\\mid 2)\\).",
      "optionen": [
        "\\(D(2\\mid 0\\mid 2)\\)",
        "\\(D(3\\mid 2\\mid 4)\\)",
        "\\(D(0\\mid -4\\mid -2)\\)",
        "\\(D(1\\mid 2\\mid 2)\\)"
      ],
      "korrekt": 0,
      "check": {
        "art": "vektor",
        "expr": "Matrix([1,-2,0]) + 1*Matrix([1,2,2])",
        "erwartet": [
          2,
          0,
          2
        ]
      },
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-r4",
      "level": 3,
      "typ": "numerisch",
      "frage": "Mit \\(P(1\\mid -2\\mid 0)\\) und Durchstosspunkt \\(D(2\\mid 0\\mid 2)\\): Bestimmen Sie die \\(z\\)-Koordinate des Spiegelpunktes \\(P'\\) ueber \\(\\overrightarrow{OP'} = 2\\,\\overrightarrow{OD} - \\overrightarrow{OP}\\).",
      "tipp": "Nur die dritte Komponente rechnen: \\(2\\cdot z_D - z_P = 2\\cdot 2 - 0\\). Alternativ \\(\\overrightarrow{OP'} = \\overrightarrow{OP} + 2\\,\\overrightarrow{PD}\\).",
      "loesungsweg": "\\(z_{P'} = 2\\cdot z_D - z_P = 2\\cdot 2 - 0 = 4.\\) (Vollstaendig: \\(P'(3\\mid 2\\mid 4)\\).)",
      "loesung": 4,
      "check": {
        "art": "ausdruck",
        "expr": "(2*Matrix([2,0,2]) - Matrix([1,-2,0]))[2]"
      },
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-r5",
      "level": 3,
      "typ": "numerisch",
      "frage": "Fuer \\(P(1\\mid -2\\mid 0)\\) und Durchstosspunkt \\(D(2\\mid 0\\mid 2)\\) ist \\(\\overrightarrow{PD} = \\begin{pmatrix} 1 \\\\ 2 \\\\ 2 \\end{pmatrix}\\). Berechnen Sie den Abstand zwischen dem Punkt \\(P\\) und seinem Spiegelpunkt \\(P'\\).",
      "tipp": "Es gilt \\(\\overrightarrow{PP'} = 2\\,\\overrightarrow{PD}\\). Der gesuchte Abstand ist also \\(|2\\,\\overrightarrow{PD}| = 2\\,|\\overrightarrow{PD}|\\).",
      "loesungsweg": "\\(|\\overrightarrow{PD}| = \\sqrt{1^2 + 2^2 + 2^2} = \\sqrt{9} = 3.\\) Da \\(\\overrightarrow{PP'} = 2\\,\\overrightarrow{PD}\\), folgt \\(|\\overrightarrow{PP'}| = 2\\cdot 3 = 6.\\)",
      "loesung": 6,
      "check": {
        "art": "ausdruck",
        "expr": "sqrt((2*Matrix([1,2,2])).dot(2*Matrix([1,2,2])))"
      },
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-r6",
      "level": 4,
      "typ": "numerisch",
      "frage": "Gegeben sind die Ebene \\(E\\colon x + y + z = 1\\) mit \\(\\vec n = \\begin{pmatrix} 1 \\\\ 1 \\\\ 1 \\end{pmatrix}\\) und der Punkt \\(P(3\\mid 3\\mid 3)\\). Bestimmen Sie den Abstand des Punktes \\(P\\) von der Ebene (das ist \\(|\\overrightarrow{PD}|\\)). Runden Sie auf zwei Nachkommastellen.",
      "tipp": "Loese zuerst \\((3+t)+(3+t)+(3+t)=1\\) nach \\(t\\) auf, dann ist der Abstand \\(|t|\\cdot|\\vec n| = |t|\\cdot\\sqrt{3}\\). Hier ist \\(|\\vec n|^2 = 3\\).",
      "loesungsweg": "Einsetzen: \\(9 + 3t = 1 \\Rightarrow t = -\\tfrac{8}{3}.\\) Abstand \\(= |t|\\cdot|\\vec n| = \\tfrac{8}{3}\\cdot\\sqrt{3} = \\tfrac{8\\sqrt{3}}{3} \\approx 4.62.\\)",
      "loesung": 4.62,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "Abs((1 - Matrix([1,1,1]).dot(Matrix([3,3,3])))/3)*sqrt(3)"
      },
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-r7",
      "level": 4,
      "typ": "mc",
      "frage": "Gegeben sind \\(E\\colon x + 2y + 2z = 6\\) und \\(P(1\\mid 5\\mid 2)\\). Der Lotfusspunkt ist \\(D(0\\mid 3\\mid 0)\\). Welche Koordinaten hat der Spiegelpunkt \\(P'\\)?",
      "tipp": "Verwende \\(\\overrightarrow{OP'} = 2\\,\\overrightarrow{OD} - \\overrightarrow{OP}\\), also komponentenweise \\(2\\cdot D_i - P_i\\).",
      "loesungsweg": "\\(\\overrightarrow{OP'} = 2\\begin{pmatrix} 0 \\\\ 3 \\\\ 0 \\end{pmatrix} - \\begin{pmatrix} 1 \\\\ 5 \\\\ 2 \\end{pmatrix} = \\begin{pmatrix} -1 \\\\ 1 \\\\ -2 \\end{pmatrix}.\\) Also \\(P'(-1\\mid 1\\mid -2)\\).",
      "optionen": [
        "\\(P'(-1\\mid 1\\mid -2)\\)",
        "\\(P'(1\\mid 1\\mid 2)\\)",
        "\\(P'(-1\\mid 7\\mid 2)\\)",
        "\\(P'(0\\mid 3\\mid 0)\\)"
      ],
      "korrekt": 0,
      "check": {
        "art": "vektor",
        "expr": "2*Matrix([0,3,0]) - Matrix([1,5,2])",
        "erwartet": [
          -1,
          1,
          -2
        ]
      },
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-dreieck-r1",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist das Dreieck mit \\( A(1\\,|\\,2\\,|\\,0) \\), \\( B(5\\,|\\,2\\,|\\,0) \\) und \\( C(3\\,|\\,2\\,|\\,4) \\). Berechnen Sie den Flaecheninhalt des Dreiecks ABC.",
      "tipp": "Nutze \\( A=\\tfrac{1}{2}\\,|\\overrightarrow{AB}\\times\\overrightarrow{AC}| \\). Bestimme zuerst die beiden Seitenvektoren und dann ihr Kreuzprodukt.",
      "loesungsweg": "\\( \\overrightarrow{AB}=\\begin{pmatrix}4\\\\0\\\\0\\end{pmatrix} \\), \\( \\overrightarrow{AC}=\\begin{pmatrix}2\\\\0\\\\4\\end{pmatrix} \\). Kreuzprodukt: \\( \\overrightarrow{AB}\\times\\overrightarrow{AC}=\\begin{pmatrix}0\\\\-16\\\\0\\end{pmatrix} \\), Betrag \\( =16 \\). Flaeche \\( =\\tfrac{1}{2}\\cdot 16 = 8 \\).",
      "loesung": 8,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([4,0,0]).cross(Matrix([2,0,4])).norm()/2"
      },
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-r2",
      "level": 2,
      "typ": "numerisch",
      "frage": "Fuer das Dreieck mit \\( A(1\\,|\\,2\\,|\\,0) \\) und \\( C(3\\,|\\,2\\,|\\,4) \\): Berechnen Sie die Laenge der Seite \\( \\overline{AC} \\). Runden Sie auf zwei Nachkommastellen.",
      "tipp": "Bilde \\( \\overrightarrow{AC}=C-A \\) und berechne dann \\( |\\overrightarrow{AC}|=\\sqrt{AC_1^2+AC_2^2+AC_3^2} \\).",
      "loesungsweg": "\\( \\overrightarrow{AC}=\\begin{pmatrix}2\\\\0\\\\4\\end{pmatrix} \\). \\( |\\overrightarrow{AC}|=\\sqrt{2^2+0^2+4^2}=\\sqrt{20}=2\\sqrt{5}\\approx 4.47 \\).",
      "loesung": 4.47,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([2,0,4]).norm()"
      },
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-r3",
      "level": 1,
      "typ": "numerisch",
      "frage": "Ueber der Strecke \\( \\overline{AB} \\) mit \\( A(1\\,|\\,2\\,|\\,0) \\) und \\( B(5\\,|\\,2\\,|\\,0) \\) wird ein Kreis errichtet, dessen Durchmesser \\( \\overline{AB} \\) ist. Bestimmen Sie den Radius dieses Kreises.",
      "tipp": "Der Radius ist die halbe Laenge des Durchmessers: \\( r=\\tfrac{1}{2}\\,|\\overrightarrow{AB}| \\).",
      "loesungsweg": "\\( \\overrightarrow{AB}=\\begin{pmatrix}4\\\\0\\\\0\\end{pmatrix} \\), \\( |\\overrightarrow{AB}|=4 \\). Radius \\( r=\\tfrac{4}{2}=2 \\).",
      "loesung": 2,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([4,0,0]).norm()/2"
      },
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-r4",
      "level": 2,
      "typ": "mc",
      "frage": "Der Kreis mit Durchmesser \\( \\overline{AB} \\), \\( A(1\\,|\\,2\\,|\\,0) \\), \\( B(5\\,|\\,2\\,|\\,0) \\), hat als Mittelpunkt den Mittelpunkt der Strecke \\( \\overline{AB} \\). Welche Koordinaten hat dieser Mittelpunkt M?",
      "tipp": "Der Streckenmittelpunkt ist \\( M=\\tfrac{1}{2}(A+B) \\) - jede Koordinate ist der Durchschnitt der entsprechenden Koordinaten von A und B.",
      "loesungsweg": "\\( M=\\tfrac{1}{2}\\left(\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}+\\begin{pmatrix}5\\\\2\\\\0\\end{pmatrix}\\right)=\\tfrac{1}{2}\\begin{pmatrix}6\\\\4\\\\0\\end{pmatrix}=\\begin{pmatrix}3\\\\2\\\\0\\end{pmatrix} \\). Also \\( M(3\\,|\\,2\\,|\\,0) \\).",
      "optionen": [
        "\\( M(3\\,|\\,2\\,|\\,0) \\)",
        "\\( M(6\\,|\\,4\\,|\\,0) \\)",
        "\\( M(2\\,|\\,0\\,|\\,0) \\)",
        "\\( M(4\\,|\\,2\\,|\\,0) \\)"
      ],
      "korrekt": 0,
      "check": {
        "art": "vektor",
        "expr": "(Matrix([1,2,0])+Matrix([5,2,0]))/2",
        "erwartet": [
          3,
          2,
          0
        ]
      },
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-r5",
      "level": 3,
      "typ": "mc",
      "frage": "Das Dreieck ABC mit \\( A(1\\,|\\,2\\,|\\,0) \\), \\( B(5\\,|\\,2\\,|\\,0) \\), \\( C(3\\,|\\,2\\,|\\,4) \\) soll zu einem Parallelogramm ABCD (Eckpunkte in dieser Reihenfolge) ergaenzt werden. Welche Koordinaten hat der Punkt D?",
      "tipp": "Bei einem Parallelogramm ABCD gilt \\( \\overrightarrow{AB}=\\overrightarrow{DC} \\), also \\( B-A=C-D \\) und damit \\( D=C-B+A \\). (Alternativ: \\( D=A+\\overrightarrow{BC} \\).)",
      "loesungsweg": "Aus \\( \\overrightarrow{AB}=\\overrightarrow{DC} \\) folgt \\( D=A+C-B=\\begin{pmatrix}1\\\\2\\\\0\\end{pmatrix}+\\begin{pmatrix}3\\\\2\\\\4\\end{pmatrix}-\\begin{pmatrix}5\\\\2\\\\0\\end{pmatrix}=\\begin{pmatrix}-1\\\\2\\\\4\\end{pmatrix} \\). Also \\( D(-1\\,|\\,2\\,|\\,4) \\).",
      "optionen": [
        "\\( D(-1\\,|\\,2\\,|\\,4) \\)",
        "\\( D(7\\,|\\,2\\,|\\,4) \\)",
        "\\( D(3\\,|\\,2\\,|\\,-4) \\)",
        "\\( D(9\\,|\\,2\\,|\\,4) \\)"
      ],
      "korrekt": 0,
      "check": {
        "art": "vektor",
        "expr": "Matrix([1,2,0])+Matrix([3,2,4])-Matrix([5,2,0])",
        "erwartet": [
          -1,
          2,
          4
        ]
      },
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-r6",
      "level": 3,
      "typ": "numerisch",
      "frage": "Berechnen Sie fuer das Dreieck mit \\( B(5\\,|\\,2\\,|\\,0) \\) und \\( C(3\\,|\\,2\\,|\\,4) \\) die Laenge der Seite \\( \\overline{BC} \\). Runden Sie auf zwei Nachkommastellen.",
      "tipp": "Bilde \\( \\overrightarrow{BC}=C-B \\) und berechne den Betrag. Vergleiche das Ergebnis mit \\( |\\overrightarrow{AC}| \\) - so erkennst du die Gleichschenkligkeit.",
      "loesungsweg": "\\( \\overrightarrow{BC}=C-B=\\begin{pmatrix}-2\\\\0\\\\4\\end{pmatrix} \\). \\( |\\overrightarrow{BC}|=\\sqrt{(-2)^2+0^2+4^2}=\\sqrt{20}=2\\sqrt{5}\\approx 4.47 \\). Da \\( |\\overrightarrow{BC}|=|\\overrightarrow{AC}| \\), ist das Dreieck gleichschenklig.",
      "loesung": 4.47,
      "toleranz": 0.01,
      "check": {
        "art": "ausdruck",
        "expr": "Matrix([-2,0,4]).norm()"
      },
      "thema": "geo-dreieck"
    },
    {
      "id": "ana-extrema-r7",
      "thema": "ana-extrema",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben ist \\(f(x)=x^3-6x^2+9x\\). Berechnen Sie den Wert der zweiten Ableitung an der Stelle \\(x_0=3\\), also \\(f''(3)\\).",
      "tipp": "Leite zweimal ab und setze \\(x_0=3\\) ein.",
      "loesungsweg": "\\(f'(x)=3x^2-12x+9\\), \\(f''(x)=6x-12\\). \\(f''(3)=6\\cdot 3-12=6\\).",
      "loesung": 6,
      "check": {
        "art": "ausdruck",
        "expr": "diff(x**3-6*x**2+9*x, x, 2).subs(x, 3)"
      }
    },
    {
      "id": "geo-vektoren-r7",
      "thema": "geo-vektoren",
      "level": 2,
      "typ": "numerisch",
      "frage": "Gegeben sind die Punkte \\(A(1|2|2)\\) und \\(B(4|6|2)\\). Berechnen Sie die Länge des Vektors \\(\\vec{AB}\\).",
      "tipp": "Bilde den Verbindungsvektor \\(\\vec{AB}=\\vec{OB}-\\vec{OA}\\) und dann seinen Betrag.",
      "loesungsweg": "\\(\\vec{AB}=\\begin{pmatrix}3\\\\4\\\\0\\end{pmatrix}\\), \\(|\\vec{AB}|=\\sqrt{3^2+4^2+0^2}=\\sqrt{25}=5\\).",
      "loesung": 5,
      "check": {
        "art": "ausdruck",
        "expr": "sqrt(3**2+4**2+0**2)"
      }
    },
    {
      "id": "ana-integral-r7",
      "thema": "ana-integral",
      "level": 2,
      "typ": "numerisch",
      "frage": "Berechnen Sie das bestimmte Integral \\(\\int_{0}^{2} 3x^2\\,dx\\).",
      "tipp": "Bilde eine Stammfunktion und setze die Grenzen ein.",
      "loesungsweg": "Eine Stammfunktion ist \\(x^3\\). \\(\\int_{0}^{2}3x^2\\,dx=[x^3]_0^2=8-0=8\\).",
      "loesung": 8,
      "check": {
        "art": "ausdruck",
        "expr": "integrate(3*x**2,(x,0,2))"
      }
    }
  ],
  "erklaeren": [
    {
      "id": "ana-symmetrie-e1",
      "frage": "Erlaeutern Sie, wie man eine ganzrationale Funktion rechnerisch auf Symmetrie zum Koordinatensystem untersucht.",
      "erwartungsbild": [
        "Man bildet den Term f(-x), indem man jedes x durch -x ersetzt, und vereinfacht.",
        "Gilt f(-x) = f(x), ist der Graph achsensymmetrisch zur y-Achse.",
        "Gilt f(-x) = -f(x), ist der Graph punktsymmetrisch zum Ursprung.",
        "Trifft keine der beiden Bedingungen zu, liegt keine Symmetrie zum Koordinatensystem vor."
      ],
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-e2",
      "frage": "Begruenden Sie, warum man bei einer ganzrationalen Funktion die Symmetrie zum Koordinatensystem oft schon an den Exponenten ablesen kann.",
      "erwartungsbild": [
        "Treten ausschliesslich gerade Exponenten auf (inklusive der Konstanten als x^0), so ist der Graph achsensymmetrisch zur y-Achse.",
        "Treten ausschliesslich ungerade Exponenten auf, so ist der Graph punktsymmetrisch zum Ursprung.",
        "Beim Einsetzen von -x bleiben Terme mit geradem Exponenten unveraendert, waehrend Terme mit ungeradem Exponenten das Vorzeichen wechseln.",
        "Mischen sich gerade und ungerade Exponenten, liegt in der Regel keine Symmetrie zum Koordinatensystem vor."
      ],
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-e3",
      "frage": "Ein Mitschueler behauptet: 'Die Funktion f(x) = x^3 + 2 ist punktsymmetrisch zum Ursprung, weil x^3 ein ungerader Exponent ist.' Nehmen Sie Stellung.",
      "erwartungsbild": [
        "Die Aussage ist falsch; der konstante Summand 2 stoert die Punktsymmetrie.",
        "Rechnung: f(-x) = -x^3 + 2, das ist weder f(x) = x^3 + 2 noch -f(x) = -x^3 - 2.",
        "Die Konstante 2 entspricht x^0, also einem geraden Exponenten, weshalb gerade und ungerade Anteile gemischt sind.",
        "Der Graph ist daher nicht symmetrisch zum Koordinatensystem (er entspricht einer um 2 nach oben verschobenen, ursprungssymmetrischen Funktion)."
      ],
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-symmetrie-e4",
      "frage": "Erlaeutern Sie, welchen praktischen Nutzen das Wissen ueber die Symmetrie eines Funktionsgraphen bei der Kurvendiskussion oder beim Skizzieren hat.",
      "erwartungsbild": [
        "Bei Achsensymmetrie genuegt es, den Verlauf fuer x >= 0 zu untersuchen und an der y-Achse zu spiegeln.",
        "Bei Punktsymmetrie zum Ursprung genuegt eine Haelfte, die am Ursprung gedreht (punktgespiegelt) wird.",
        "Symmetrieeigenschaften uebertragen sich auf Nullstellen und Extrempunkte (z. B. liegen Extrempunkte spiegelbildlich bzw. punktsymmetrisch).",
        "Das reduziert den Rechenaufwand und hilft, Fehler beim Skizzieren des Graphen zu vermeiden."
      ],
      "thema": "ana-symmetrie"
    },
    {
      "id": "ana-nullstellen-e1",
      "frage": "Begruenden Sie ohne Rechnung anhand des Graphen, dass die Funktion \\( f(x) = x^3 + x + 2 \\) genau eine Nullstelle hat.",
      "erwartungsbild": [
        "Nullstellen sind die Schnittstellen des Graphen mit der x-Achse; gesucht ist die Anzahl dieser Schnittpunkte.",
        "Wegen \\( f'(x) = 3x^2 + 1 > 0 \\) fuer alle x ist f streng monoton steigend; der Graph faellt nirgends.",
        "Ein streng monoton steigender Graph schneidet die x-Achse hoechstens einmal.",
        "Als Funktion dritten (ungeraden) Grades laeuft der Graph von \\( -\\infty \\) nach \\( +\\infty \\), wechselt also das Vorzeichen und muss die x-Achse mindestens einmal schneiden.",
        "Aus hoechstens einmal und mindestens einmal folgt: genau eine Nullstelle."
      ],
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-e2",
      "frage": "Erlaeutern Sie, wie man die Anzahl der Nullstellen einer ganzrationalen Funktion mithilfe ihres Grades nach oben abschaetzen kann, und nennen Sie den Zusammenhang zum Graphen.",
      "erwartungsbild": [
        "Eine ganzrationale Funktion vom Grad n hat hoechstens n reelle Nullstellen.",
        "Jede reelle Nullstelle entspricht einem Schnittpunkt (oder Beruehrpunkt) des Graphen mit der x-Achse.",
        "Es koennen weniger Nullstellen sein, z. B. wenn quadratische Faktoren keine reelle Loesung haben oder Nullstellen zusammenfallen (mehrfache Nullstelle).",
        "Beispiel: eine quadratische Funktion hat hoechstens zwei, eine kubische hoechstens drei Nullstellen."
      ],
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-e3",
      "frage": "Beschreiben Sie, woran man im Graphen einer Funktion eine doppelte (zweifache) Nullstelle erkennt, und was das fuer den Funktionsterm bedeutet.",
      "erwartungsbild": [
        "Bei einer doppelten Nullstelle beruehrt der Graph die x-Achse, ohne sie zu schneiden (kein Vorzeichenwechsel von f).",
        "Im Funktionsterm steht der zugehoerige Linearfaktor in zweiter Potenz, z. B. \\( (x - a)^2 \\).",
        "An dieser Stelle ist sowohl \\( f(a) = 0 \\) als auch \\( f'(a) = 0 \\) (waagerechte Tangente, Extrempunkt auf der x-Achse).",
        "Im Gegensatz dazu schneidet der Graph bei einer einfachen Nullstelle die x-Achse mit Vorzeichenwechsel."
      ],
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-nullstellen-e4",
      "frage": "Begruenden Sie ohne Rechnung anhand des Graphen, dass die Funktion \\( f(x) = x^2 + 3 \\) keine Nullstelle besitzt.",
      "erwartungsbild": [
        "Der Graph ist eine nach oben geoeffnete Parabel mit Scheitelpunkt bei \\( (0 \\mid 3) \\).",
        "Der tiefste Punkt liegt bei \\( y = 3 \\), also vollstaendig oberhalb der x-Achse.",
        "Da \\( f(x) \\ge 3 > 0 \\) fuer alle x gilt, schneidet der Graph die x-Achse nie.",
        "Ohne Schnittpunkt mit der x-Achse gibt es keine Nullstelle."
      ],
      "thema": "ana-nullstellen"
    },
    {
      "id": "ana-extrema-e1",
      "frage": "Begruenden Sie ohne weitere Rechnung, dass eine ganzrationale Funktion vom Grad 3 mit einem Hochpunkt und einem davon verschiedenen Tiefpunkt mindestens einen Wendepunkt zwischen diesen beiden Extrempunkten besitzen muss.",
      "erwartungsbild": [
        "An einem Hochpunkt ist die Kurve rechtsgekruemmt (\\( f'' < 0 \\)), an einem Tiefpunkt linksgekruemmt (\\( f'' > 0 \\)).",
        "Das Kruemmungsverhalten wechselt also zwischen den beiden Extrempunkten von rechts- nach linksgekruemmt.",
        "f'' ist als Ableitung einer ganzrationalen Funktion stetig; wechselt f'' das Vorzeichen, so muss es dazwischen eine Nullstelle mit Vorzeichenwechsel geben.",
        "Eine Vorzeichenwechselstelle von f'' ist genau eine Wendestelle, daher liegt zwischen Hoch- und Tiefpunkt ein Wendepunkt."
      ],
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-e2",
      "frage": "Erlaeutern Sie den Unterschied zwischen der notwendigen und der hinreichenden Bedingung bei der Bestimmung lokaler Extremstellen.",
      "erwartungsbild": [
        "Notwendige Bedingung: An einer lokalen Extremstelle muss \\( f'(x_0) = 0 \\) gelten (waagerechte Tangente); sie liefert nur Kandidaten.",
        "Die notwendige Bedingung allein reicht nicht aus, da auch Sattelpunkte \\( f'(x_0) = 0 \\) erfuellen.",
        "Hinreichende Bedingung: zusaetzlich \\( f''(x_0) \\neq 0 \\) (mit \\( f''(x_0) > 0 \\) Tiefpunkt, \\( f''(x_0) < 0 \\) Hochpunkt) oder ein Vorzeichenwechsel von f' bei \\( x_0 \\).",
        "Erst die hinreichende Bedingung sichert, dass tatsaechlich ein Extrempunkt vorliegt, und legt zugleich dessen Art fest."
      ],
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-e3",
      "frage": "Begruenden Sie ohne weitere Rechnung, warum aus \\( f''(x_0) = 0 \\) allein noch nicht folgt, dass an der Stelle \\( x_0 \\) ein Wendepunkt vorliegt.",
      "erwartungsbild": [
        "\\( f''(x_0) = 0 \\) ist nur die notwendige Bedingung fuer eine Wendestelle.",
        "Ein Wendepunkt liegt nur dann vor, wenn f'' an der Stelle das Vorzeichen wechselt (Kruemmungswechsel).",
        "Hinreichend ist z. B. \\( f'''(x_0) \\neq 0 \\); ist auch \\( f'''(x_0) = 0 \\), muss das Vorzeichenverhalten von f'' gesondert untersucht werden.",
        "Gegenbeispiel-Idee: Bei \\( f(x) = x^4 \\) ist \\( f''(0) = 0 \\), aber f'' wechselt das Vorzeichen nicht, es liegt ein Tiefpunkt und kein Wendepunkt vor."
      ],
      "thema": "ana-extrema"
    },
    {
      "id": "ana-extrema-e4",
      "frage": "Eine ganzrationale Funktion vierten Grades hat zwei Tiefpunkte und einen dazwischenliegenden Hochpunkt. Begruenden Sie, wie viele Wendepunkte die Funktion mindestens haben muss, ohne zu rechnen.",
      "erwartungsbild": [
        "Zwischen jedem Tiefpunkt und dem benachbarten Hochpunkt wechselt das Kruemmungsverhalten (von links- zu rechtsgekruemmt bzw. umgekehrt).",
        "Jeder solche Kruemmungswechsel erzwingt eine Vorzeichenwechselstelle von f'', also einen Wendepunkt.",
        "Bei der Anordnung Tiefpunkt - Hochpunkt - Tiefpunkt gibt es zwei solche Uebergaenge, also mindestens zwei Wendepunkte.",
        "Das passt zum Grad 4: f'' ist vom Grad 2 und kann hoechstens zwei Nullstellen haben, somit sind es genau zwei Wendepunkte."
      ],
      "thema": "ana-extrema"
    },
    {
      "id": "ana-ableitung-graph-e1",
      "frage": "Schliessen Sie aus dem Verlauf von \\(f\\) auf den Verlauf von \\(f'\\): Erlaeutern Sie allgemein, wie man am Graphen von \\(f\\) das Vorzeichen und die Nullstellen von \\(f'\\) ablesen kann.",
      "erwartungsbild": [
        "Dort, wo \\(f\\) streng monoton steigt, ist \\(f'(x)>0\\) (Graph von \\(f'\\) oberhalb der x-Achse).",
        "Dort, wo \\(f\\) streng monoton faellt, ist \\(f'(x)<0\\) (Graph von \\(f'\\) unterhalb der x-Achse).",
        "An Stellen mit waagerechter Tangente (Extrem- und Sattelstellen von \\(f\\)) hat \\(f'\\) eine Nullstelle.",
        "Die Steigung des Graphen von \\(f\\) an einer Stelle ist gleich dem Funktionswert von \\(f'\\) an dieser Stelle."
      ],
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-e2",
      "frage": "Begruenden Sie ohne Rechnung, warum die Ableitung \\(f'\\) an jeder Extremstelle von \\(f\\) eine Nullstelle mit Vorzeichenwechsel besitzt.",
      "erwartungsbild": [
        "An einer Extremstelle hat der Graph von \\(f\\) eine waagerechte Tangente, also Steigung 0, somit \\(f'(x)=0\\).",
        "Beim Hochpunkt geht \\(f\\) von Steigen zu Fallen ueber, also wechselt \\(f'\\) von positiv zu negativ (Vorzeichenwechsel + nach -).",
        "Beim Tiefpunkt geht \\(f\\) von Fallen zu Steigen ueber, also wechselt \\(f'\\) von negativ zu positiv (Vorzeichenwechsel - nach +).",
        "Der Vorzeichenwechsel von \\(f'\\) ist gerade das Kennzeichen einer Extremstelle und unterscheidet sie vom Sattelpunkt."
      ],
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-e3",
      "frage": "Erlaeutern Sie, wie sich ein Sattelpunkt von \\(f\\) im Graphen von \\(f'\\) zeigt und worin der Unterschied zu einer Extremstelle besteht.",
      "erwartungsbild": [
        "Auch am Sattelpunkt hat \\(f\\) eine waagerechte Tangente, daher gilt dort \\(f'(x)=0\\) (Nullstelle von \\(f'\\)).",
        "Im Gegensatz zur Extremstelle findet bei \\(f'\\) am Sattelpunkt KEIN Vorzeichenwechsel statt.",
        "Der Graph von \\(f'\\) beruehrt dort die x-Achse, bleibt aber auf beiden Seiten gleich (z. B. beidseitig positiv oder beidseitig negativ).",
        "Anschaulich: \\(f\\) steigt vor und nach dem Sattelpunkt (bzw. faellt vor und nach), ohne die Monotonierichtung zu aendern."
      ],
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-ableitung-graph-e4",
      "frage": "Der Graph von \\(f\\) ist gegeben und besitzt einen Hochpunkt bei \\(x=-1\\) und einen Tiefpunkt bei \\(x=2\\). Beschreiben Sie, wie der Graph von \\(f'\\) prinzipiell verlaeuft.",
      "erwartungsbild": [
        "\\(f'\\) hat Nullstellen bei \\(x=-1\\) und \\(x=2\\) (waagerechte Tangenten an den Extremstellen).",
        "Links von \\(x=-1\\) steigt \\(f\\), also ist \\(f'>0\\) (Graph oberhalb der x-Achse).",
        "Zwischen \\(x=-1\\) und \\(x=2\\) faellt \\(f\\), also ist \\(f'<0\\) (Graph unterhalb der x-Achse).",
        "Rechts von \\(x=2\\) steigt \\(f\\) wieder, also ist \\(f'>0\\).",
        "Da \\(f\\) ganzrational dritten Grades mit positivem Leitkoeffizienten ist, ist \\(f'\\) eine nach oben geoeffnete Parabel mit den genannten Nullstellen."
      ],
      "thema": "ana-ableitung-graph"
    },
    {
      "id": "ana-integral-e1",
      "frage": "Beschreiben Sie die Vorgehensweise zur Berechnung der Flaeche zwischen den Graphen einer Funktion \\(f\\) und ihrer Ableitung \\(f'\\).",
      "erwartungsbild": [
        "Zunaechst die Ableitung \\(f'\\) bestimmen.",
        "Schnittstellen der beiden Graphen ermitteln, indem man \\(f(x)=f'(x)\\) loest; diese liefern die Integrationsgrenzen.",
        "Mit einem Probepunkt feststellen, welcher Graph im betrachteten Intervall oben liegt.",
        "Das bestimmte Integral ueber die Differenz 'obere minus untere' zwischen den Schnittstellen berechnen; das Ergebnis ist der Flaecheninhalt."
      ],
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-e2",
      "frage": "Erlaeutern Sie den Unterschied zwischen dem Wert eines bestimmten Integrals \\(\\int_a^b f(x)\\,dx\\) und dem Flaecheninhalt, den der Graph von \\(f\\) mit der x-Achse einschliesst.",
      "erwartungsbild": [
        "Das bestimmte Integral kann negativ oder null werden, je nachdem ob und wie der Graph unter der x-Achse verlaeuft.",
        "Ein Flaecheninhalt ist dagegen stets nichtnegativ.",
        "Liegt der Graph teilweise unter der x-Achse, liefern diese Abschnitte negative Integralbeitraege, die sich mit positiven Beitraegen wegheben koennen.",
        "Fuer den Flaecheninhalt muss man die Nullstellen bestimmen, abschnittsweise integrieren und die Betraege der Teilintegrale addieren."
      ],
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-e3",
      "frage": "Begruenden Sie, warum man bei der Flaeche zwischen zwei Graphen abschnittsweise integrieren muss, wenn sich die Graphen innerhalb des Intervalls mehrfach schneiden.",
      "erwartungsbild": [
        "Zwischen zwei aufeinanderfolgenden Schnittstellen kann der jeweils obere und untere Graph wechseln.",
        "Die Differenzfunktion 'obere minus untere' wechselt an einer solchen Schnittstelle ihr Vorzeichen.",
        "Ein einziges Integral ueber das ganze Intervall wuerde sich teilweise wegheben und nicht den Flaecheninhalt liefern.",
        "Daher zerlegt man das Intervall an den Schnittstellen, integriert jeden Abschnitt einzeln und addiert die Betraege der Teilergebnisse."
      ],
      "thema": "ana-integral"
    },
    {
      "id": "ana-integral-e4",
      "frage": "Beschreiben Sie, wie man die Integrationsgrenzen bestimmt, wenn der Flaecheninhalt zwischen zwei Funktionsgraphen ohne weitere Angaben berechnet werden soll.",
      "erwartungsbild": [
        "Die Grenzen ergeben sich aus den Schnittstellen der beiden Graphen.",
        "Man setzt die Funktionsterme gleich, also \\(f(x)=g(x)\\), und loest die entstehende Gleichung.",
        "Die kleinste und groesste Loesung (bzw. aufeinanderfolgende Loesungen) bilden die untere und obere Grenze.",
        "Bei mehr als zwei Schnittstellen entstehen mehrere Teilintervalle, ueber die jeweils einzeln integriert wird."
      ],
      "thema": "ana-integral"
    },
    {
      "id": "geo-vektoren-e1",
      "frage": "Erlaeutern Sie die Bedeutung des Stuetzvektors und des Spann- bzw. Richtungsvektors in der Parameterform einer Geraden \\( \\vec{x} = \\vec{p} + t\\cdot\\vec{u} \\).",
      "erwartungsbild": [
        "Der Stuetzvektor \\( \\vec{p} \\) ist der Ortsvektor eines festen Punktes, der auf der Geraden liegt; er 'verankert' die Gerade im Raum.",
        "Der Richtungs-/Spannvektor \\( \\vec{u} \\) gibt die Richtung an, in die die Gerade verlaeuft; jedes Vielfache \\( t\\cdot\\vec{u} \\) bewegt einen entlang der Geraden.",
        "Durch Variation des Parameters \\( t \\in \\mathbb{R} \\) erhaelt man alle Punkte der Geraden.",
        "Der Stuetzvektor ist nicht eindeutig (jeder Punkt der Geraden ist moeglich), der Richtungsvektor nur bis auf ein skalares Vielfaches eindeutig."
      ],
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-e2",
      "frage": "Begruenden Sie, warum der Verbindungsvektor \\( \\vec{AB} \\) durch \\( \\vec{OB} - \\vec{OA} \\) berechnet wird und nicht durch \\( \\vec{OA} - \\vec{OB} \\).",
      "erwartungsbild": [
        "Es gilt die Vektorkette \\( \\vec{OA} + \\vec{AB} = \\vec{OB} \\) (vom Ursprung ueber A nach B).",
        "Stellt man nach \\( \\vec{AB} \\) um, erhaelt man \\( \\vec{AB} = \\vec{OB} - \\vec{OA} \\), also 'Spitze minus Fuss'.",
        "Der Vektor \\( \\vec{OA} - \\vec{OB} = \\vec{BA} \\) zeigt in die entgegengesetzte Richtung (von B nach A).",
        "\\( \\vec{AB} \\) und \\( \\vec{BA} \\) sind Gegenvektoren mit gleichem Betrag, aber entgegengesetzter Orientierung."
      ],
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-e3",
      "frage": "Erklaeren Sie den Unterschied zwischen einem Ortsvektor und einem Verbindungsvektor zweier Punkte.",
      "erwartungsbild": [
        "Ein Ortsvektor \\( \\vec{OA} \\) hat seinen Fusspunkt stets im Ursprung \\( O \\) und seine Spitze im Punkt \\( A \\); seine Koordinaten stimmen mit den Punktkoordinaten ueberein.",
        "Ein Verbindungsvektor \\( \\vec{AB} \\) verbindet zwei beliebige Punkte und ist frei verschiebbar (kein fester Fusspunkt im Ursprung).",
        "Der Ortsvektor legt eine Position fest, der Verbindungsvektor beschreibt eine Verschiebung/Richtung von A nach B.",
        "Beide werden mit denselben Rechenregeln behandelt, aber nur der Ortsvektor entspricht direkt den Koordinaten eines Punktes."
      ],
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-vektoren-e4",
      "frage": "Beschreiben Sie, was der Betrag eines Vektors geometrisch bedeutet, und begruenden Sie ohne Rechnung, warum der Betrag nie negativ sein kann.",
      "erwartungsbild": [
        "Der Betrag \\( |\\vec{v}| \\) ist die Laenge des Vektorpfeils; beim Verbindungsvektor \\( \\vec{AB} \\) ist es der Abstand der Punkte A und B.",
        "Er folgt aus dem Satz des Pythagoras im Raum: \\( |\\vec{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2} \\).",
        "Unter der Wurzel stehen Quadrate, die nie negativ sind; die (Haupt-)Quadratwurzel liefert stets einen nicht-negativen Wert.",
        "Eine Laenge bzw. ein Abstand ist eine nicht-negative Groesse; der Betrag ist genau dann \\( 0 \\), wenn es sich um den Nullvektor handelt."
      ],
      "thema": "geo-vektoren"
    },
    {
      "id": "geo-ebene-e1",
      "frage": "Beschreiben Sie die Vorgehensweise beim Erstellen der Koordinatengleichung einer Ebene, wenn diese in Parameterform gegeben ist.",
      "erwartungsbild": [
        "Aus der Parameterform die beiden Spannvektoren \\(\\vec{u}\\), \\(\\vec{v}\\) und den Stuetzpunkt \\(A\\) ablesen.",
        "Normalenvektor \\(\\vec{n} = \\vec{u}\\times\\vec{v}\\) ueber das Kreuzprodukt der Spannvektoren bestimmen.",
        "Mit den Komponenten von \\(\\vec{n}\\) die linke Seite \\(n_1 x + n_2 y + n_3 z\\) der Gleichung aufstellen.",
        "Den Stuetzpunkt einsetzen, um \\(d = \\vec{n}\\cdot\\vec{A}\\) zu erhalten, und die fertige Gleichung \\(n_1 x + n_2 y + n_3 z = d\\) angeben."
      ],
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-e2",
      "frage": "Erlaeutern Sie, warum das Kreuzprodukt der beiden Spannvektoren einen Normalenvektor der Ebene liefert.",
      "erwartungsbild": [
        "Das Kreuzprodukt \\(\\vec{u}\\times\\vec{v}\\) steht per Konstruktion senkrecht auf beiden Faktoren.",
        "Die Spannvektoren liegen in der Ebene und geben deren Richtungen vor.",
        "Ein Vektor, der auf beiden Richtungsvektoren senkrecht steht, steht senkrecht auf der gesamten Ebene und ist damit ein Normalenvektor.",
        "Voraussetzung: \\(\\vec{u}\\) und \\(\\vec{v}\\) sind nicht parallel, sonst spannen sie keine Ebene auf."
      ],
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-e3",
      "frage": "Eine Ebene ist durch die Koordinatengleichung \\(3x - 2y + z = 5\\) gegeben. Erklaeren Sie, wie man den Normalenvektor direkt ablesen kann und wie man mit einer Punktprobe prueft, ob ein Punkt in der Ebene liegt.",
      "erwartungsbild": [
        "Die Koeffizienten vor \\(x\\), \\(y\\) und \\(z\\) bilden direkt den Normalenvektor \\(\\vec{n} = \\begin{pmatrix} 3 \\\\ -2 \\\\ 1 \\end{pmatrix}\\).",
        "Fuer die Punktprobe die Koordinaten des Punktes in die linke Seite \\(3x - 2y + z\\) einsetzen.",
        "Stimmt der berechnete Wert mit der rechten Seite \\(5\\) ueberein, liegt der Punkt in der Ebene, andernfalls nicht."
      ],
      "thema": "geo-ebene"
    },
    {
      "id": "geo-ebene-e4",
      "frage": "Begruenden Sie ohne Rechnung, dass es zu einer Ebene unendlich viele moegliche Normalenvektoren gibt und welche Eigenschaft alle diese Vektoren gemeinsam haben.",
      "erwartungsbild": [
        "Jedes Vielfache \\(k\\cdot\\vec{n}\\) (mit \\(k \\neq 0\\)) eines Normalenvektors ist wieder ein Normalenvektor.",
        "Alle Normalenvektoren einer Ebene sind zueinander parallel (kollinear), zeigen also in dieselbe oder die entgegengesetzte Richtung.",
        "Sie unterscheiden sich nur in Laenge und Orientierung, nicht in der Richtung senkrecht zur Ebene.",
        "Daher legt die Ebene die Richtung des Normalenvektors eindeutig fest, nicht aber seine konkrete Laenge."
      ],
      "thema": "geo-ebene"
    },
    {
      "id": "geo-lage-abstand-e1",
      "frage": "Beschreiben Sie die Vorgehensweise, mit der Sie den Abstand eines Punktes von einer Ebene bestimmen, wenn die Ebene in Koordinatenform mit dem Normalenvektor \\(\\vec{n}\\) vorliegt.",
      "erwartungsbild": [
        "Ebene in der Form \\(a x + b y + c z = d\\) bereitstellen und Normalenvektor \\(\\vec{n}=\\begin{pmatrix} a \\\\ b \\\\ c \\end{pmatrix}\\) ablesen.",
        "Punktkoordinaten in den Term \\(a x + b y + c z - d\\) einsetzen und den Betrag des Ergebnisses bilden.",
        "Den Betrag des Normalenvektors \\(|\\vec{n}|=\\sqrt{a^2+b^2+c^2}\\) berechnen.",
        "Den eingesetzten Wert durch \\(|\\vec{n}|\\) teilen; das Ergebnis ist der gesuchte Abstand \\(d(P,E)=\\dfrac{|a p_1+b p_2+c p_3-d|}{\\sqrt{a^2+b^2+c^2}}\\)."
      ],
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-e2",
      "frage": "Erlaeutern Sie, wie man durch Einsetzen entscheidet, ob ein Punkt in einer Ebene liegt, und was es geometrisch bedeutet, wenn das Einsetzen die Ebenengleichung nicht erfuellt.",
      "erwartungsbild": [
        "Punktkoordinaten in die linke Seite der Ebenengleichung einsetzen und mit der rechten Seite vergleichen.",
        "Stimmen beide Seiten ueberein (Gleichung erfuellt), liegt der Punkt in der Ebene.",
        "Sind die Seiten verschieden, liegt der Punkt nicht in der Ebene; er hat dann einen positiven Abstand zur Ebene.",
        "Geometrisch entspricht der Abstand der Laenge des Lotes vom Punkt auf die Ebene (kuerzeste Entfernung)."
      ],
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-e3",
      "frage": "Begruenden Sie, warum man beim Abstand Punkt-Ebene den eingesetzten Wert durch den Betrag des Normalenvektors teilen muss.",
      "erwartungsbild": [
        "Der Term \\(a p_1 + b p_2 + c p_3 - d\\) allein haengt von der Skalierung des Normalenvektors ab und ist daher noch kein Abstand.",
        "Erst die Division durch \\(|\\vec{n}|\\) normiert den Normalenvektor auf Laenge 1.",
        "Dadurch misst man die tatsaechliche Lotlaenge in der gewuenschten Einheit, unabhaengig davon, wie die Ebenengleichung skaliert wurde.",
        "Der Betrag (Absolutbetrag) stellt sicher, dass der Abstand nicht negativ ist."
      ],
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-lage-abstand-e4",
      "frage": "Erklaeren Sie, wie Sie den Abstand zweier Punkte im Raum berechnen und wie dieser mit dem Verbindungsvektor zusammenhaengt.",
      "erwartungsbild": [
        "Verbindungsvektor \\(\\overrightarrow{PQ}=\\begin{pmatrix} q_1-p_1 \\\\ q_2-p_2 \\\\ q_3-p_3 \\end{pmatrix}\\) durch Differenz der Koordinaten bilden.",
        "Der Abstand ist der Betrag (die Laenge) dieses Vektors: \\(d(P,Q)=|\\overrightarrow{PQ}|\\).",
        "Berechnung ueber \\(d=\\sqrt{(q_1-p_1)^2+(q_2-p_2)^2+(q_3-p_3)^2}\\) (Satz des Pythagoras im Raum).",
        "Das Ergebnis ist stets nicht-negativ und unabhaengig von der Reihenfolge der Punkte."
      ],
      "thema": "geo-lage-abstand"
    },
    {
      "id": "geo-spiegelung-e1",
      "frage": "Beschreiben Sie die Vorgehensweise zur Bestimmung des Spiegelpunktes P' eines Punktes P an einer in Koordinatenform gegebenen Ebene E.",
      "erwartungsbild": [
        "Normalenvektor \\(\\vec n\\) aus der Koordinatenform der Ebene ablesen; er gibt die Richtung der Lotgeraden an, da das Lot senkrecht auf der Ebene steht.",
        "Lotgerade durch P aufstellen: \\(\\vec X = \\overrightarrow{OP} + t\\,\\vec n\\).",
        "Geradengleichung in die Ebenengleichung einsetzen und nach dem Parameter \\(t\\) aufloesen.",
        "Parameter \\(t\\) in die Geradengleichung einsetzen und so den Durchstosspunkt (Lotfusspunkt) \\(D\\) berechnen.",
        "Spiegelpunkt mit \\(\\overrightarrow{OP'} = \\overrightarrow{OP} + 2\\,\\overrightarrow{PD}\\) bzw. \\(\\overrightarrow{OP'} = 2\\,\\overrightarrow{OD} - \\overrightarrow{OP}\\) bestimmen."
      ],
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-e2",
      "frage": "Erlaeutern Sie, warum der Normalenvektor der Ebene als Richtungsvektor der Lotgeraden verwendet wird.",
      "erwartungsbild": [
        "Der Spiegelpunkt liegt so, dass die Verbindungsstrecke \\(PP'\\) senkrecht (orthogonal) zur Ebene verlaeuft.",
        "Der Normalenvektor \\(\\vec n\\) steht per Definition senkrecht auf der Ebene.",
        "Eine Gerade in Richtung \\(\\vec n\\) durch P trifft die Ebene daher im rechten Winkel; ihr Schnittpunkt ist der Lotfusspunkt D.",
        "Nur entlang dieser Lotrichtung sind P, D und P' kollinear und D ist der naechstgelegene Ebenenpunkt zu P."
      ],
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-e3",
      "frage": "Begruenden Sie ohne Rechnung, warum der Durchstosspunkt D stets der Mittelpunkt der Strecke von P und seinem Spiegelpunkt P' ist und welche Beziehung daraus fuer die Abstaende folgt.",
      "erwartungsbild": [
        "Bei einer Spiegelung an einer Ebene wird P auf P' so abgebildet, dass die Ebene die Strecke \\(PP'\\) senkrecht halbiert.",
        "Daher ist D der Mittelpunkt von P und P', es gilt \\(\\overrightarrow{OD} = \\tfrac{1}{2}(\\overrightarrow{OP} + \\overrightarrow{OP'})\\).",
        "Folglich ist \\(\\overrightarrow{PD} = \\overrightarrow{DP'}\\) und \\(\\overrightarrow{PP'} = 2\\,\\overrightarrow{PD}\\).",
        "Der Abstand von P zur Ebene ist gleich dem Abstand von P' zur Ebene; der Abstand \\(|PP'|\\) ist doppelt so gross wie der Abstand von P zur Ebene."
      ],
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-spiegelung-e4",
      "frage": "Ein Mitschueler bestimmt nach der Berechnung des Lotfusspunktes D den Spiegelpunkt faelschlich ueber \\(\\overrightarrow{OP'} = \\overrightarrow{OP} + \\overrightarrow{PD}\\). Erlaeutern Sie den Fehler und geben Sie die korrekte Formel an.",
      "erwartungsbild": [
        "\\(\\overrightarrow{OP} + \\overrightarrow{PD}\\) liefert gerade den Lotfusspunkt D selbst, nicht den Spiegelpunkt.",
        "Der Spiegelpunkt liegt von D aus noch einmal um \\(\\overrightarrow{PD}\\) weiter, also auf der gegenueberliegenden Seite der Ebene.",
        "Korrekt ist \\(\\overrightarrow{OP'} = \\overrightarrow{OP} + 2\\,\\overrightarrow{PD}\\) bzw. \\(\\overrightarrow{OP'} = 2\\,\\overrightarrow{OD} - \\overrightarrow{OP}\\).",
        "Der Faktor 2 ergibt sich daraus, dass D der Mittelpunkt der Strecke \\(PP'\\) ist."
      ],
      "thema": "geo-spiegelung"
    },
    {
      "id": "geo-dreieck-e1",
      "frage": "Erlaeutern Sie, warum es beim Ergaenzen eines Dreiecks ABC zu einem Parallelogramm im Allgemeinen drei verschiedene moegliche Punkte D gibt.",
      "erwartungsbild": [
        "Drei gegebene Punkte legen ein Parallelogramm noch nicht eindeutig fest - es ist offen, welche zwei der drei Strecken als gegenueberliegende (parallele) Seiten dienen sollen.",
        "Je nachdem, welcher der Punkte A, B oder C dem neuen Punkt D gegenueberliegt, ergibt sich eine andere Lage von D.",
        "Die drei Moeglichkeiten lassen sich als \\( D=A+C-B \\), \\( D=A+B-C \\) und \\( D=B+C-A \\) schreiben (Spiegelung eines Eckpunktes am Mittelpunkt der gegenueberliegenden Seite).",
        "Jeder dieser Punkte ergaenzt das Dreieck zu einem gueltigen Parallelogramm, nur die Reihenfolge/Benennung der Eckpunkte unterscheidet sich."
      ],
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-e2",
      "frage": "Begruenden Sie ohne erneute Rechnung, weshalb der Nachweis gleicher Seitenbetraege ausreicht, um ein Dreieck als gleichschenklig zu bezeichnen.",
      "erwartungsbild": [
        "Ein Dreieck heisst gleichschenklig, wenn (mindestens) zwei Seiten gleich lang sind - genau diese zwei gleichen Seiten nennt man Schenkel.",
        "Die Seitenlaenge entspricht dem Betrag des jeweiligen Verbindungsvektors; sind zwei Betraege gleich, sind die Seiten per Definition gleich lang.",
        "Es genuegt der Vergleich der drei Betraege; Winkel muessen dafuer nicht zusaetzlich berechnet werden.",
        "Sind sogar alle drei Seiten gleich lang, ist das Dreieck gleichseitig (ein Sonderfall des gleichschenkligen Dreiecks)."
      ],
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-e3",
      "frage": "Erklaeren Sie, warum der Flaecheninhalt eines Dreiecks im Raum ueber \\( A=\\tfrac{1}{2}\\,|\\overrightarrow{AB}\\times\\overrightarrow{AC}| \\) berechnet werden kann.",
      "erwartungsbild": [
        "Der Betrag des Kreuzprodukts \\( |\\overrightarrow{AB}\\times\\overrightarrow{AC}| \\) gibt den Flaecheninhalt des von beiden Vektoren aufgespannten Parallelogramms an.",
        "Das Dreieck ABC ist genau die Haelfte dieses Parallelogramms, daher der Faktor \\( \\tfrac{1}{2} \\).",
        "Das Verfahren funktioniert direkt im Raum (R^3), ohne dass Hoehe oder Winkel bestimmt werden muessen.",
        "Der Kreuzproduktvektor steht senkrecht auf der Dreiecksebene; nur sein Betrag (die Laenge) geht in die Flaeche ein."
      ],
      "thema": "geo-dreieck"
    },
    {
      "id": "geo-dreieck-e4",
      "frage": "Ein Kreis hat als Durchmesser die Strecke \\( \\overline{AB} \\). Beschreiben Sie, wie Sie Mittelpunkt und Radius dieses Kreises bestimmen, und begruenden Sie den Zusammenhang.",
      "erwartungsbild": [
        "Der Mittelpunkt des Kreises ist der Mittelpunkt der Strecke \\( \\overline{AB} \\), berechnet ueber \\( M=\\tfrac{1}{2}(A+B) \\).",
        "Der Radius ist die Haelfte der Durchmesserlaenge: \\( r=\\tfrac{1}{2}\\,|\\overrightarrow{AB}| \\).",
        "Begruendung: Der Durchmesser ist die laengste Sehne und verlaeuft durch den Mittelpunkt; A und B sind Endpunkte des Durchmessers und damit gleich weit (um r) von M entfernt.",
        "Damit liegen A und B beide auf dem Kreis und M ist der gemeinsame Abstandspunkt."
      ],
      "thema": "geo-dreieck"
    }
  ],
  "simulator": [
    {
      "id": "sim-ana-1",
      "gebiet": "analysis",
      "teilaufgaben": [
        {
          "frage": "Gegeben ist die Funktion \\( f \\) mit \\( f(x) = \\tfrac{1}{4}x^3 - 3x \\). Begruenden Sie ohne weitere Rechnung, dass der Graph von \\( f \\) punktsymmetrisch zum Ursprung ist, und nennen Sie alle Nullstellen von \\( f \\). Erlaeutern Sie, wie die Symmetrie die Lage der Nullstellen erklaert.",
          "erwartungsbild": [
            "\\( f \\) enthaelt nur ungerade Potenzen von \\( x \\) (Grad 3 und Grad 1, kein konstantes und kein quadratisches Glied); daher ist \\( f \\) eine ungerade Funktion.",
            "Nachweis der Punktsymmetrie zum Ursprung: \\( f(-x) = \\tfrac{1}{4}(-x)^3 - 3(-x) = -\\tfrac{1}{4}x^3 + 3x = -f(x) \\).",
            "Nullstellen ueber \\( \\tfrac{1}{4}x^3 - 3x = 0 \\Rightarrow x\\left(\\tfrac{1}{4}x^2 - 3\\right) = 0 \\): \\( x = 0 \\), \\( x = -2\\sqrt{3} \\), \\( x = 2\\sqrt{3} \\) (etwa \\( \\pm 3{,}46 \\)).",
            "Wegen der Punktsymmetrie treten die von Null verschiedenen Nullstellen paarweise als \\( \\pm x_0 \\) auf; \\( x = 0 \\) ist als Symmetriezentrum selbst Nullstelle."
          ],
          "afb": "I/II"
        },
        {
          "frage": "Bestimmen Sie rechnerisch alle Extrempunkte sowie den Wendepunkt des Graphen von \\( f \\) mit \\( f(x) = \\tfrac{1}{4}x^3 - 3x \\) und geben Sie jeweils die Art des Punktes an.",
          "erwartungsbild": [
            "Ableitungen bilden: \\( f'(x) = \\tfrac{3}{4}x^2 - 3 \\), \\( f''(x) = \\tfrac{3}{2}x \\).",
            "Notwendige Bedingung \\( f'(x) = 0 \\): \\( \\tfrac{3}{4}x^2 = 3 \\Rightarrow x^2 = 4 \\Rightarrow x = \\pm 2 \\).",
            "Art ueber \\( f'' \\): \\( f''(-2) = -3 < 0 \\Rightarrow \\) Hochpunkt \\( H(-2 \\mid 4) \\); \\( f''(2) = 3 > 0 \\Rightarrow \\) Tiefpunkt \\( T(2 \\mid -4) \\).",
            "Wendepunkt: \\( f''(x) = 0 \\Rightarrow x = 0 \\), Vorzeichenwechsel von \\( f'' \\) vorhanden; \\( W(0 \\mid 0) \\) mit Steigung \\( f'(0) = -3 \\)."
          ],
          "afb": "II"
        },
        {
          "frage": "Beschreiben Sie, wie sich aus dem bekannten Verlauf von \\( f \\) (mit Hochpunkt bei \\( x=-2 \\), Tiefpunkt bei \\( x=2 \\) und Wendepunkt bei \\( x=0 \\)) der qualitative Verlauf des Graphen von \\( f' \\) erschliessen laesst, ohne \\( f' \\) explizit zu berechnen. Erlaeutern Sie, welche markanten Punkte und Eigenschaften der Graph von \\( f' \\) besitzt und wie Sie ihn skizzieren wuerden.",
          "erwartungsbild": [
            "Nullstellen von \\( f' \\) liegen an den Extremstellen von \\( f \\): also bei \\( x=-2 \\) und \\( x=2 \\); dort hat der \\( f' \\)-Graph Schnittpunkte mit der \\( x \\)-Achse.",
            "Vorzeichen von \\( f' \\): \\( f \\) faellt fuer \\( -2 < x < 2 \\Rightarrow f' < 0 \\) dort (Graph von \\( f' \\) unterhalb der \\( x \\)-Achse); \\( f \\) steigt fuer \\( x<-2 \\) und \\( x>2 \\Rightarrow f' > 0 \\) (oberhalb).",
            "An der Wendestelle \\( x=0 \\) von \\( f \\) hat \\( f' \\) ein Extremum (hier ein Minimum, da \\( f \\) dort am staerksten faellt); der \\( f' \\)-Graph hat dort waagerechte Tangente.",
            "Da \\( f \\) Grad 3 hat, ist \\( f' \\) eine nach oben geoeffnete Parabel (Grad 2) mit Scheitel bei \\( x=0 \\); Skizze: Parabel durch \\( (-2\\mid 0) \\) und \\( (2\\mid 0) \\), Scheitel bei \\( (0 \\mid -3) \\).",
            "Symmetrie: \\( f \\) punktsymmetrisch \\( \\Rightarrow f' \\) achsensymmetrisch zur \\( y \\)-Achse, was die symmetrische Parabel bestaetigt."
          ],
          "afb": "III"
        },
        {
          "frage": "Der Graph von \\( f \\) mit \\( f(x) = \\tfrac{1}{4}x^3 - 3x \\) und der Graph seiner Ableitung \\( f' \\) schliessen Flaechenstuecke ein. Beschreiben Sie ausfuehrlich die Vorgehensweise, mit der man den Gesamtinhalt der von beiden Graphen eingeschlossenen Flaeche berechnet. Erlaeutern Sie dabei, warum man die Flaechenstuecke einzeln betrachten muss.",
          "erwartungsbild": [
            "Schnittstellen bestimmen: \\( f(x) = f'(x) \\) ansetzen, also \\( \\tfrac{1}{4}x^3 - 3x = \\tfrac{3}{4}x^2 - 3 \\); umstellen zu \\( \\tfrac{1}{4}x^3 - \\tfrac{3}{4}x^2 - 3x + 3 = 0 \\) und die (drei) Loesungen \\( x_1 < x_2 < x_3 \\) ermitteln (naeherungsweise \\( x_1 \\approx -2{,}80 \\), \\( x_2 \\approx 0{,}87 \\), \\( x_3 \\approx 4{,}94 \\)).",
            "Differenzfunktion \\( d(x) = f(x) - f'(x) \\) bilden; die Flaeche zwischen zwei benachbarten Schnittstellen ist \\( \\left| \\int_{x_i}^{x_{i+1}} d(x)\\,dx \\right| \\).",
            "Weil es mehrere Schnittstellen gibt und \\( d(x) \\) zwischen ihnen das Vorzeichen wechselt (mal verlaeuft \\( f \\) oberhalb, mal unterhalb von \\( f' \\)), muss jedes Teilintervall einzeln integriert und der Betrag genommen werden; sonst heben sich positive und negative Teilflaechen faelschlich auf.",
            "Stammfunktion von \\( d \\) bilden, beide Teilintegrale ueber \\( [x_1,x_2] \\) und \\( [x_2,x_3] \\) berechnen, Betraege bilden und addieren.",
            "Gesamtinhalt \\( A = \\left|\\int_{x_1}^{x_2} d\\,dx\\right| + \\left|\\int_{x_2}^{x_3} d\\,dx\\right| \\) (Zahlenwert hier \\( \\approx 28{,}2 \\) Flaecheneinheiten)."
          ],
          "afb": "II/III"
        }
      ]
    },
    {
      "id": "sim-geo-1",
      "gebiet": "geometrie",
      "teilaufgaben": [
        {
          "frage": "Gegeben ist das Dreieck \\(ABC\\) mit den Eckpunkten \\(A\\begin{pmatrix} 2 \\\\ -1 \\\\ 3 \\end{pmatrix}\\), \\(B\\begin{pmatrix} 6 \\\\ 3 \\\\ 1 \\end{pmatrix}\\) und \\(C\\begin{pmatrix} 2 \\\\ 5 \\\\ 5 \\end{pmatrix}\\). Weisen Sie nach, dass das Dreieck \\(ABC\\) gleichschenklig ist, und geben Sie an, welcher Punkt die Spitze (der Scheitel zwischen den beiden gleich langen Schenkeln) ist.",
          "erwartungsbild": [
            "Seitenvektoren bilden: \\(\\vec{AB}=B-A=\\begin{pmatrix} 4 \\\\ 4 \\\\ -2 \\end{pmatrix}\\), \\(\\vec{BC}=C-B=\\begin{pmatrix} -4 \\\\ 2 \\\\ 4 \\end{pmatrix}\\), \\(\\vec{AC}=C-A=\\begin{pmatrix} 0 \\\\ 6 \\\\ 2 \\end{pmatrix}\\).",
            "Seitenlaengen ueber den Betrag bestimmen: \\(|\\vec{AB}|=\\sqrt{4^2+4^2+(-2)^2}=\\sqrt{36}=6\\) und \\(|\\vec{BC}|=\\sqrt{(-4)^2+2^2+4^2}=\\sqrt{36}=6\\).",
            "Vergleich: \\(|\\vec{AB}|=|\\vec{BC}|=6\\), waehrend \\(|\\vec{AC}|=\\sqrt{0^2+6^2+2^2}=\\sqrt{40}=2\\sqrt{10}\\approx 6{,}32\\) abweicht. Zwei Seiten sind also gleich lang.",
            "Folgerung: Das Dreieck ist gleichschenklig; die beiden Schenkel \\(AB\\) und \\(BC\\) treffen sich in \\(B\\), daher ist \\(B\\) die Spitze und \\(AC\\) die Basis."
          ],
          "afb": "I/II"
        },
        {
          "frage": "Bestimmen Sie den Flaecheninhalt des Dreiecks \\(ABC\\). Erlaeutern Sie dabei, warum sich das Kreuzprodukt zweier Kantenvektoren zur Flaechenberechnung eignet.",
          "erwartungsbild": [
            "Zwei von einem Eckpunkt ausgehende Kantenvektoren waehlen, z.B. \\(\\vec{AB}=\\begin{pmatrix} 4 \\\\ 4 \\\\ -2 \\end{pmatrix}\\) und \\(\\vec{AC}=\\begin{pmatrix} 0 \\\\ 6 \\\\ 2 \\end{pmatrix}\\).",
            "Kreuzprodukt berechnen: \\(\\vec{AB}\\times\\vec{AC}=\\begin{pmatrix} 4\\cdot 2-(-2)\\cdot 6 \\\\ (-2)\\cdot 0-4\\cdot 2 \\\\ 4\\cdot 6-4\\cdot 0 \\end{pmatrix}=\\begin{pmatrix} 20 \\\\ -8 \\\\ 24 \\end{pmatrix}\\).",
            "Begruendung: Der Betrag des Kreuzprodukts \\(|\\vec{AB}\\times\\vec{AC}|\\) ist gleich dem Flaecheninhalt des von beiden Vektoren aufgespannten Parallelogramms; das Dreieck ist die Haelfte davon.",
            "Flaeche: \\(A=\\tfrac{1}{2}\\,|\\vec{AB}\\times\\vec{AC}|=\\tfrac{1}{2}\\sqrt{20^2+(-8)^2+24^2}=\\tfrac{1}{2}\\sqrt{1040}=2\\sqrt{65}\\approx 16{,}12\\) (Flaecheneinheiten)."
          ],
          "afb": "II"
        },
        {
          "frage": "Ueber der Kante \\(AC\\) als Durchmesser wird ein Kreis (Thaleskreis) errichtet. Bestimmen Sie den Mittelpunkt \\(M\\) und den Radius \\(r\\) dieses Kreises und begruenden Sie, weshalb der Punkt \\(B\\) auf diesem Kreis liegen wuerde, falls der Innenwinkel bei \\(B\\) ein rechter Winkel waere.",
          "erwartungsbild": [
            "Der Mittelpunkt ist der Mittelpunkt der Strecke \\(AC\\): \\(M=\\tfrac{1}{2}(A+C)=\\tfrac{1}{2}\\begin{pmatrix} 2+2 \\\\ -1+5 \\\\ 3+5 \\end{pmatrix}=\\begin{pmatrix} 2 \\\\ 2 \\\\ 4 \\end{pmatrix}\\).",
            "Der Radius ist die halbe Durchmesserlaenge: \\(r=\\tfrac{1}{2}|\\vec{AC}|=\\tfrac{1}{2}\\sqrt{40}=\\sqrt{10}\\approx 3{,}16\\).",
            "Begruendung (Satz des Thales): Liegt ein Punkt auf dem Kreis ueber dem Durchmesser \\(AC\\), so ist der Winkel an diesem Punkt im Dreieck \\(AC\\)-Punkt ein rechter Winkel — und umgekehrt liegt ein Punkt mit rechtem Winkel ueber \\(AC\\) genau auf dem Thaleskreis.",
            "Pruefung fuer \\(B\\): \\(\\vec{BA}\\cdot\\vec{BC}=\\begin{pmatrix} -4 \\\\ -4 \\\\ 2 \\end{pmatrix}\\cdot\\begin{pmatrix} -4 \\\\ 2 \\\\ 4 \\end{pmatrix}=16-8+8=16\\neq 0\\); der Winkel bei \\(B\\) ist nicht rechtwinklig, also liegt \\(B\\) nicht auf dem Thaleskreis."
          ],
          "afb": "II/III"
        },
        {
          "frage": "Das Dreieck \\(ABC\\) soll durch einen vierten Punkt \\(D\\) zu einem Parallelogramm ergaenzt werden. Bestimmen Sie zwei verschiedene moegliche Punkte \\(D\\) und erlaeutern Sie, wodurch sich die unterschiedlichen Loesungen ergeben.",
          "erwartungsbild": [
            "Grundidee: In einem Parallelogramm sind gegenueberliegende Seiten durch gleiche Vektoren beschrieben; je nachdem, welche der drei vorhandenen Strecken als Diagonale dient, entstehen verschiedene vierte Punkte.",
            "Loesung 1 (Reihenfolge \\(ABCD\\), Diagonale \\(AC\\)): \\(\\vec{AB}=\\vec{DC}\\Rightarrow D=A+C-B=\\begin{pmatrix} 2+2-6 \\\\ -1+5-3 \\\\ 3+5-1 \\end{pmatrix}=\\begin{pmatrix} -2 \\\\ 1 \\\\ 7 \\end{pmatrix}\\).",
            "Loesung 2 (Diagonale \\(BC\\)): \\(D=B+C-A=\\begin{pmatrix} 6+2-2 \\\\ 3+5-(-1) \\\\ 1+5-3 \\end{pmatrix}=\\begin{pmatrix} 6 \\\\ 9 \\\\ 3 \\end{pmatrix}\\) (alternativ \\(D=A+B-C=\\begin{pmatrix} 6 \\\\ -3 \\\\ -1 \\end{pmatrix}\\) bei Diagonale \\(AB\\)).",
            "Probe fuer Loesung 1: \\(\\vec{AB}=\\begin{pmatrix} 4 \\\\ 4 \\\\ -2 \\end{pmatrix}\\) und \\(\\vec{DC}=C-D=\\begin{pmatrix} 4 \\\\ 4 \\\\ -2 \\end{pmatrix}\\) stimmen ueberein, ebenso \\(\\vec{AD}=\\vec{BC}=\\begin{pmatrix} -4 \\\\ 2 \\\\ 4 \\end{pmatrix}\\) — es ist ein Parallelogramm.",
            "Erlaeuterung: Es gibt genau drei moegliche Ergaenzungspunkte, da jede der drei Strecken \\(AB\\), \\(BC\\), \\(AC\\) die Rolle der Diagonale uebernehmen kann; jede Wahl liefert ein anderes \\(D\\)."
          ],
          "afb": "III"
        }
      ]
    }
  ]
};
window.CONTENT = CONTENT;
