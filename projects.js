// Everything the site shows. Add a project by adding an entry to PROJECTS.
// Fields:
//   id      short slug, used in URLs (#id)
//   name    display name
//   year    year shown in the Read Me index
//   blurb   one line, for the Read Me index
//   body    paragraphs for the full view; [text](url) makes a link
//   label   optional short name for icons, when name is too long
//   icon    32x32 1-bit icon (media/icons/), black on white, transparent outside; the same name
//           with -selected and -open is the icon selected and with its window open
//   info    [label, value] rows for the Get Info panel
//   tweets  [{ date, text, href }] links to tweets about the project
//   thumb   poster frame for the video
//   video   optional looping muted clip
//   frames  optional { rate, count } of the video, as ffprobe gives them: adds step buttons, a frame counter,
//           and the , . keys (and ← → while paused) for stepping one frame
//   run     optional { src, caption }: a car's path from above, drawn tick by tick in real time.
//           src is JSON { tickMs, paths: [[x, y, z, ...], ...] }, a position per tick up to the finish for
//           each path. The first path is drawn as a line with a dot, the others as a square on their
//           own position. caption goes under it, followed by how many ticks all paths agree on.
//   images  optional extra images [{ src, thumb, alt }]; thumb is a 240px square crop for the window's composite,
//           and the images window shows src
//   scores  { page, source, top }: the top models from an EyeBench leaderboard's data file, each at its
//           highest tested effort, with a link to the full leaderboard page
//   check   { file, command, page }: a project's own build check. file is a copy of the checksum list the
//           build checks against ("<sha1>  <path>" per line), command is the command that checks it, and
//           page is the list in the repo. The window shows the command and what it prints after a
//           matching build, "<path>: OK" for each file as dtk shasum -c prints it, then the count
//           ("115 files OK", as dtk shasum -q prints it). The lines are shown, not checked, in the browser.
//   links   buttons in the full view

window.SITE = {
  name: "Adi Singh",
  intro: [
    "I'm Adi Singh, a student. I build benchmarks for AI models, and I decompile and port games.",
    "Previously [@lmstudio](https://x.com/lmstudio)",
  ],
  // Desktop pictures. One is picked at random, and every few minutes another dissolves in.
  // id names the picture for next.
  // next lists the pictures that rhyme with this one; the next to dissolve in is one of them, at random.
  // title and page are what Desktop > About This Picture… shows and links to: the picture's source page.
  // position is the point of the picture (0 to 1 across and down) where its subject is; the desk puts it
  // in the middle of the room, the open part of the desk beside the icons and right of where windows open.
  // kind "photo" is drawn with Floyd-Steinberg in the middle of the room and fades into the paper toward its edges;
  // "drawing" is fitted whole with an ordered dither.
  // marks is what the dots draw: "dark" parts, "light" parts, or "theme" (dark parts in light mode, light parts in dark mode).
  // Drawings mark their dark lines. Photos of space mark the lit parts, so space stays empty in both modes.
  // Ingenuity's shadow is "theme", so it is dark in both modes.
  // paper, optional for a photo: the share of the ink scale, palest first, that stays bare paper (0.3 if not set).
  // A busy photo sets it higher so only its strongest tones draw.
  // All public domain, from Wikimedia Commons.
  pictures: [
    {
      id: "kepler", next: ["galileo", "tesla"],
      src: "media/desktop/kepler.jpg", position: [0.5, 0.5], kind: "drawing", marks: "dark",
      title: "Kepler's model of the solar system, 1596",
      page: "https://commons.wikimedia.org/wiki/File:Mysterium_Cosmographicum_solar_system_model.jpg",
    },
    {
      id: "galileo", next: ["hooke", "eagle"],
      src: "media/desktop/galileo.jpg", position: [0.5, 0.5], kind: "drawing", marks: "dark",
      title: "Galileo's drawings of the Moon, 1609",
      page: "https://commons.wikimedia.org/wiki/File:Galileo%27s_sketches_of_the_moon.png",
    },
    {
      id: "hooke", next: ["cajal", "ingenuity"],
      src: "media/desktop/hooke.jpg", position: [0.5, 0.5], kind: "drawing", marks: "dark",
      title: "A flea, from Hooke's Micrographia, 1665",
      page: "https://commons.wikimedia.org/wiki/File:HookeFlea01.jpg",
    },
    {
      id: "cajal", next: ["tesla", "eniac"],
      src: "media/desktop/cajal.jpg", position: [0.5, 0.5], kind: "drawing", marks: "dark",
      title: "Purkinje neurons, drawn by Ramón y Cajal, 1899",
      page: "https://commons.wikimedia.org/wiki/File:PurkinjeCell.jpg",
    },
    {
      id: "tesla", next: ["eniac", "cajal"],
      src: "media/desktop/tesla.jpg", position: [0.35, 0.55], kind: "photo", marks: "theme", paper: 0.55,
      title: "Tesla's lab in Colorado Springs, 1899",
      page: "https://commons.wikimedia.org/wiki/File:Tesla_colorado_adjusted.jpg",
    },
    {
      id: "eniac", next: ["edwhite", "kepler"],
      src: "media/desktop/eniac.jpg", position: [0.42, 0.55], kind: "photo", marks: "theme",
      title: "ENIAC, 1946",
      page: "https://commons.wikimedia.org/wiki/File:Classic_shot_of_the_ENIAC_(full_resolution).jpg",
    },
    {
      id: "edwhite", next: ["eagle", "galileo"],
      src: "media/desktop/edwhite.jpg", position: [0.42, 0.52], kind: "photo", marks: "light",
      title: "Ed White, the first American spacewalk, 1965",
      page: "https://commons.wikimedia.org/wiki/File:Ed_White_performs_first_U.S._spacewalk_-_GPN-2006-000025-crop.jpg",
    },
    {
      id: "eagle", next: ["ingenuity", "hooke"],
      src: "media/desktop/eagle.jpg", position: [0.54, 0.5], kind: "photo", marks: "light",
      title: "The Apollo 11 lander Eagle over the Moon, 1969",
      page: "https://commons.wikimedia.org/wiki/File:Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg",
    },
    {
      id: "ingenuity", next: ["kepler", "edwhite"],
      src: "media/desktop/ingenuity.jpg", position: [0.49, 0.45], kind: "photo", marks: "theme",
      title: "Ingenuity's shadow on Mars, from its first flight, 2021",
      page: "https://commons.wikimedia.org/wiki/File:Ingenuity%27s_First_Black-and-White_Image_From_the_Air.jpg",
    },
  ],
  // Buttons at the bottom of the Read Me, and items in the Adi Singh menu. glyph is an icon drawn
  // before the label: "mail", "x" or "github". menu is the item's name in the menu, when it differs from label.
  contact: [
    { label: "Email", glyph: "mail", href: "mailto:getaditya2008@gmail.com" },
    { label: "DM me", menu: "DM me on X", glyph: "x", href: "https://x.com/messages/compose?recipient_id=1591379820658696192" },
  ],
  // Items at the end of the Adi Singh menu. bar: true puts the link on the menu bar too, at the right,
  // named label. button: true puts it among the Read Me's buttons too, after the contact buttons, with its glyph.
  // menu is the item's name in the menu, when it differs from label.
  links: [
    { label: "GitHub", glyph: "github", href: "https://github.com/adonis-singh", bar: true, button: true },
    { label: "X", menu: "@adonis_singh on X", href: "https://x.com/adonis_singh", bar: true },
    { label: "Buy me a coffee", href: "https://buymeacoffee.com/adonis_singh" },
  ],
};

