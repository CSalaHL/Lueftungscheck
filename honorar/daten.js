/* =====================================================================
   HONORARCHECK – DATEN UND ANNAHMEN
   ---------------------------------------------------------------------
   Alle Zahlen, die das Tool verwendet, stehen hier – mit Quelle und
   Prüfdatum. Zum Aktualisieren nur diese Datei bearbeiten.

   verifiziert: true  = Wert in der genannten Quelle nachgelesen
   verifiziert: false = Annahme des Tools, durch eigene Werte ersetzen
   ===================================================================== */
window.HONORAR_DATEN = {

  fachstand: "22.09.2026",

  /* ---------- Quellenregister ---------- */
  quellen: {
    sia108k: {
      org: "SIA", titel: "SIA 108-K Kalkulationshilfe zur Ordnung SIA 108", ausgabe: "2018 (gültig ab 1.11.2018), ergänzt SIA 108:2014",
      status: "Kalkulationshilfe, nur bei Vereinbarung verbindlich", link: "https://www.sia.ch", geprueft: "22.09.2026"
    },
    stadtzh: {
      org: "Stadt Zürich, Amt für Hochbauten", titel: "Merkblatt zu Planungsaufträgen", ausgabe: "Version 2025-01",
      status: "Vorgabe für Aufträge der Stadt Zürich; als Praxisreferenz verwendet",
      link: "https://www.stadt-zuerich.ch/content/dam/web/de/planen-bauen/projekte-und-ausschreibungen/dokumente/hochbauvorhaben/vorgaben/honorarwesen-vertragsmanagement/merkblatt-planungsauftraege-2025-01.pdf",
      geprueft: "22.09.2026"
    },
    kbob2026: {
      org: "KBOB", titel: "Empfehlungen zur Honorierung von Planerinnen und Planern", ausgabe: "2026",
      status: "Empfehlung; publiziert keine Stundenansätze mehr, Baukostenmodell als Modell «bis 2019» bezeichnet",
      link: "https://www.kbob.admin.ch", geprueft: "22.09.2026"
    },
    tg2026: {
      org: "Kanton Thurgau, Departement für Bau und Umwelt", titel: "Empfehlung zur Honorierung von Planerinnen und Planern ab 1. Januar 2026", ausgabe: "17.03.2026",
      status: "Maximalansätze für freihändige Vergaben des Kantons TG; als Referenz verwendet",
      link: "https://tiefbauamt.tg.ch", geprueft: "22.09.2026"
    },
    annahme: {
      org: "BIM Werk", titel: "Annahme des Tools", ausgabe: "–",
      status: "nicht verifiziert – durch eigene Nachkalkulationen ersetzen", link: "", geprueft: "22.09.2026"
    }
  },

  /* ---------- Honorarformel (SIA 108-K Art. 7.2–7.4) ----------
     Tm = B × p/100 × n × q/100 × r × U
     p  = Z1 + Z2 / ∛Bp
     Tp = Tm × i
     H  = Tp × s × h                                                   */
  zwerte: { z1: 0.066, z2: 11.28, quelle: "stadtzh", verifiziert: true,
    hinweis: "Z-Werte SIA 108 gemäss Merkblatt Stadt Zürich 2025; laut Stadt Zürich letztmals vom SIA publiziert mit Basisjahr 2018." },

  mindestBaukosten: { wert: 100000, quelle: "sia108k", verifiziert: true,
    hinweis: "SIA 108-K Art. 7.1.5: Honorierung nach Baukosten eignet sich insbesondere bei aufwandbestimmenden Baukosten über CHF 100'000." },

  /* Leistungsanteile Lüftung/Klima, SIA 108-K Art. 7.7.3 */
  phasen: [
    { id: "31", name: "Vorprojekt", q: 12 },
    { id: "32", name: "Bauprojekt und Bewilligungsverfahren", q: 18 },
    { id: "41", name: "Ausschreibung, Offertvergleich, Vergabeantrag", q: 23 },
    { id: "51", name: "Ausführungsprojekt", q: 23 },
    { id: "52", name: "Ausführung", q: 14 },
    { id: "53", name: "Inbetriebnahme, Abschluss (inkl. 1.5 % Mängelbehebung)", q: 10 }
  ],
  phasenQuelle: "sia108k",

  /* Bandbreiten gemäss KOF-Erhebung 2013, zitiert in SIA 108-K */
  faktoren: {
    n: { standard: 1.0, min: 0.6, max: 1.5, quelle: "sia108k", verifiziert: true,
      hinweis: "Ohne Vereinbarung gilt n = 1.0. KOF-Erhebung: Minimal 0.6, Maximal 1.5 (SIA 108-K Art. 7.6.2)." },
    r: { standard: 1.0, min: 0.75, max: 1.2, quelle: "sia108k", verifiziert: true,
      hinweis: "Ohne Vereinbarung gilt r = 1.0. KOF-Erhebung: Minimal 0.75, Maximal 1.2 (SIA 108-K Art. 7.8.3)." },
    U: { standard: 1.0, min: 1.0, max: 1.5, quelle: "sia108k", verifiziert: true,
      hinweis: "Faktor für Umbauten, ohne Vereinbarung 1.0 (SIA 108-K Art. 7.14). Keine publizierte Bandbreite – Schieberegler-Grenzen sind nur Eingabehilfe." },
    i: { standard: 1.0, min: 0.8, max: 1.3, quelle: "sia108k", verifiziert: true,
      hinweis: "Teamfaktor, ohne Vereinbarung 1.0; kein Mass für Qualität (SIA 108-K Art. 7.9). Keine publizierte Bandbreite." },
    s: { standard: 1.0, min: 1.0, max: 1.3, quelle: "sia108k", verifiziert: true,
      hinweis: "Faktor für Sonderleistungen, ohne Vereinbarung 1.0 (SIA 108-K Art. 7.10). Keine publizierte Bandbreite." }
  },

  /* Anpassungsfaktor-Vorschläge Stadt Zürich (Merkblatt 2025-01, Ziff. 7) */
  rVorschlaege: [
    { l: "Normal", r: 1.0 },
    { l: "Gesamterneuerung", r: 0.95 },
    { l: "Teilerneuerung", r: 0.85 },
    { l: "Instandhaltung", r: 0.75 }
  ],
  rQuelle: "stadtzh",

  /* Schwierigkeitskategorie Lüftung/Klima je Bauwerksart (SIA 108-K Art. 7.6.5)
     nutzung = Schlüssel für Kostenkennwerte (identisch mit Lüftungs-Quickcheck) */
  bauwerksarten: [
    { g: "Wohnen", l: "Mehrfamilienhaus, gleichartige Wohnungstypen", k: "II", nutzung: "mfh" },
    { g: "Wohnen", l: "Mehrfamilienhaus, verschiedenartige Wohnungstypen", k: "III", nutzung: "mfh" },
    { g: "Wohnen", l: "Einfamilienhaus, einfach / durchschnittlich", k: "III", nutzung: "efh" },
    { g: "Wohnen", l: "Einfamilienhaus mit individuellen Ansprüchen", k: "IV", nutzung: "efh" },
    { g: "Wohnen", l: "Alterswohnungen, Alterssiedlungen", k: "III", nutzung: "mfh" },
    { g: "Wohnen", l: "Altersheime", k: "V", nutzung: "spital" },
    { g: "Verwaltung", l: "Einfache Bürobauten", k: "III", nutzung: "verwaltung" },
    { g: "Verwaltung", l: "Bürobauten mit erhöhten Anforderungen", k: "V", nutzung: "verwaltung_klima" },
    { g: "Verwaltung", l: "Banken, Rechenzentren", k: "VII", nutzung: "verwaltung_klima" },
    { g: "Bildung", l: "Kindergärten, Primar- und Sekundarschulen", k: "III", nutzung: "schule" },
    { g: "Bildung", l: "Berufsschulen, höhere Fachschulen", k: "III", nutzung: "schule" },
    { g: "Bildung", l: "Mittelschulen, Gymnasien", k: "III", nutzung: "schule" },
    { g: "Bildung", l: "Hochschulen, Universitäten", k: "V", nutzung: "schule" },
    { g: "Bildung", l: "Forschungsinstitute mit Laboratorien", k: "VII", nutzung: "labor" },
    { g: "Handel", l: "Ladenbauten, einfache Grundausstattung", k: "III", nutzung: "verkauf" },
    { g: "Handel", l: "Ladenbauten, komplexe Grundausstattung", k: "VII", nutzung: "verkauf" },
    { g: "Handel", l: "Warenhäuser, Einkaufszentren", k: "VII", nutzung: "verkauf" },
    { g: "Gastgewerbe", l: "Restaurationsbetriebe", k: "VI", nutzung: "restaurant" },
    { g: "Gastgewerbe", l: "Cafeterias, Tearooms", k: "IV", nutzung: "restaurant" },
    { g: "Gastgewerbe", l: "Kantinen, selbständige Grossküchen", k: "V", nutzung: "restaurant" },
    { g: "Gastgewerbe", l: "Hotel- und Motelbauten", k: "VII", nutzung: "verwaltung_klima" },
    { g: "Gesundheit", l: "Arztpraxen, Ärztehäuser", k: "VI", nutzung: "verwaltung_klima" },
    { g: "Gesundheit", l: "Krankenhäuser – Bettenhäuser", k: "V", nutzung: "spital" },
    { g: "Gesundheit", l: "Krankenhäuser – Behandlungstrakte", k: "VII", nutzung: "spital" },
    { g: "Gesundheit", l: "Pflegeheime, Rehabilitationszentren", k: "V", nutzung: "spital" },
    { g: "Industrie", l: "Lagerhallen", k: "I", nutzung: "lager" },
    { g: "Industrie", l: "Mehrstöckige Lagerbauten", k: "II", nutzung: "lager" },
    { g: "Industrie", l: "Industriehallen", k: "V", nutzung: "industrie" },
    { g: "Industrie", l: "Betriebsgebäude, Gewerbebauten, Werkstätten", k: "V", nutzung: "industrie" },
    { g: "Industrie", l: "Produktion verarbeitende Industrie", k: "VII", nutzung: "industrie" },
    { g: "Industrie", l: "Lebensmittel- und Getränkeindustrie", k: "V", nutzung: "industrie" },
    { g: "Industrie", l: "Laborgebäude", k: "VII", nutzung: "labor" },
    { g: "Kultur", l: "Museen, Kunstgalerien", k: "VII", nutzung: "versammlung" },
    { g: "Kultur", l: "Kinotheater, Saalbauten", k: "VII", nutzung: "versammlung" },
    { g: "Kultur", l: "Konzert- und Theaterbauten", k: "IX", nutzung: "versammlung" },
    { g: "Kultur", l: "Kongresshäuser", k: "VII", nutzung: "versammlung" },
    { g: "Sport", l: "Turn- und Sporthallen, Mehrzweckhallen", k: "IV", nutzung: "sport" },
    { g: "Sport", l: "Garderobengebäude, Freibäder", k: "V", nutzung: "sport" },
    { g: "Sport", l: "Kunsteishallen, Hallenbäder", k: "VII", nutzung: "hallenbad" },
    { g: "Verkehr", l: "Tiefgaragen", k: "III", nutzung: "garage" }
  ],
  bauwerksQuelle: "sia108k",

  /* Vorschlag n aus Kategorie – KEINE SIA-Vorgabe.
     Der SIA publiziert seit 2018 keine Zahlenwerte für n (WEKO).     */
  nVorschlag: { I: 0.9, II: 0.9, III: 1.0, IV: 1.0, V: 1.1, VI: 1.1, VII: 1.2, VIII: 1.3, IX: 1.3 },
  nVorschlagQuelle: "annahme",

  /* ---------- Stundenansätze ---------- */
  kategorien: [
    { k: "A", l: "Experte, Projektleiter interdisziplinäre Grossprojekte", h: 243 },
    { k: "B", l: "Projektleiter komplexe Projekte, Fachkoordinator", h: 190 },
    { k: "C", l: "Leitender Ingenieur", h: 164 },
    { k: "D", l: "Ingenieur", h: 139 },
    { k: "E", l: "Techniker, Zeichner-Konstrukteur", h: 115 },
    { k: "F", l: "Zeichner", h: 105 },
    { k: "G", l: "Hilfspersonal, Zeichner Stufe 1", h: 101 }
  ],
  kategorienQuelle: "tg2026",

  /* Team-Mix in % der Stunden – Annahme, bürospezifisch anpassen */
  teamMix: { A: 0, B: 15, C: 20, D: 30, E: 30, F: 5, G: 0 },
  teamMixQuelle: "annahme",

  mittelansaetze: [
    { l: "Stadt ZH 2025 (Baukostenmodell)", h: 138.6, quelle: "stadtzh" },
    { l: "TG 2026 Mittelansatz Planungsgruppen", h: 169, quelle: "tg2026" }
  ],

  /* ---------- Nebenkosten und MWST ---------- */
  nebenkosten: { standard: 4, quelle: "stadtzh",
    hinweis: "Stadt Zürich: 5 % bei Erstellungskosten bis 2 Mio., 4 % bei 2–100 Mio., 3 % über 100 Mio. (Bezug: Erstellungskosten des Gesamtprojekts)." },
  mwst: 8.1,

  /* ---------- Kostenkennwerte Lüftung/Klima ----------
     CHF pro m² EBF, BKP 244/245 inkl. Montage, exkl. MWST.
     ACHTUNG: Platzhalter-Annahmen, nicht verifiziert.
     EFH grob abgeleitet aus Marktangaben (EFH ~150 m²: CHF 12'000–25'000). */
  kennwerte: {
    efh:              { l: "Wohnen EFH (Komfortlüftung)",            min: 80,  typ: 120, max: 170 },
    mfh:              { l: "Wohnen MFH (Komfortlüftung)",            min: 60,  typ: 95,  max: 140 },
    verwaltung:       { l: "Büro, Zu-/Abluft mit WRG",               min: 110, typ: 160, max: 220 },
    verwaltung_klima: { l: "Büro/Hotel/Praxis mit Kühlung",          min: 190, typ: 260, max: 350 },
    schule:           { l: "Schule",                                  min: 110, typ: 160, max: 220 },
    verkauf:          { l: "Verkauf",                                 min: 90,  typ: 160, max: 250 },
    restaurant:       { l: "Restaurant inkl. Küchenabluft",          min: 250, typ: 350, max: 500 },
    versammlung:      { l: "Versammlung, Kultur",                     min: 180, typ: 260, max: 380 },
    spital:           { l: "Spital, Pflege",                          min: 300, typ: 450, max: 700 },
    labor:            { l: "Labor",                                   min: 500, typ: 700, max: 1000 },
    industrie:        { l: "Industrie, Gewerbe",                      min: 60,  typ: 110, max: 200 },
    lager:            { l: "Lager",                                   min: 20,  typ: 40,  max: 80 },
    sport:            { l: "Sporthalle",                              min: 100, typ: 150, max: 220 },
    hallenbad:        { l: "Hallenbad",                               min: 400, typ: 600, max: 900 },
    garage:           { l: "Tiefgarage",                              min: 25,  typ: 45,  max: 80 }
  },
  kennwerteQuelle: "annahme",

  /* Zuordnung Quickcheck-Nutzung -> Kennwert-Schlüssel */
  quickcheckNutzung: {
    mfh: "mfh", efh: "efh", verwaltung: "verwaltung", schule: "schule", verkauf: "verkauf",
    restaurant: "restaurant", versammlung: "versammlung", spital: "spital", industrie: "industrie",
    lager: "lager", sport: "sport", hallenbad: "hallenbad", labor: "labor"
  },

  /* Besonders zu vereinbarende Leistungen (SIA 108-K Art. 7.7.5 und 7.11) */
  zusatzVorlagen: [
    "Vorstudie / Machbarkeit (Phase 2)",
    "Fachkoordination Gebäudetechnik",
    "Variantenstudie",
    "Betriebsoptimierung (Phase 6)",
    "Bestandesaufnahme"
  ]
};
