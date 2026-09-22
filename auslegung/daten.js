/* =====================================================================
   SCHNELLAUSLEGUNG – DATEN UND ANNAHMEN
   ---------------------------------------------------------------------
   Alle Zahlen stehen hier – mit Quelle. Zum Aktualisieren nur diese
   Datei bearbeiten (Dezimalpunkt statt Komma, Kommas zwischen Einträgen).

   v: true  = in der genannten Quelle nachgelesen
   v: false = Annahme des Tools, durch eigene Werte ersetzen
   ===================================================================== */
window.AUSLEGUNG_DATEN = {

  fachstand: "22.09.2026",

  quellen: {
    sia3825: { org: "SIA / enbau-online", titel: "SIA 382/5:2021 Mechanische Lüftung in Wohngebäuden – Auslegungswerte (zusammengefasst auf enbau-online.ch)",
      status: "Zuluft je Zimmer und Abluft-Bandbreiten; Werte in der Norm selbst bestätigen", link: "https://enbau-online.ch/heizung-lueftung-elektrizitaet/5-5-wohnungslueftung/", geprueft: "22.09.2026" },
    sia2024gb: { org: "SIA", titel: "Grundlagenbericht zu SIA 2024:2021",
      status: "36 m³/h·P ≈ max. 950 ppm CO₂, 29 m³/h·P ≈ max. 1200 ppm; Garderobe/Dusche 8 m³/(h·m²) gemäss Korrigenda C1", link: "https://www.sia.ch", geprueft: "22.09.2026" },
    bfe: { org: "EnergieSchweiz / BFE", titel: "Massnahmenblatt Luftmenge der Lüftungsanlage (11.2021)",
      status: "Aussenluft pro Person: Büro 36, Fachgeschäft 30, Restaurant 36, Schulzimmer 25 m³/h·P", link: "https://pubdb.bfe.admin.ch", geprueft: "22.09.2026" },
    annahme: { org: "BIM Werk", titel: "Annahme des Tools", status: "nicht verifiziert – durch eigene Werte ersetzen", link: "", geprueft: "22.09.2026" }
  },

  /* ---------- Wohnen nach SIA 382/5 ----------
     Zuluft: Zimmer (2 Personen / ohne Angabe) 30, Einzelzimmer 20 m³/h
     Abluft-Bandbreiten: Küche 20–35, Bad/Dusche 30–60, sep. WC 15–30 m³/h
     Gewählte Werte liegen innerhalb der Bandbreite.                      */
  wohnen: {
    zuluftZimmer: 30, zuluftEinzel: 20,
    abluftKueche: 30, abluftBad: 45, abluftWC: 20,
    bandbreiten: "Küche 20–35, Bad/Dusche 30–60, separates WC 15–30 m³/h",
    quelle: "sia3825", v: true
  },

  /* Aussenluft pro Person – Auswahl Raumluftqualität */
  ralStufen: [
    { id: "hoch", l: "Hohe Raumluftqualität", qP: 36, info: "ca. max. 950 ppm CO₂", quelle: "sia2024gb", v: true },
    { id: "mittel", l: "Mittlere Raumluftqualität", qP: 29, info: "ca. max. 1200 ppm CO₂", quelle: "sia2024gb", v: true }
  ],

  /* ---------- Anlagentypen: Kostenkennwerte CHF pro m³/h ----------
     inkl. Montage, exkl. MWST, ohne Kälte-/Wärmeerzeugung.
     ALLE WERTE SIND ANNAHMEN – durch eigene Nachkalkulationen ersetzen. */
  anlagentypen: {
    kwl:       { l: "Komfortlüftung Wohnen (KWL)",           min: 30, typ: 45,  max: 70,  hon: "mfh" },
    abluft:    { l: "Abluftanlage mit Nachströmung",         min: 10, typ: 15,  max: 25,  hon: "mfh" },
    zuab:      { l: "Zu-/Abluftanlage mit WRG",              min: 30, typ: 45,  max: 65,  hon: "verwaltung" },
    zuabk:     { l: "Zu-/Abluftanlage mit WRG und Kühlung",  min: 55, typ: 75,  max: 110, hon: "verwaltung_klima" },
    kueche:    { l: "Küchenlüftung gewerblich",              min: 30, typ: 45,  max: 70,  hon: "restaurant" },
    spezial:   { l: "Speziallüftung (Labor, Spital)",        min: 70, typ: 100, max: 150, hon: "labor" },
    hallenbad: { l: "Hallenbadlüftung mit Entfeuchtung",     min: 50, typ: 70,  max: 100, hon: "hallenbad" },
    garage:    { l: "Garagenlüftung",                        min: 8,  typ: 12,  max: 20,  hon: "garage" }
  },
  anlagenQuelle: "annahme",

  /* Grössenfaktor: kleine Anlagen sind pro m³/h teurer (Annahme) */
  groessenfaktor: [
    { bis: 500,      f: 1.6, l: "bis 500 m³/h" },
    { bis: 2000,     f: 1.25, l: "500–2000 m³/h" },
    { bis: 10000,    f: 1.0, l: "2000–10 000 m³/h" },
    { bis: Infinity, f: 0.85, l: "über 10 000 m³/h" }
  ],

  /* Anlagenkomplexität (Annahme) */
  komplexitaet: [
    { id: "einfach", l: "Einfach", f: 0.85, d: "Neubau, einfache Leitungsführung, Standardkomponenten" },
    { id: "normal",  l: "Normal",  f: 1.0,  d: "übliche Anforderungen" },
    { id: "erhoeht", l: "Erhöht",  f: 1.2,  d: "Umbau, enge Platzverhältnisse, erhöhte Schall-/Hygieneanforderungen" },
    { id: "hoch",    l: "Hoch",    f: 1.4,  d: "Bestand mit Rückbau, Denkmalschutz, Etappierung, Sonderanforderungen" }
  ],

  /* ---------- Zonen-Vorlagen ----------
     m: Methode  wohnung | personen | flaeche | luftwechsel | manuell
     mP = m² pro Person (Annahme, mit SIA 2024 Raumnutzung abgleichen)
     qA = m³/(h·m²), lw = Luftwechsel 1/h
     hon = Nutzungsschlüssel für den Honorarcheck                        */
  vorlagen: [
    { id: "wohnung",   l: "Wohnungen (KWL)",            m: "wohnung",  anlage: "kwl",    hon: "mfh" },
    { id: "buero",     l: "Büro Einzel/Gruppe",         m: "personen", mP: 14, ral: "hoch", anlage: "zuab", hon: "verwaltung", qPquelle: "bfe" },
    { id: "grossraum", l: "Grossraumbüro",              m: "personen", mP: 10, ral: "hoch", anlage: "zuab", hon: "verwaltung", qPquelle: "bfe" },
    { id: "sitzung",   l: "Sitzungszimmer",             m: "personen", mP: 3,  ral: "hoch", anlage: "zuab", hon: "verwaltung" },
    { id: "schule",    l: "Schulzimmer",                m: "personen", mP: 3,  qP: 25, anlage: "zuab", hon: "schule", qPquelle: "bfe" },
    { id: "restaurant",l: "Restaurant Gastraum",        m: "personen", mP: 1.5, qP: 36, anlage: "zuab", hon: "restaurant", qPquelle: "bfe" },
    { id: "verkauf",   l: "Verkauf / Fachgeschäft",     m: "personen", mP: 10, qP: 30, anlage: "zuab", hon: "verkauf", qPquelle: "bfe" },
    { id: "saal",      l: "Saal / Versammlung",         m: "personen", mP: 1.5, ral: "hoch", anlage: "zuab", hon: "versammlung" },
    { id: "garderobe", l: "Garderobe / Dusche",         m: "flaeche",  qA: 8, qAv: true, anlage: "zuab", hon: "sport", qAquelle: "sia2024gb" },
    { id: "wc",        l: "WC-Anlagen",                 m: "flaeche",  qA: 15, anlage: "zuab", hon: "verwaltung" },
    { id: "kueche",    l: "Gewerbeküche",               m: "flaeche",  qA: 100, anlage: "kueche", hon: "restaurant",
      hinweis: "Grobwert. Massgebend ist die Gerätebelegung nach SN EN 16282 bzw. VDI 2052." },
    { id: "lager",     l: "Lager",                      m: "flaeche",  qA: 0.7, anlage: "abluft", hon: "lager" },
    { id: "labor",     l: "Labor",                      m: "luftwechsel", lw: 8, anlage: "spezial", hon: "labor",
      hinweis: "Grobwert. Massgebend sind Abzüge (SN EN 14175) und Gefährdungsbeurteilung." },
    { id: "garage",    l: "Tiefgarage",                 m: "flaeche",  qA: 6, anlage: "garage", hon: "garage",
      hinweis: "Grobwert. Kantonale Vorgaben und Brandschutz (RWA) sind massgebend." },
    { id: "hallenbad", l: "Hallenbad",                  m: "manuell",  anlage: "hallenbad", hon: "hallenbad",
      hinweis: "Luftmenge aus Verdunstungsberechnung (VDI 2089) einsetzen." },
    { id: "eigen",     l: "Eigene Zone",                m: "manuell",  anlage: "zuab", hon: "verwaltung" }
  ],

  /* Zuordnung Lüftungs-Quickcheck-Nutzung -> Vorlage */
  quickcheck: { mfh: "wohnung", efh: "wohnung", verwaltung: "buero", schule: "schule", verkauf: "verkauf",
    restaurant: "restaurant", versammlung: "saal", spital: "eigen", industrie: "eigen", lager: "lager",
    sport: "garderobe", hallenbad: "hallenbad", labor: "labor" }
};
