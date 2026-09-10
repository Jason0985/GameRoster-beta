# Board Game Scoreboard

Eine Angular-App zum Verwalten von Spielern, Rundenpunkten und dem finalen Ranking.
Das Angular-Projekt liegt direkt im Repository-Root.

## Entwicklung

```bash
npm install
npm start
```

Die App ist danach unter `http://localhost:4200/` erreichbar.

## Build und Tests

```bash
npm run build
npm test
```

Der Produktionsbuild wird unter `dist/` erzeugt.

## GitHub Pages

Das Repository verwendet den Namen `boardGameRaking`. Der Pages-Build setzt deshalb
automatisch den Unterpfad `/boardGameRaking/`:

```bash
npm run deploy
```

Das Deploy-Script veröffentlicht `dist/frontend/browser` auf dem Branch `gh-pages`.

In GitHub unter **Settings > Pages** auswählen:

- **Source:** Deploy from a branch
- **Branch:** `gh-pages`
- **Folder:** `/ (root)`

## Geplante Architektur

Die Anwendung bleibt eine Angular-PWA und kann weiterhin über GitHub Pages
veröffentlicht und auf dem Handy installiert werden.

### Zuständigkeiten der Speicher

- `localStorage`: kleine lokale Einstellungen wie Theme oder zuletzt geöffnete Ansicht
- IndexedDB: Offline-Daten, lokale Entwürfe und noch nicht synchronisierte Ergebnisse
- Supabase/PostgreSQL: Profile, Seasons, Mitglieder, Spiele und Rankings
- Service Worker: Caching der App-Dateien, aber keine zentrale Datenbank

Die aktuelle Spielerliste wird noch unter dem lokalen Schlüssel
`boardgame:players` gespeichert. Das ist für den Prototypen ausreichend, aber die
Daten werden nicht zwischen Geräten synchronisiert.

### Zielarchitektur

```text
Angular-PWA auf GitHub Pages
        |
        | HTTPS und Authentifizierung
        v
Supabase Auth und PostgreSQL
        |
        v
Profile, Seasons, Spiele und Rankings
```

Für den Offline-Modus werden lokale Änderungen zunächst in IndexedDB gespeichert.
Sobald wieder eine Internetverbindung besteht, werden sie mit dem Backend
synchronisiert.

## Meilensteine

### Meilenstein 1: Datenmodell und aktueller Prototyp

- Lokale Spiellogik stabilisieren
- Datenmodell für mehrere Spiele und Seasons festlegen
- Lokale Datenzugriffe aus der UI kapseln

**Aufwand:** ungefähr 0,5 bis 1 Tag

### Meilenstein 2: Supabase und Authentifizierung

- Supabase-Projekt anlegen
- Registrierung und Login ergänzen
- Profile mit Benutzern verbinden
- Entwicklungs- und Produktionsumgebung trennen
- Row Level Security für alle Tabellen aktivieren

**Aufwand:** ungefähr 1 bis 2 Tage

### Meilenstein 3: Seasons und Spieler

- Seasons erstellen, umbenennen und archivieren
- Spieler einer Season hinzufügen oder entfernen
- Seasons aus dem Backend laden
- Lokale Spielerliste durch Backend-Daten ersetzen

**Aufwand:** ungefähr 1 bis 2 Tage

### Meilenstein 4: Spiele und Rankings

- Abgeschlossene Spiele dauerhaft speichern
- Runden und Punktestände speichern
- Ranking aus den Ergebnissen berechnen
- Bereits gespeicherte Spiele korrigieren können

Das Ranking sollte aus den gespeicherten Ergebnissen berechnet werden und nicht
die einzige gespeicherte Datenquelle sein.

**Aufwand:** ungefähr 2 bis 4 Tage

### Meilenstein 5: Beitreten per Link oder QR-Code

- Season-Einladung erzeugen
- Einladung als Link teilen
- QR-Code aus dem Einladungslink erzeugen
- Einladung annehmen und Season beitreten
- Einladungen widerrufen oder zeitlich begrenzen

Der QR-Code enthält nur einen zufälligen Einladungscode oder Einladungslink.
Die Berechtigungen werden immer im Backend geprüft.

**Aufwand:** ungefähr 1 bis 2 Tage

### Meilenstein 6: Offline-Modus mit IndexedDB

- Relevante Daten lokal zwischenspeichern
- Neue Ergebnisse offline erfassen
- Offene Änderungen in einer Synchronisationswarteschlange speichern
- Bei bestehender Verbindung automatisch synchronisieren
- Synchronisationsfehler anzeigen

**Aufwand:** ungefähr 2 bis 4 Tage

### Meilenstein 7: Weitere Brettspiele

- Spiele nicht fest in einzelne Komponenten einbauen
- Spielregeln und Wertungsarten als Konfiguration oder Module modellieren
- Unterschiedliche Spieleranzahlen und Punktearten unterstützen
- Seasons unabhängig vom konkreten Spiel verwalten

**Aufwand:** ungefähr 2 bis 5 Tage

## Sicherheitsgrundlagen

- Ausschließlich HTTPS verwenden
- Keine Passwörter oder privaten Daten in localStorage speichern
- Backend-Zugriffe authentifizieren
- Row Level Security für Seasons, Mitglieder und Spiele verwenden
- Einladungscodes zufällig und ausreichend lang erzeugen
- Einladungscodes mit Ablaufzeit und Widerruf versehen
- Datenbank-Backups und Löschmöglichkeiten einplanen
- Keine vertraulichen API-Schlüssel im Repository oder Frontend speichern

Die GitHub-Pages-URL ist kein Zugriffsschutz. Alles, was im Browser ausgeführt
wird, kann von Benutzern eingesehen werden.