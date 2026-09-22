/* =====================================================================
   BRANDSCHUTZCHECK LÜFTUNG – DATEN UND QUELLEN
   ---------------------------------------------------------------------
   Masse in mm. Nur Werte eintragen, die in der genannten Quelle stehen.
   Einbau immer gemäss Leistungserklärung bzw. VKF-Technischer Auskunft
   und der zum Produkt gehörenden Einbauanleitung (VKF 25-15, Ziff. 3.8.1).
   ===================================================================== */
window.BRANDSCHUTZ_DATEN = {

  fachstand: "22.09.2026",

  hinweisBSV: "In Kraft sind die VKF-Brandschutzvorschriften 2015 (BSV 2015). Die BSV 2026 sind noch nicht in Kraft gesetzt. Zeitplan beachten.",

  quellen: {
    vkf2515: { org: "VKF", titel: "Brandschutzrichtlinie 25-15 Lufttechnische Anlagen", ausgabe: "01.01.2017 (BSV 2015, Änderungen IOTH 22.09.2016)",
      link: "https://www.bsvonline.ch", geprueft: "22.09.2026" },
    bsr: { org: "VKF", titel: "Brandschutzregister – VKF-Anerkennungen und Technische Auskünfte", ausgabe: "online",
      link: "https://www.bsronline.ch/de", geprueft: "22.09.2026" },
    fkrs2020: { org: "TROX", titel: "Montage- und Betriebsanleitung FKRS-EU", ausgabe: "06/2020 (V5)",
      link: "https://cdn.trox.de/ece6766a42c84615/46f445fc4c46/OM_2020_06_M375DE7_FKRS-EU_V5_DE_de.pdf", geprueft: "22.09.2026" },
    fkrs2016: { org: "TROX", titel: "Montage- und Betriebsanleitung FKRS-EU", ausgabe: "09/2016 (V4)",
      link: "https://cdn.trox.de/23c7fc359b086994/6baa6af4d6ae/OM_2016_09_M375DE7_FKRS-EU_V4_DE_de.pdf", geprueft: "22.09.2026" },
    fk2: { org: "TROX", titel: "Montage- und Betriebsanleitung FK2-EU", ausgabe: "06/2022",
      link: "https://cdn.trox.de/9154c381f2b09ba3/a5efee7c2141/FK2-EU_SV_IOM_A00000092717_V1_2022_06_DE_de.pdf", geprueft: "22.09.2026" },
    fkr: { org: "TROX", titel: "Montage- und Betriebsanleitung FKR-EU", ausgabe: "02/2022",
      link: "https://cdn.trox.de/d52993210e6c130c/376526d2e2e4/FKR-EU_IOM_A00000092704_V1_2022_02_DE_de.pdf", geprueft: "22.09.2026" }
  },

  /* ---------- Hersteller-Links ---------- */
  hersteller: [
    { name: "TROX HESCO Schweiz – Brandschutzklappe FK2-EU", link: "https://www.troxhesco.ch/brandschutzklappen/fk2-eu-8e20955902ab7cb1" },
    { name: "TROX – Brandschutzklappe FKRS-EU", link: "https://www.trox.de/brandschutzklappen/fkrs-eu-065efc2b4efeb254" },
    { name: "SCHAKO – Brandschutzklappen", link: "https://schako.com/de/schako-product-category/brandschutzklappen/" },
    { name: "SCHAKO – Brandschutzklappe BSK-RPR", link: "https://schako.com/de/schako-products/brandschutzklappe-bsk-rpr/" },
    { name: "Wildeboer – Einbau bei bekleideten Lüftungsleitungen (FK90)", link: "https://www.wildeboer.de/de/einfacher-einbau-bei-2-oder-3-seitig-bekleideten-lueftungsleitungen/" },
    { name: "Strulik – Produktübersicht Brandschutz", link: "https://www.strulik.com/de/download/1383/pdf/Strulik_Produkt%C3%BCbersicht_Brandschutz/?cHash=15665b5779ef81e0d28eab3763d7fcaf" },
    { name: "VKF-Brandschutzregister (Produkt suchen)", link: "https://www.bsronline.ch/de" }
  ],

  /* ---------- Produkte mit verifizierten Einbaumassen ----------
     s = umlaufender Spalt pro Seite (mm). smin = Empfehlung Hersteller.   */
  produkte: {
    fkrs: {
      l: "TROX FKRS-EU (rund, DN 100–315)", form: "rund", dnMin: 100, dnMax: 315,
      nass: { smin: 20, smax: 225, quelle: "fkrs2020",
        text: "Nasseinbau: umlaufender Spalt s1 max. 225 mm (Wand und Decke). Mörtelspalt nicht kleiner als 20 mm empfohlen.",
        alt: "Ältere Anleitung 09/2016 (V4): Spalt im Nasseinbau max. 75 mm, Mörtelbetttiefe mind. 100 mm. Massgebend ist die Anleitung, die zur gelieferten Klappe gehört." },
      weich: { smin: 40, smax: 600, quelle: "fkrs2016", text: "Weichschott: Abstand Klappe – Bauteilöffnung 40 … 600 mm." },
      einbausatz: {
        massiv: { l: "Einbaustein rund ER (Kernbohrung)", quelle: "fkrs2016",
          tabelle: { 100: 200, 125: 250, 150: 250, 160: 250, 180: 300, 200: 300, 224: 350, 250: 350, 280: 400, 315: 400 },
          text: "Kernbohrung ØD1 gemäss Tabelle, Toleranz +2 mm. Abstand zu tragenden Bauteilen ≥ 75 mm, zwischen Einbausteinen ≥ 200 mm." },
        lbw: { l: "Einbausatz quadratisch TQ", quelle: "fkrs2016", plus: 110,
          text: "Einbauöffnung □A = DN + 110 mm (z. B. DN 200 → 310 mm), Toleranz +2 mm. Abstand zwischen zwei Klappen ≥ 200 mm." }
      },
      abstandTragend: 40, abstandKlappen: 40, abstandQuelle: "fkrs2016",
      bedienmass: "Abstand Stutzen Bedienungsseite bis Wand 220 mm; bei Wanddicke > 115 mm Verlängerung auf der Einbauseite (Anleitung 09/2016).",
      bauteile: "Massivwand: Rohdichte ≥ 350 kg/m³, W ≥ 100 mm, ohne Hohlräume. Massivdecke: ≥ 600 kg/m³, D ≥ 100 mm (örtlich aufgedickt ≥ 150 mm). Leichtbauwand: W ≥ 98 mm (EI 30: ≥ 75 mm)."
    },
    fkr: {
      l: "TROX FKR-EU (rund)", form: "rund",
      nass: { smin: 20, smax: 225, quelle: "fkr",
        text: "Nasseinbau: umlaufender Spalt max. 225 mm. Mörtelspalt nicht kleiner als 20 mm empfohlen." },
      weich: { smin: 40, smax: 600, quelle: "fkr", text: "Weichschott: Spalt 40 … 600 mm." },
      abstandQuelle: "fkr"
    },
    fk2: {
      l: "TROX FK2-EU (rechteckig)", form: "eckig",
      nass: { smin: 20, smax: 225, quelle: "fk2",
        text: "Nasseinbau: umlaufender Spalt s1 max. 225 mm (Einbauöffnung B + max. 450 / H + max. 450). Mörtelspalt nicht kleiner als 20 mm empfohlen." },
      weich: { smin: 40, smax: 600, quelle: "fk2", text: "Weichschott: Spalt 40 … 600 mm." },
      einbausatz: { lbw: { l: "Einbausatz ES (Leichtbauwand)", quelle: "fk2", plus: 140,
        text: "Einbauöffnung B + 140 / H + 140 mm (Trockeneinbau mit Einbausatz, gemäss Anleitung)." } },
      abstandTragend: 40, abstandKlappen: 60, abstandQuelle: "fk2",
      bedienmass: "Zertifizierter Nasseinbau mit 40 mm zu tragenden Bauteilen und 60 mm zwischen zwei Klappen (Flansch an Flansch)."
    },
    andere: { l: "Anderes Produkt (Werte aus Herstelleranleitung eintragen)", form: "beide", manuell: true }
  },

  /* ---------- Bauteile ---------- */
  /* Materialien für Massivbauteile (nur Darstellung) */
  materialien: {
    beton: "Stahlbeton", mauerwerk: "Mauerwerk (Backstein, Kalksandstein)", porenbeton: "Porenbeton"
  },

  bauteile: {
    massivwand: { l: "Massivwand (Beton, Mauerwerk)", orient: "wand", typ: "massiv" },
    massivdecke: { l: "Massivdecke (vertikale Leitung)", orient: "decke", typ: "massiv" },
    lbw: { l: "Leichtbauwand mit Metallständer", orient: "wand", typ: "lbw" },
    schachtwand: { l: "Schachtwand (einseitig beplankt)", orient: "wand", typ: "lbw" },
    holzstaender: { l: "Leichtbauwand mit Holzständer", orient: "wand", typ: "lbw" }
  },

  /* ---------- Situationen ---------- */
  situationen: [
    { id: "bsk_wand",   l: "BSK in Massivwand",                 d: "Leitung durch brandabschnittsbildende Wand, Klappe in der Wand", loesung: "bsk", bauteil: "massivwand" },
    { id: "bsk_decke",  l: "BSK in Massivdecke",                d: "Vertikale Leitung durch Decke, Klappe in der Decke", loesung: "bsk", bauteil: "massivdecke" },
    { id: "bsk_lbw",    l: "BSK in Leichtbauwand",              d: "Klappe in Metallständerwand oder Schachtwand", loesung: "bsk", bauteil: "lbw" },
    { id: "transit",    l: "Transitleitung EI 30",              d: "Leitung führt öffnungslos durch fremden Brand- oder Lüftungsabschnitt", loesung: "transit", bauteil: "massivwand" },
    { id: "ringspalt",  l: "Durchführung ohne BSK",             d: "Ausnahme nach VKF – nur Ringspalt verschliessen", loesung: "ringspalt", bauteil: "massivwand" },
    { id: "schacht",    l: "Vertikale Leitungen im Schacht",    d: "Steigzone über mehrere Geschosse", loesung: "schacht", bauteil: "massivdecke" },
    { id: "kueche",     l: "Küchenabluft gewerblich",           d: "Abluftleitung einer gewerblichen Küche", loesung: "kueche", bauteil: "massivwand" }
  ],

  /* ---------- VKF 25-15 – sinngemäss, mit Ziffer ---------- */
  vkf: {
    bskWo: { z: "3.8.2 Abs. 1", t: "Brandschutzklappen sind anzuordnen bei Durchtritten durch Brandmauern, brandabschnittsbildende Wände und Decken sowie wenn öffnungslose Leitungen ohne den erforderlichen Feuerwiderstand durch andere Lüftungsabschnitte führen." },
    bskKlasse: { z: "3.8.1 Abs. 2–6", t: "BSK mind. EI 30-S, mit Antrieb und thermischer Auslösung; schliessen selbsttätig beim Ausschalten, bei Auslösung und bei Antriebsausfall; keine Verwendung als Regulierklappe." },
    bskEinbau: { z: "3.8.1 Abs. 3", t: "Befestigung gemäss Leistungserklärung oder VKF-Technischer Auskunft und Herstellerangaben; von aussen kontrollierbar und zugänglich." },
    ringspalt: { z: "3.7.8", t: "Aussparungen zwischen Leitung und brandabschnittsbildendem Bauteil unter Berücksichtigung der Wärmedehnung mit Baustoffen RF1 (z. B. Mörtel, Gips) ausfüllen und dicht verschliessen oder mit Abschottungssystem EI 30 verschliessen; bei grosser Brandbelastung Abschottung mit gleichem Feuerwiderstand wie das Bauteil." },
    transit: { z: "3.7.6 Abs. 1", t: "Leitungen, die öffnungslos durch andere Brand- oder Lüftungsabschnitte führen, sind EI 30 auszuführen oder zu bekleiden – in Schleusen und vertikalen Fluchtwegen mit dem Feuerwiderstand der Brandabschnittsbildung, mind. EI 30 – oder mit Brandschutzklappen zu versehen." },
    schachtKeinKanal: { z: "3.7.6 Abs. 2", t: "Installationsschächte dürfen nicht als Lüftungsleitungen verwendet werden." },
    installationen: { z: "3.7.9", t: "In Lüftungsleitungen und luftführenden Schächten dürfen nur der Anlage dienende Teile installiert sein." },
    aufhaengung: { z: "3.7.3", t: "Aufhängungen und Befestigungen von RF1-Leitungen aus RF1; sichere Befestigung während der geforderten Feuerwiderstandsdauer." },
    zentrale: { z: "3.1 Abs. 2", t: "Aggregate für mehrere Lüftungsabschnitte in separatem Raum mit Feuerwiderstand der Brandabschnittsbildung, mind. EI 30, Türen EI 30." },
    fluchtweg: { z: "4.1.2", t: "Brandabschnittsbildende Fluchtwege grundsätzlich separat belüften, sonst BSK in den brandabschnittsbildenden Wänden, mit Kanalrauchmelder oder Anschluss an Brandmeldeanlage." },
    schachtTrennung: { z: "4.3.4", t: "Leitungen besonderer Anlagen (erhöhte Temperatur, Ex, aggressive Medien) im selben Schacht geschoss- und abschnittsweise mit Brandschutzplatte 30 Minuten (RF1, dauerwärmebeständig) trennen bzw. einzeln EI 30 bekleiden." },
    kueche: { z: "4.2.1 / 4.2.3", t: "Fettabscheider nahe der Absaugstelle; Leitungen RF1 dauerwärmebeständig; separate Aggregate und Leitungen; ausserhalb der Küche mit Feuerwiderstand der Brandabschnittsbildung, mind. EI 30; wasserdicht, dampfreinigbar; keine flexiblen Leitungen." },
    kuecheVent: { z: "4.2.3 Abs. 3–5", t: "Ventilatoren für Küchenabluft in eigenem Raum mind. EI 60; Trennung von anderen Anlagen abhängig von der Abluftmenge (Grenzen 4'000 und 12'000 m³/h)." },
    kuecheSchacht: { z: "4.2.3 Abs. 6", t: "Küchenabluftleitungen im Installationsschacht voneinander und von anderen Installationen mit Brandschutzplatte 30 Minuten (RF1, dauerwärmebeständig) abtrennen." },
    kontrolle: { z: "5", t: "Brandschutzklappen und Brandfallsteuerungen sind periodisch zu kontrollieren." },
    daemm: { z: "3.7.4", t: "Wärmedämmschichten von Lüftungsleitungen in horizontalen und vertikalen Fluchtwegen aus RF1, sonst mind. RF3; Dämmstoffe mit kritischem Verhalten (cr) mit mind. 0.5 mm RF1 hohlraumfrei ummanteln." }
  },

  /* Ausnahmen, bei denen auf BSK verzichtet werden kann – VKF 25-15 Ziff. 3.8.2 Abs. 2 */
  ausnahmen: [
    { id: "a", t: "Brandabschnitte können gemäss Brandschutzkonzept zu einem Lüftungsabschnitt zusammengefasst werden" },
    { id: "b", t: "Büro- und Schulbauten: Lüftungsabschnitt ≤ 1'200 m²" },
    { id: "c", t: "Beherbergungsbetriebe und Wohnbauten: Lüftungsabschnitt ≤ 600 m²" },
    { id: "d", t: "Lüftungsanlagen von Nasszellen" },
    { id: "e", t: "Separate Leitungsführung bis zur Lüftungszentrale" },
    { id: "f", t: "Hochhäuser: Nasszellen, Wohnungsküchen u. dgl., max. 5 Geschosse je Steigkanal" },
    { id: "g", t: "Zwischen Lüftungszentrale und Installationsschacht" }
  ],

  /* ---------- Gefahren (mit Quelle) ---------- */
  gefahren: {
    version: { t: "Falsche Anleitungsversion: Zulässige Spaltmasse haben sich geändert (FKRS-EU: 75 mm in 09/2016, 225 mm ab 06/2020). Nur die Anleitung zur gelieferten Klappe ist massgebend.", q: "fkrs2020" },
    klasse: { t: "Die Leistungsklasse des Gesamtsystems bestimmt der schwächere Teil – Klappe oder Wand/Decke.", q: "fkrs2016" },
    zugang: { t: "Bedienseite, Antrieb und Inspektionsöffnung müssen zugänglich bleiben – keine Verbauung durch Decken, Leitungen oder Schränke.", q: "vkf2515" },
    kraefte: { t: "Kräfte aus der Leitung (Wärmedehnung im Brandfall) dürfen nicht auf die Klappe wirken – elastische Stutzen, insbesondere bei Leichtbau- und Schachtwänden sowie Weichschott.", q: "fkrs2016" },
    dosen: { t: "Anschluss- und Abzweigdosen nicht an der Brandschutzklappe befestigen, sondern am angrenzenden Bauteil.", q: "fkrs2016" },
    moertel: { t: "Klappe beim Vermörteln vor Mörtel und Tropfwasser schützen; Transport- und Einbausicherung erst nach Aushärtung entfernen; Lufteinschlüsse vermeiden.", q: "fkrs2016" },
    durchbruch: { t: "Zu grosse Durchbrüche nicht einfach ausmörteln: Übergrösse gemäss Wandaufbau schliessen (z. B. beimauern) und nur das zulässige Spaltmass verbleiben lassen.", q: "fkrs2016" },
    hohlraum: { t: "Massivwände müssen ohne Hohlräume sein – Hohlblocksteine und Hohlkammern im Einbaubereich sind nicht abgedeckt.", q: "fkrs2016" },
    weichschott: { t: "Weichschott ist nicht begehbar (Absturzgefahr) und die Klappe muss beidseitig separat abgehängt werden.", q: "fkrs2016" },
    abhaengung: { t: "Abhängungen länger als 1.5 m brandschutztechnisch verkleiden; Aufhängungen aus RF1.", q: "fkrs2016" },
    regulier: { t: "Brandschutzklappen dürfen nicht als Regulierklappen verwendet werden.", q: "vkf2515" },
    abstand: { t: "Mindestabstände zu tragenden Bauteilen und zwischen Klappen einhalten – bei Mehrfachbelegung einer Öffnung die Anleitung genau beachten.", q: "fk2" },
    fremde: { t: "Keine fremden Installationen (Kabel, Rohre) durch dieselbe Aussparung oder in der Lüftungsleitung führen.", q: "vkf2515" },
    kuecheBsk: { t: "Eignung der Klappe für gewerbliche Küchenabluft prüfen (Fett, Temperatur); nicht jede Klappe ist dafür vorgesehen.", q: "fkrs2016" },
    schachtKanal: { t: "Den Installationsschacht nicht als Luftkanal nutzen.", q: "vkf2515" },
    flex: { t: "Flexible Leitungen nur im zulässigen Rahmen (Luftauslässe ≤ 2 m); in gewerblichen Küchen nicht gestattet.", q: "vkf2515" }
  }
};
