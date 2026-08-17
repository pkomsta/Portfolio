/* ============================================================
   App showcase data
   ------------------------------------------------------------
   Add one object per shipped title. Every field except `name`
   is optional — omitted fields are simply skipped when rendering.

   {
     name:    "Game Title",                  // required
     tagline: "One line on what the game is",
     role:    "What you personally did on it",
     image:   "https://.../icon.png",        // must be https://
     tags:    ["Unity", "C#", "Firebase"],
     links: {
       appStore:   "https://apps.apple.com/app/id...",
       googlePlay: "https://play.google.com/store/apps/details?id=...",
       website:    "https://..."
     }
   }

   Getting an App Store icon URL without hosting the file yourself:
     https://itunes.apple.com/lookup?id=<APP_ID>
   returns JSON containing `artworkUrl512`. Use that value directly.
   ============================================================ */

window.APPS = [
  // TODO: replace with real titles.
  // {
  //   name: "Example Title",
  //   tagline: "Casual puzzle game with 200+ handcrafted levels.",
  //   role: "Gameplay systems, UI/UX, Firebase & IAP integration, LiveOps.",
  //   image: "https://is1-ssl.mzstatic.com/image/thumb/.../512x512bb.jpg",
  //   tags: ["Unity", "C#", "iOS", "Android"],
  //   links: {
  //     appStore: "https://apps.apple.com/app/id000000000",
  //     googlePlay: "https://play.google.com/store/apps/details?id=com.example.title"
  //   }
  // },
];
