# Portfolio — Patryk Komsta

Personal portfolio site for **Patryk Komsta**, Unity / Game Developer.
Plain HTML, CSS and JavaScript — no build step, no dependencies.

**Live:** https://pkomsta.github.io/Portfolio/

## Structure

```
index.html              Page content
assets/css/styles.css   Dark theme, layout, responsive rules
assets/js/apps.js       App showcase data — edit this to add titles
assets/js/main.js       Renders the app grid, nav, scroll reveal
```

## Adding a shipped app

Everything in the **Shipped work** section is driven by `assets/js/apps.js`.
Add one object per title:

```js
{
  name: "Game Title",
  tagline: "One line on what the game is.",
  role: "What you personally worked on.",
  image: "https://is1-ssl.mzstatic.com/image/thumb/.../512x512bb.jpg",
  tags: ["Unity", "C#", "iOS", "Android"],
  links: {
    appStore: "https://apps.apple.com/app/id000000000",
    googlePlay: "https://play.google.com/store/apps/details?id=com.example.title"
  }
}
```

Only `name` is required; anything omitted is skipped when rendering. If an image
URL fails to load, the card falls back to a lettered tile instead of breaking.

To get an App Store icon URL without hosting the image yourself, call
`https://itunes.apple.com/lookup?id=<APP_ID>` and use the `artworkUrl512` value.

## Running locally

Open `index.html` directly, or serve it:

```bash
python -m http.server 8000
```

## Deploying

Push to `main`, then in **Settings → Pages** set the source to
`Deploy from a branch` → `main` → `/ (root)`.
