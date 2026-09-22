# Planungstools Gebäudetechnik

Sammlung statischer Web-Tools (HTML/CSS/JavaScript, ohne Server) für GitHub Pages.

## Struktur

```
index.html              Startseite mit allen Tools (Kacheln)
manifest.webmanifest    App-Angaben für «Zum Home-Bildschirm»
icons/                  App-Symbole (BIM-Werk-Logo)
assets/                 Firmenlogo hell/dunkel (dunkel für PDF-Bericht)
.nojekyll               verhindert die Jekyll-Verarbeitung durch GitHub
lueftung/index.html     Tool «Lüftungsanforderungen»
honorar/index.html      Tool «Honorarcheck»
honorar/daten.js        Ansätze, Kennwerte, Faktoren mit Quellen (hier aktualisieren)
auslegung/index.html    Tool «Schnellauslegung»
auslegung/daten.js      Luftmengen-Vorlagen, CHF pro m³/h, Faktoren mit Quellen
```

## Veröffentlichen auf GitHub Pages

1. Neues Repository auf github.com anlegen, z. B. `planungstools` (öffentlich).
2. «Add file» → «Upload files» und den **Inhalt** dieses Ordners hochladen (nicht den Ordner selbst), dann «Commit changes».
3. «Settings» → «Pages» → Source: «Deploy from a branch», Branch `main`, Ordner `/ (root)` → «Save».
4. Nach 1–2 Minuten ist die Seite erreichbar unter `https://BENUTZERNAME.github.io/planungstools/`.

Hinweis: GitHub Pages ist bei kostenlosen Konten nur für öffentliche Repositories verfügbar. Die Seite ist dann für jeden mit dem Link sichtbar.

## Als App auf dem Handy speichern

- **iPhone (Safari):** Teilen-Symbol → «Zum Home-Bildschirm».
- **Android (Chrome):** Menü ⋮ → «Zum Startbildschirm hinzufügen» bzw. «App installieren».
- **PC:** Lesezeichen setzen oder in Chrome/Edge über das Installieren-Symbol in der Adressleiste.

## Neues Tool hinzufügen

1. Neuen Ordner anlegen, z. B. `brandschutz/`, und das Tool als `brandschutz/index.html` hineinlegen.
2. Im Tool oben einen Link zurück zur Startseite einfügen: `<a href="../">Alle Tools</a>`.
3. In `index.html` (Startseite) im Abschnitt `TOOLS` den Eintrag des Tools auf `status: "live"` setzen bzw. einen neuen Eintrag ergänzen.

## Hinweise

- Eingaben werden nur im Browser des Nutzers gespeichert (localStorage). Jedes Tool verwendet einen eigenen Speicherschlüssel.
- Schriften werden von Google Fonts geladen; ohne Internet greift eine Systemschrift.

## PDF-Bericht

Im Resultat «Bericht drucken / als PDF speichern» wählen und im Druckdialog «Als PDF speichern» einstellen. Das Format ist fix auf A4 hochformatig eingestellt, mit Firmenlogo im Kopf und Seitenzahlen in der Fusszeile. Den Dateinamen schlägt das Tool automatisch vor (Quickcheck_Lueftung_Projekt_Datum).

## Logo tauschen

Dateien in `assets/` und `icons/` mit gleichem Namen ersetzen. Auf dem Handy muss die Verknüpfung danach gelöscht und neu angelegt werden, damit das neue Symbol erscheint.

## Honorarcheck aktualisieren

Alle Zahlen stehen in `honorar/daten.js`, jeweils mit Quelle und Prüfdatum:

- `kennwerte` – Kostenkennwerte CHF/m² EBF (aktuell Platzhalter-Annahmen, durch eigene Nachkalkulationen ersetzen)
- `kategorien` – Stundenansätze A–G
- `teamMix` – Standard-Teamzusammensetzung in % der Stunden
- `mittelansaetze` – Referenz-Mittelansätze
- `nVorschlag` – Vorschlag Schwierigkeitsgrad je SIA-Kategorie (Annahme)
- `zwerte`, `phasen` – SIA-Werte, nur bei neuer SIA-Publikation ändern

Nach dem Ändern `fachstand` anpassen und die Datei auf GitHub ersetzen.

## Datenübergabe zwischen den Tools

Alle Tools laufen unter derselben Adresse und teilen sich den Browserspeicher. Die Übergabe läuft über den Schlüssel `bimwerk.handoff.v1` (JSON). Die künftige Schnellauslegung schreibt dieses Format, der Honorarcheck liest es («Aus Schnellauslegung übernehmen»):

```json
{
  "version": 1,
  "source": "schnellauslegung",
  "created": "2026-09-22T10:00:00Z",
  "projekt": { "name": "Überbauung Rheinweg", "kanton": "SH", "art": "neubau" },
  "zonen": [
    { "bezeichnung": "Wohnungen", "nutzung": "mfh", "ebf_m2": 2400, "volumen_m3": 6240, "luftmenge_m3h": 3600 },
    { "bezeichnung": "Gewerbe EG", "nutzung": "verwaltung", "ebf_m2": 350, "volumen_m3": 1100, "luftmenge_m3h": 1400 }
  ],
  "kosten_chf": null
}
```

- `nutzung`: Schlüssel wie in `kennwerte` (z. B. `efh`, `mfh`, `verwaltung`, `verwaltung_klima`, `schule`, `verkauf`, `restaurant`, `spital`, `labor`, `industrie`, `lager`, `sport`, `hallenbad`, `garage`).
- `kosten_chf`: optional; wenn gesetzt, übernimmt der Honorarcheck diesen Betrag direkt als Baukosten.
- Der Honorarcheck liest zusätzlich den Lüftungs-Quickcheck (`lk-quickcheck-v1`) für Projektname, Nutzung und Vorhaben.

## Schnellauslegung aktualisieren

In `auslegung/daten.js`:

- `anlagentypen` – Kostenkennwerte CHF pro m³/h (min / typ / max) je Anlagetyp
- `groessenfaktor` – Zuschlag bzw. Abzug je Anlagengrösse
- `komplexitaet` – Faktoren einfach / normal / erhöht / hoch
- `vorlagen` – Zonen-Vorlagen mit Methode und Standardwerten (m² pro Person, m³/(h·m²), Luftwechsel)
- `wohnen` – Auslegungswerte nach SIA 382/5 (nur bei Normänderung anpassen)

## Daten-Dateien bearbeiten – worauf achten

- Mit einem reinen Texteditor öffnen (z. B. Editor/Notepad, TextEdit im Modus «Reiner Text», VS Code) – nicht mit Word.
- Oder direkt auf GitHub: Datei öffnen → Stift-Symbol → ändern → «Commit changes».
- Dezimalpunkt statt Komma: `138.6`, nicht `138,6`.
- Kommas zwischen den Einträgen und Anführungszeichen um Texte stehen lassen.
- Nach dem Ändern `fachstand` aktualisieren.
- Ist nach einer Änderung die Seite leer, liegt fast immer ein Tippfehler vor (fehlendes Komma, Anführungszeichen). Letzte Version auf GitHub unter «History» wiederherstellen.
