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

Die veröffentlichte Seite ist anschließend unter
`https://jason0985.github.io/boardGameRaking/` erreichbar.
