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
  {
    name: "PKGG — Easy Poker Clubs",
    tagline: "Create your poker club and play Texas Hold'em with friends anytime.",
    role: "Real-time poker platform built from scratch — client-side UI/UX, backend gameplay messaging, and state synchronization.",
    image: "https://play-lh.googleusercontent.com/n4Da0t_GjKOuj-Cz1NtcWO6hxjAAV4J_1Hy5XkfdH90P04aVuwFv68ruhzLmqXDDgI_DAhZNX-fuciDC7o98=s512",
    tags: ["Unity", "C#", "Multiplayer", "iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/pl/app/pkgg/id6749947063?l=pl",
      googlePlay: "https://play.google.com/store/apps/details?id=com.pkgg"
    }
  },
  {
    name: "Dig out! Gold Mine Game",
    tagline: "Dig deep into the mine for treasure and gold — mind the maze.",
    role: "Unity gameplay, SDK integration (Firebase, ad mediation, IAP) and LiveOps support.",
    image: "https://play-lh.googleusercontent.com/Bht52ZnKIvq98w99mNtCMNYrmUR6CDO4jEg-AnzQHlYwP2lI8DC1v4sW7Q78LmTxlkOpf8G_pVKQ-Qfk6r13HQs=s512",
    tags: ["Unity", "C#", "iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/us/app/dig-out-mine-adventure/id1135368655",
      googlePlay: "https://play.google.com/store/apps/details?id=com.bandagames.miner&hl=en"
    }
  },
  {
    name: "Food Fighter Clicker",
    tagline: "Mukbang clicker — tap to eat your way through the menu.",
    role: "Unity gameplay, SDK integration (Firebase, ad mediation, IAP) and LiveOps support.",
    image: "https://play-lh.googleusercontent.com/lbJnrjVzCRjMj9Xe0TfbVUAdj6ouR_4wmeDIefq_5fu8CN27Gu7WLBqNOMkP7qHRRDUnYS9DnkXXYv0NOm6N_g=s512",
    tags: ["Unity", "C#", "Idle", "iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/us/app/food-fighter-clicker-mukbang/id1639538320",
      googlePlay: "https://play.google.com/store/apps/details?id=com.fffungame.foodclicker&hl=en"
    }
  },
  {
    name: "Ninja Ryuko: Shadow Ninja",
    tagline: "Offline action game — shadow fighting between samurai and ninja hunter.",
    role: "Unity gameplay, SDK integration (Firebase, ad mediation, IAP) and LiveOps support.",
    image: "https://play-lh.googleusercontent.com/oMHga1wJ4xciQqWWPLD1WuzMdNkSHCT0hZ-UDnOYhrzaugHZTsm4vhiR4KQ_Q9JSgdPOv7s8LWY4pLXHIWH0=s512",
    tags: ["Unity", "C#", "Action", "Android"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.HorizonGames.HuntCreed&hl=en"
    }
  },
  {
    name: "Idle Monster TD",
    tagline: "Idle tower defense — become a master monster trainer in battle.",
    role: "Unity gameplay, SDK integration (Firebase, ad mediation, IAP) and LiveOps support.",
    image: "https://play-lh.googleusercontent.com/mnYhlPKismZFnnTtN9s18vyRSFiaoYIJ0VK3IOxD33ySy0dbgl-korXW-hy5CPQtpuH2I1w8foLkbBOidMzM=s512",
    tags: ["Unity", "C#", "Tower Defense", "iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/pl/app/idle-monster-td-tower-defense/id1608286308?l=pl",
      googlePlay: "https://play.google.com/store/apps/details?id=com.SwellGames.IdleMonsterTDEvolved&hl=en"
    }
  },
  {
    name: "Tap Tap Run | Clicker Games",
    tagline: "Clicking and tapping clicker game — run and idle your way up.",
    role: "Unity gameplay, SDK integration (Firebase, ad mediation, IAP) and LiveOps support.",
    image: "https://play-lh.googleusercontent.com/lLxN_8DS6L53j3q5ujgJIb59WEYZm38AyQmJTrdnRqAhOiTZY-xCMNIPkXG8t12fnBR1bFdm_eCt9HKdCDYy9YY=s512",
    tags: ["Unity", "C#", "Idle", "iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/np/app/tap-tap-run-speed-clicker/id1640518375",
      googlePlay: "https://play.google.com/store/apps/details/Tap_Tap_Run_Idle_Games?id=com.fffungame.taptaprun&hl=pl"
    }
  },
  {
    name: "Cooking Team: Cooking Games",
    tagline: "Be the chef in a fast-paced restaurant decorating and cooking game.",
    role: "Unity gameplay, SDK integration (Firebase, ad mediation, IAP) and LiveOps support.",
    image: "https://play-lh.googleusercontent.com/h8U1nNPvrU4_4mfAoC6HUaTHGfACBH5A9gL7nFdmauSWFL9x3M6-6pdEPC8kBuq4URMfeiSFS2PodmW2n0XDmmk=s512",
    tags: ["Unity", "C#", "Simulation", "iOS", "Android"],
    links: {
      appStore: "https://apps.apple.com/pl/app/cooking-team-restaurant-games/id1522265683?l=pl",
      googlePlay: "https://play.google.com/store/apps/details?id=com.cookingteamrestaurant&hl=en"
    }
  },
  {
    name: "Bubble Pop Games: Shooter",
    tagline: "Classic bubble-shooter — clear every level and become a legend.",
    role: "Unity gameplay, SDK integration (Firebase, ad mediation, IAP) and LiveOps support.",
    image: "https://play-lh.googleusercontent.com/dqJvERqvzTWmxb9nSYnYUwDKRHHODVgBlkMmF6vJ1gGL3oI_R-tN3oh-zeL8YE6Rx6bKWxsktRiU9LVZJqVK=s512",
    tags: ["Unity", "C#", "Puzzle", "Android"],
    links: {
      googlePlay: "https://play.google.com/store/apps/details?id=com.madovergames.FrozenPop&hl=en"
    }
  },
];
