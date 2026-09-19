# Bbokari's Kitchen: The Brownie Lab

A cozy brownie website that also works as an installable app (a PWA). It has recipes, brownie science charts, a scaling calculator, a bake timer, an ingredient checklist, a style picker and an anonymous message box.

Made by @minberrydiary aka Tulika 🌷

> Unofficial fan project. Not affiliated with Stray Kids, JYP Entertainment or Felix.

## What's inside

```
index.html               the whole site (HTML, CSS and JavaScript in one file)
manifest.webmanifest     tells phones this is an app (name, icons, colors)
sw.js                    service worker, lets the site work offline
logo.webp                the round logo
hero.jpg                 the star background at the top of the home page
mascot.jpg               Bbokari on the Vote tab
icon-192.png             app icon
icon-512.png             app icon (large)
icon-maskable-512.png    app icon for Android's round and squircle shapes
apple-touch-icon.png     app icon for iPhone
```

All files sit together in one place. There are **no sub-folders**, so you can upload them straight to GitHub.

## 1. Try it on your computer

The service worker only runs on a web server, so don't just double-click index.html for the app features.

- **VS Code:** install the "Live Server" extension, right-click `index.html`, choose "Open with Live Server".
- **Or with Python:** open a terminal in this folder and run `python -m http.server 8000`, then open http://localhost:8000

## 2. Put it online for free

The app features (install button, offline mode) need **https**. These are free and easy:

**GitHub Pages**
1. Make a new public repository on github.com.
2. Click "Add file", then "Upload files". Unzip the ZIP first, select **all 11 files** and drag them in (or use "choose your files"). Don't upload the ZIP itself, because GitHub can't unzip it. Then click "Commit changes".
3. Go to Settings, then Pages. Under "Build and deployment", choose "Deploy from a branch", pick `main` and `/ (root)`, and save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/YOUR-REPO/`

**Netlify Drop (fastest)**
1. Go to app.netlify.com/drop.
2. Drag the unzipped folder onto the page. You get a link right away.

## 3. Install it as an app

- **Android (Chrome):** open the site, tap the menu (three dots), then "Install app" or "Add to Home screen".
- **iPhone (Safari):** tap the Share button, then "Add to Home Screen".
- **Computer (Chrome or Edge):** click the install icon at the right end of the address bar.

## 4. Things you can edit

Open `index.html` and search for these:

| What | Where to look |
|---|---|
| NGL message link | `MSG_URL` near the top of the `<script>` |
| Community poll link (shows a poll button on the Vote tab) | `FORM_URL`, right below `MSG_URL` |
| Recipes and amounts | the `R` object (grams for each ingredient) |
| How many pieces a batch makes | `pieces` inside each recipe (they are estimates, update them after you bake) |
| Colors | the `:root` block at the top of the `<style>` |
| Footer credit | the `<footer>` near the bottom of the page |

Each ingredient row looks like `["Name", amount, kind]`. The kind is grams-per-cup for weighed ingredients, `"egg"` for eggs, or `"tsp"` when the amount is in teaspoons.

## 5. Updating the site after you change something

Phones save a copy of the site so it works offline. To make sure everyone gets your new version, open `sw.js` and change `bbokaris-kitchen-v2` to `bbokaris-kitchen-v3` (then v4 and so on), then upload the files again.

## Troubleshooting

- **I don't see my changes:** hard refresh (Ctrl + Shift + R), or bump the version in `sw.js` as above.
- **No install button:** the site must be on https, and you may need to visit it once or twice first.
- **Timer doesn't beep:** phones can block sounds when the screen is locked or the phone is on silent. Keep the screen on while baking.
- **Fonts look different offline:** the fonts come from Google Fonts and need to load once online. After that they are saved.
- **Vote tab:** picks are saved only on each visitor's own device. For real counts, make a Google Form or YouTube poll and paste its link into `FORM_URL`.

## Credits and notes

- Logo and wallpaper layouts were designed by the site owner in Canva.
- Bbokari is a SKZOO character, and the character belongs to its original creators. Please keep this project free and non-commercial, and credit the original artist if you know who made the chick artwork.
- Recipes are fan reconstructions from public posts about Felix's brownies. No official written recipe with exact amounts exists, so every amount is an estimate until you test it.
- NGL is a separate service with its own rules.
