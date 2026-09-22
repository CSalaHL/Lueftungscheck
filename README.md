# Planungstools Gebäudetechnik

Sammlung statischer Web-Tools (HTML/CSS/JavaScript, ohne Server) für GitHub Pages.

## Struktur

```
index.html              Startseite mit allen Tools (Kacheln)
manifest.webmanifest    App-Angaben für «Zum Home-Bildschirm»
icons/                  App-Symbole
.nojekyll               verhindert die Jekyll-Verarbeitung durch GitHub
lueftung/index.html     Tool «Lüftungsanforderungen»
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
