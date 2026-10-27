// Everything the site shows. Add a project by adding an entry to PROJECTS.
// Fields:
//   id      short slug, used in URLs (#id)
//   name    display name
//   year    year shown in the Read Me index
//   blurb   one line, for the Read Me index
//   body    paragraphs for the full view; [text](url) makes a link
//   label   optional short name for icons, when name is too long
//   icon    32x32 pixel icon (media/icons/); without one, a drawn disc
//   info    [label, value] rows for the Get Info panel
//   tweets  [{ date, text, href }] links to tweets about the project
//   thumb   poster frame for the video
//   video   optional looping muted clip
//   images  optional extra images
//   scores  optional EyeBench-style score list
//   links   buttons in the full view

window.SITE = {
  name: "Adi Singh",
  intro: [
    "I'm Adi. I'm a student, and I work on whatever I find interesting. Some of it is here.",
    "I used to work at LM Studio.",
  ],
  // Desktop pictures, shown in this order, each dissolving into the next.
  // position is where the picture sits in the spare room, as in CSS object-position (0 to 1).
  // kind "photo" covers the desk with Floyd-Steinberg; "drawing" is fitted whole with an ordered dither.
  // marks is what the dots draw: "dark" parts, "light" parts, or "theme" (dark parts in light mode, light parts in dark mode).
  // Drawings mark their dark lines. Photos of space mark the lit parts, so space stays empty in both modes.
  // All public domain, from Wikimedia Commons.
  pictures: [
    { src: "media/desktop/kepler.jpg", position: [0.8, 0.5], kind: "drawing", marks: "dark" },    // Kepler, Mysterium Cosmographicum, 1596
    { src: "media/desktop/galileo.jpg", position: [0.8, 0.5], kind: "drawing", marks: "dark" },   // Galileo, sketches of the Moon, 1609
    { src: "media/desktop/hooke.jpg", position: [0.8, 0.5], kind: "drawing", marks: "dark" },     // Hooke, a flea, Micrographia, 1665
    { src: "media/desktop/cajal.jpg", position: [0.8, 0.5], kind: "drawing", marks: "dark" },     // Ramón y Cajal, Purkinje neurons, 1899
    { src: "media/desktop/tesla.jpg", position: [0.5, 0.5], kind: "photo", marks: "theme" },       // Tesla's lab in Colorado Springs, 1899
    { src: "media/desktop/eniac.jpg", position: [0.5, 0.5], kind: "photo", marks: "theme" },       // ENIAC, US Army, 1946
    { src: "media/desktop/edwhite.jpg", position: [0.5, 0.5], kind: "photo", marks: "light" },     // Ed White's spacewalk, NASA, 1965
    { src: "media/desktop/eagle.jpg", position: [0.5, 0.5], kind: "photo", marks: "light" },       // Apollo 11 lander Eagle, NASA, 1969
    { src: "media/desktop/ingenuity.jpg", position: [0.5, 0.5], kind: "photo", marks: "theme" },   // Ingenuity's shadow on Mars, NASA/JPL-Caltech, 2021
  ],
  links: [
    { label: "GitHub", href: "https://github.com/adonis-singh" },
    { label: "X", href: "https://x.com/adonis_singh" },
    { label: "Buy me a coffee", href: "https://buymeacoffee.com/adonis_singh" },
  ],
};