window.PROJECTS = [
  {
    id: "mcbench",
    name: "MC-Bench",
    year: 2025,
    blurb: "AI models built in Minecraft, and people voted on the builds.",
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
      { date: "Oct 25, 2024", text: "The announcement", href: "https://x.com/adonis_singh/status/1849697262953259452" },
      { date: "Mar 1, 2025", text: "Public voting in 10 days, and the team", href: "https://x.com/adonis_singh/status/1895908048407056889" },
      { date: "Mar 15, 2025", text: "Voting goes live", href: "https://x.com/adonis_singh/status/1900998737675116842" },
    ],
    links: [
      { label: "Code", href: "https://github.com/mc-bench" },
      { label: "TechCrunch article", href: "https://techcrunch.com/2025/03/20/a-high-schooler-built-a-website-that-lets-you-challenge-ai-models-to-a-minecraft-build-off" },
    ],
  },
  {
    id: "mcbench-lite",
    name: "mcbench-lite",
    year: 2026,
    blurb: "Chat with an AI model that builds in Minecraft, on your own machine.",
    body: [
      "A web app you run on your own machine. You chat with an AI model and it builds in a Minecraft world, shown in 3D beside the chat. Bench mode gives one prompt to several models at once, so you can compare their builds and vote without knowing which model made which.",
      "In MC-Bench a model wrote one program in a single response. Here the model works as an agent: it runs build programs, takes screenshots of its build, tests the redstone, and keeps going until it decides the build is done.",
      "A build can be shared as a page where anyone can fly around it. Two of them: [Oppenheimer watching the first atomic blast](https://adonis-singh.github.io/mcbench-builds/b/600bde0d9751/) by Claude Fable 5.2, and [a giant rubber duck](https://adonis-singh.github.io/mcbench-builds/b/d36f4e2d933e/) by Claude Opus 5.5.",
    ],
    icon: "media/icons/mcbench-lite.png",
    info: [
      ["Language", "JavaScript, with a Minecraft engine in Rust"],
      ["Minecraft", "1.21.10"],
      ["Runs on", "macOS and Linux"],
      ["Made with", "Mostly Claude Opus 5.5"],
      ["Started", "February 2026"],
      ["Released", "November 12, 2026"],
    ],
    tweets: [
      { date: "Mar 23, 2026", text: "An early demo", href: "https://x.com/adonis_singh/status/2036117129250930892" },
      { date: "Nov 11, 2026", text: "Shared builds play in 3D on X", href: "https://x.com/adonis_singh/status/2120499485793288619" },
    ],
    // The app picture is docs/screenshot.jpg from the repo; the builds are the preview.jpg of their shared pages.
    images: [
      { src: "media/mcbench-lite-app.jpg", thumb: "media/mcbench-lite-app-thumb.jpg", alt: "The app: the chat, and the model's build beside it" },
      { src: "media/mcbench-lite-trinity.jpg", thumb: "media/mcbench-lite-trinity-thumb.jpg", alt: "Oppenheimer watching the first atomic blast, by Claude Fable 5.2" },
      { src: "media/mcbench-lite-duck.jpg", thumb: "media/mcbench-lite-duck-thumb.jpg", alt: "A giant rubber duck, by Claude Opus 5.5" },
    ],
    links: [{ label: "Code", href: "https://github.com/adonis-singh/mcbench-lite" }],
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
      { date: "Mar 10, 2026", text: "EyeBench V3", href: "https://x.com/adonis_singh/status/2031516743110214015" },
      { date: "Oct 8, 2026", text: "What EyeBench is", href: "https://x.com/adonis_singh/status/2108283869401084201" },
    ],
    images: [
      { src: "media/eyebench-spot-diff-10.jpg", thumb: "media/eyebench-spot-diff-10-thumb.jpg", alt: "Spot the differences" },
      { src: "media/eyebench-topology-21.jpg", thumb: "media/eyebench-topology-21-thumb.jpg", alt: "Count the loops" },
      { src: "media/eyebench-graph-41.jpg", thumb: "media/eyebench-graph-41-thumb.jpg", alt: "Count the pieces of a graph" },
      { src: "media/eyebench-pattern-61.jpg", thumb: "media/eyebench-pattern-61-thumb.jpg", alt: "Complete the pattern" },
      { src: "media/eyebench-maze-100.jpg", thumb: "media/eyebench-maze-100-thumb.jpg", alt: "Count the turns in a maze" },
    ],
    scores: { page: "https://adonis-singh.github.io/eyebench/", source: "https://adonis-singh.github.io/eyebench/data-frontier.js", top: 10 },
    links: [],
  },
  {
    id: "trevorswing",
    name: "trevorswing",
    year: 2026,
    blurb: "Spider-Man 2's web swinging in GTA V.",
    body: [
      "I'm porting the movement and combat code from Marvel's Spider-Man 2 on PC into a GTA V script that plays as Trevor, and checking it frame by frame against the real game. The plan is to make it a standalone game that runs off your own copies of both.",
    ],
    icon: "media/icons/trevorswing.png",
    info: [
      ["Language", "C++"],
      ["Made with", "Claude Opus 5.5 and some GPT-6.1 Sol"],
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
    // The clip was cut at 24 fps and exported at 30, which repeated every fifth frame; it is re-encoded at 24.
    frames: { rate: 24, count: 300 },
    links: [],
  },
  {
    id: "re4",
    name: "Resident Evil 4 decompilation",
    year: 2026,
    blurb: "A 2004 GameCube prototype, rebuilt byte for byte.",
    body: [
      "A full decompilation of a Resident Evil 4 prototype for GameCube, dated November 25, 2004. Its discs came with symbol files that name every function. The result is 570,000 lines of C and C++ that, built with the compilers Capcom used, produce the original game files byte for byte.",
    ],
    label: "RE4 decomp",
    icon: "media/icons/re4.png",
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
    // media/re4-build.sha1 is a copy of config/G4BE08/build.sha1 from the repo.
    check: {
      file: "media/re4-build.sha1",
      command: "build/tools/dtk shasum -c config/G4BE08/build.sha1",
      page: "https://github.com/adonis-singh/re4/blob/master/config/G4BE08/build.sha1",
    },
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
    // The A04 policy lap from the README, captured in the game and replayed by TMNF-C (policy_validation/a04_5900).
    run: {
      src: "media/tmnf-a04-5900.json",
      caption: "A04-Acrobatic from above. A policy trained with pure RL drove it in 5.900 s; the author time is 5.950 s. The line is the car in the real game, and the square is TMNF-C given the same inputs.",
    },
    links: [{ label: "Code", href: "https://github.com/adonis-singh/TMNF-C" }],
  },
];
