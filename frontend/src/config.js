// ============================================================
//  ALL personal content for the birthday site lives here.
//  Edit this file only — every component reads from it.
//  Look for "REPLACE ME" comments.
// ============================================================

const config = {
  // REPLACE ME: her name as you want it shown everywhere
  name: "Manvi Didi",

  // REPLACE ME: drop your song at /public/assets/song.mp3 (or change the path)
  song: {
    src: "/assets/song.mp3",
    title: "Happy Birthday Manvi", // REPLACE ME
  },

  // REPLACE ME: put photos in /public/assets/photos/ — add or remove items freely
  photos: [
    { src: "/assets/photos/photo 1.jpg", caption: "Main character vibe" },
    { src: "/assets/photos/photo 2.jpg", caption: "Pink Queen" },
    { src: "/assets/photos/photo 3.jpg", caption: "Gorgeous" , fit: "contain" },
    { src: "/assets/photos/photo 4.jpg", caption: "Sanskari " },
    { src: "/assets/photos/photo 5.jpg", caption: "Bewdi Didi" },
    { src: "/assets/photos/photo 6.jpg", caption: "Senior Didi !" },
    { src: "/assets/photos/photo 7.jpg", caption: "Senior-Junior Moment" , fit: "contain" },
    { src: "/assets/photos/photo 8.jpg", caption: "Tuning Together" },
    { src: "/assets/photos/photo 9.jpg", caption: "Missing this moment" },
    { src: "/assets/photos/photo 10.jpg", caption: "Best pic we have together" },
    { src: "/assets/photos/photo 11.jpg", caption: "Past but special" , fit: "contain" },
    { src: "/assets/photos/photo 12.jpg", caption: "No Caption for this" },
    { src: "/assets/photos/photo 13.jpg", caption: "Milestone achieved!" },
  ],

  // REPLACE ME: surprise picture + caption
  surprise: {
    src: "/assets/surprise.png",
    caption: "Happy Birthday wish from someone you really admire!",
  },

  // REPLACE ME: your personal note (use \n\n for new paragraphs)
  note: {
    text: "Happy Birthday, Manvi Didi! ❤️🎂✨\n\nI don't think I can ever put into words how much you mean to me, but today, I just want to tell you something that I probably don't say enough.\n\nThank you for being that person who always listens to my rants, no matter how random, unnecessary, or completely senseless they might be. 😭❤️ Thank you for listening to me even when my stories probably make no sense, when I overthink the smallest things, or when I just need someone to talk to without even having a proper reason. You never make me feel like I'm being too much, and more importantly, you never judge me for being myself. And honestly, that means more to me than you probably realise.\n\nIt's a rare thing to find someone with whom you can talk about absolutely anything without having to think twice about how you'll be perceived. You've been that person for me, and I'm genuinely grateful for it. Sometimes, you might think you're just listening to another one of my endless rants, but for me, those little conversations mean a lot. They make things feel a little lighter, and they remind me that I have someone I can turn to. Thank you for always being there, for hearing me out, and for making me feel understood without making me explain myself a hundred times. 🫶🏻\n\nAnd Didi, there's one thing I want you to know: you are, and will always be, unforgettable and irreplaceable to me. No matter how much time passes, how much life changes, or how many new people we meet along the way, you'll always have a special place in my heart that nobody else can take. Some people become important to us without even realising the extent of it, and you're one of those people for me.\n\nI'm genuinely lucky that I got you as my senior, but somewhere along the way, you became so much more than just a senior to me. You became someone I feel comfortable with, someone I look up to, and someone whose presence I'm really glad to have in my life. ❤️\n\nOn your birthday, I wish you all the happiness you deserve and so much more. I hope life gives you countless reasons to smile, people who understand you the way you understand others, and the kind of love and care that you so effortlessly give to the people around you. I hope all your dreams come true, and whenever life gets difficult, you always find someone who listens to you just as patiently as you've listened to me.\n\nAnd obviously, no matter how old you get, you'll still have to tolerate your favourite junior's nonsense and endless rants. There's no escaping that responsibility now. 😭😂❤️\n\nHappy Birthday once again to my favourite senior, from probably your favourite junior. 🤭🫂❤️\n\nThank you for being YOU, Manvi Didi. For your patience, your kindness, your understanding, and for simply being someone I can count on. I hope you never forget how special you are to the people who care about you, especially to this one particular junior who might annoy you with his rants but will always be grateful to have you in his life.\n\nLots of love, always. ❤️🧿✨",
    signature: "- Your Fav. Junior", // REPLACE ME: your name
  },

  // REPLACE ME: number of candles on the cake
  candleCount: 5,

  // REPLACE ME: her birthday — the gift stays locked behind a countdown until
  // midnight (her phone's time) on this date. month is 1-12.
  // Tip: add ?preview to the URL to skip the lock while testing.
  birthday: { year: 2026, month: 10, day: 27, hour: 0 },

  // ---------------- Every text string on the site ----------------
  text: {
    nav: { next: "Next", music: "Toggle music" },

    landing: {
      line1: "Psst...",
      line2: "Manvi Didi, this is for YOU", // REPLACE ME
      button: "Open it",
      hint: "turn your sound on",
      lockedLine: "Not yet, Didi! Your gift unlocks in",
      units: ["days", "hrs", "mins", "secs"],
      unlocked: "It's time!",
    },

    welcome: {
      typed: "Happy Birthday, Manvi Didi!", // REPLACE ME
      typedSub: "(Yes, you're getting older. Sorry.)",
    },

    cake: {
      title: "Make a wish & blow!",
      micButton: "Blow into the mic",
      micListening: "Listening... blow hard!",
      micDenied: "No mic? No problem.",
      tapButton: "Tap to blow",
      tapSmall: "or tap to blow",
      popupTitle: "Happy Birthday!",
      popupSub: "All wishes sent to the universe.",
      relight: "Nice try. Make another wish",
      done: "Okay okay, that one counts. Wish granted!",
    },

    gallery: {
      title: "Little moments",
      subtitle: "tap a polaroid",
      prev: "Previous photo",
      next: "Next photo",
      close: "Close",
    },

    note: {
      title: "A little letter",
      tapHint: "tap the envelope",
    },

    rage: {
      title: "Don't click this",
      subtitle: "(you're going to anyway)",
      counter: "Times you got rage-baited:",
      young: { button: "Click if you're aging", final: "Haha, you wish to be a buddhi amma." },
      age: { button: "Click to see your age", loading: "Loading", error: "Error: number too big" },
      sibling: { question: "Am I your favourite junior?", yes: "Yes", no: "No", answer: "Correct answer. Obviously." },
      gift: { button: "Claim your gift", final: "Gift is my Aashirwad. You're welcome." },
      danger: { button: "Do NOT press", alertTitle: "Uh oh...", alert: "Playing my very bad singing video...", kidding: "Just kidding", ok: "Phew" },
      starsTitle: "Tap the stars",
      // REPLACE ME: heartfelt lines hidden behind the stars
      stars: [
        "Thank you for always being there",
        "You're my forever best friend",
        "Every scolding was care",
        "I'm so lucky you're my Senior Didi",
      ],
    },

    surprise: {
      title: "Your special surprise",
      hint: "scratch the card",
      cover: "Scratch me!",
    },

    sorry: {
      emoji: "🧸",
      line1: "Didi... one small confession.",
      line2: "I used your photos without asking permission.",
      forgive: "Forgive me",
      no: "No",
      thanks: "Thank you, Didi! Love you loads.",
      replay: "Watch it again",
    },
  },
};

export default config;