window.PROJECTS = [
  {
    id: "mcbench",
    name: "MC-Bench",
    year: 2025,
    blurb: "AI models build in Minecraft, people vote on the builds.",
    body: [
      "A website where people judged Minecraft builds made by AI models. Two models got the same prompt and wrote code to build it. You voted for the better build, then saw which model made which. The votes made a leaderboard.",
      "It started from a conversation with [Aidan McLau](https://x.com/aidan_mclau), who helped bring the team together. A group of volunteers built it. It's offline now, but the code is still up.",
    ],
    icon: "media/icons/mcbench.png",
    info: [
      ["Started", "October 2024"],
      ["Site", "mcbench.ai, offline"],
    ],
    tweets: [
      { date: "Oct 25, 2024", text: "Announcing MC-Bench", href: "https://x.com/adonis_singh/status/1849697262953259452" },
      { date: "Mar 1, 2025", text: "Public voting in 10 days, and the team", href: "https://x.com/adonis_singh/status/1895908048407056889" },
      { date: "Mar 15, 2025", text: "Voting goes live", href: "https://x.com/adonis_singh/status/1900998737675116842" },
    ],
    links: [
      { label: "Code", href: "https://github.com/mc-bench" },
      { label: "TechCrunch article", href: "https://techcrunch.com/2025/03/20/a-high-schooler-built-a-website-that-lets-you-challenge-ai-models-to-a-minecraft-build-off" },
    ],
  },
  {
    id: "eyebench",
    name: "EyeBench",
    year: 2026,
    blurb: "A visual reasoning benchmark for AI models.",
    body: [
      "A visual reasoning benchmark for AI models. It has 100 generated images, 20 for each of five tasks: spot the differences between two panels, count the loops in a tangle of curves, count the separate pieces of a graph, count the turns on a maze path, and pick the tile that completes a 4×4 pattern. Every answer is one number, and it's either right or wrong.",
    ],
    icon: "media/icons/eyebench.png",
    info: [
      ["Started", "September 2025"],
      ["Version", "V3, since March 2026"],
      ["Code", "Private"],
    ],
    tweets: [
      { date: "Feb 27, 2026", text: "EyeBench V2 and its first leaderboard", href: "https://x.com/adonis_singh/status/2027465990024438169" },
      { date: "Mar 10, 2026", text: "Introducing EyeBench V3", href: "https://x.com/adonis_singh/status/2031516743110214015" },
      { date: "Oct 8, 2026", text: "What EyeBench is", href: "https://x.com/adonis_singh/status/2108283869401084201" },
    ],
    images: [
      { src: "media/eyebench-spot-diff-10.jpg", alt: "Spot the differences" },
      { src: "media/eyebench-topology-21.jpg", alt: "Count the loops" },
      { src: "media/eyebench-graph-41.jpg", alt: "Count the pieces of a graph" },
      { src: "media/eyebench-pattern-61.jpg", alt: "Complete the pattern" },
      { src: "media/eyebench-maze-100.jpg", alt: "Count the turns in a maze" },
    ],
    scores: {
      updated: "October 27, 2026",
      rows: [
        { model: "GPT-6 Astra", effort: "max", pct: 95 },
        { model: "GPT-6.1 Terra", effort: "max", pct: 94 },
        { model: "GPT-6 Astra", effort: "xhigh", pct: 93 },
        { model: "GPT-6.1 Sol", effort: "max", pct: 93 },
        { model: "GPT-6 Astra", effort: "high", pct: 88 },
        { model: "GPT-6.1 Sol", effort: "xhigh", pct: 87 },
        { model: "GPT-6 Astra", effort: "low", pct: 82 },
        { model: "GPT-6 Astra", effort: "medium", pct: 82 },
        { model: "GPT-6.1 Sol", effort: "high", pct: 80 },
        { model: "Claude Opus 5.5", effort: "max", pct: 78 },
        { model: "Claude Sonnet 5.5", effort: "max", pct: 71 },
        { model: "Claude Opus 5.5", effort: "xhigh", pct: 69 },
      ],
    },
    links: [{ label: "Leaderboard", href: "https://adonis-singh.github.io/eyebench/" }],
  },
  {
    id: "trevorswing",
    name: "trevorswing",
    year: 2026,
    blurb: "Spider-Man 2's web swinging in GTA V.",
    body: [
      "Spider-Man 2's web swinging in GTA V, as Trevor. I'm porting the movement and combat code from Marvel's Spider-Man 2 on PC into a GTA V script, and checking it frame by frame against the real game. The plan is to turn it into its own game that runs off your copies of both.",
    ],
    icon: "media/icons/trevorswing.png",
    info: [
      ["Language", "C++"],
      ["Made with", "Claude Opus 5.5, some GPT-6.1 Sol"],
      ["Started", "September 30, 2026"],
      ["Status", "In progress"],
      ["Code", "Private"],
    ],
    tweets: [
      { date: "Oct 5, 2026", text: "First look, next to Spider-Man 2", href: "https://x.com/adonis_singh/status/2107161788710019137" },
      { date: "Oct 7, 2026", text: "A longer cut, with sound", href: "https://x.com/adonis_singh/status/2107855701510860827" },
      { date: "Oct 11, 2026", text: "The combat overhaul", href: "https://x.com/adonis_singh/status/2109262601565991423" },
    ],
    thumb: "media/trevorswing.jpg",
    video: "media/trevorswing.mp4",
    links: [],
  },
  {
    id: "re4",
    name: "Resident Evil 4 decompilation",
    year: 2026,
    blurb: "A 2004 GameCube prototype of Resident Evil 4, decompiled.",
    body: [
      "A full decompilation of a Resident Evil 4 prototype for GameCube, dated November 25, 2004. Its discs came with symbol files that name every function. The result is 570,000 lines of C and C++ that, built with the compilers Capcom used, produce the original game files byte for byte.",
    ],
    label: "RE4 decomp",
    info: [
      ["Build", "G4BE08, debug, November 25, 2004"],
      ["Source", "570,000 lines of C and C++"],
      ["Output", "main.dol and 114 RELs, byte for byte"],
      ["Compilers", "SN Systems ProDG 3.9.3, Metrowerks CodeWarrior"],
      ["Made with", "Claude Fable 5.1, in under a week"],
      ["Released", "September 15, 2026"],
    ],
    tweets: [
      { date: "Sep 15, 2026", text: "The announcement", href: "https://x.com/adonis_singh/status/2099836977793085525" },
      { date: "Sep 15, 2026", text: "Matching the original compilers", href: "https://x.com/adonis_singh/status/2099836988605989044" },
      { date: "Sep 15, 2026", text: "Things found in the code", href: "https://x.com/adonis_singh/status/2099836985581985903" },
    ],
    links: [{ label: "Code", href: "https://github.com/adonis-singh/re4" }],
  },
  {
    id: "tmnf",
    name: "TMNF-C",
    year: 2026,
    blurb: "TrackMania Forever's physics in C, for reinforcement learning.",
    body: [
      "TrackMania Forever's physics rewritten in C, so reinforcement learning agents can train on it much faster than the game runs. It's tested against the real game on 212 tracks. In one experiment, a model of a fruit fly's brain drives the car.",
    ],
    icon: "media/icons/tmnf.png",
    info: [
      ["Language", "C, with CUDA"],
      ["Tick rate", "100 Hz, same as the game"],
      ["Made with", "Claude Fable 5.1, then GPT-6 Astra"],
      ["Released", "September 6, 2026"],
    ],
    tweets: [
      { date: "Sep 2, 2026", text: "The physics rewrite, in about a day", href: "https://x.com/adonis_singh/status/2095158753796497550" },
      { date: "Sep 6, 2026", text: "212 tracks, and the code", href: "https://x.com/adonis_singh/status/2096691272643752027" },
      { date: "Sep 12, 2026", text: "A fruit fly learning TrackMania", href: "https://x.com/adonis_singh/status/2098691347901247977" },
      { date: "Sep 13, 2026", text: "How the fly learns", href: "https://x.com/adonis_singh/status/2099079774303924383" },
    ],
    thumb: "media/tmnf.jpg",
    video: "media/tmnf.mp4",
    links: [{ label: "Code", href: "https://github.com/adonis-singh/TMNF-C" }],
  },
];
