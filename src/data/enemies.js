export const ENCOUNTERS = [
  {
    id: "rat",
    name: "Plague Rat",
    emoji: "🐀",
    level: 1,
    hp: 15, wp: 5,
    desc: "A filthy rodent spreading disease.",
    vocabulary: ["BITE", "GNAW", "SQUEAK", "FILTH", "RUN"],
    weaknesses: {
      "fire": { mult: 1.5, msg: "It squeals!" },
      "fear": { mult: 2.0, target: "wp", msg: "It scampers away!" }
    },
    resistances: {
      "poison": { mult: 0.0, msg: "It eats poison for breakfast." }
    }
  },
  {
    id: "goblin",
    name: "Sniveling Goblin",
    emoji: "👺",
    level: 2,
    hp: 25, wp: 10,
    desc: "Greedy and cowardly.",
    vocabulary: ["STAB", "COIN", "GREED", "SHOUT", "TRAP"],
    weaknesses: {
      "bribe": { mult: 2.5, target: "wp", msg: "Ooh! Shiny!" },
      "fear": { mult: 1.5, target: "wp", msg: "Don't hurt me!" }
    },
    resistances: {}
  },
  {
    id: "skeleton",
    name: "Rattlebones",
    emoji: "💀",
    level: 3,
    hp: 40, wp: 100, // Fearless
    desc: "Bones held together by hate.",
    vocabulary: ["BONE", "RATTLE", "FEAR", "DEATH", "CLACK"],
    weaknesses: {
      "blunt": { mult: 2.0, msg: "CRACK! Bones shatter." },
      "holy": { mult: 3.0, msg: "The light burns it!" }
    },
    resistances: {
      "blade": { mult: 0.5, msg: "Slashing air..." },
      "pierce": { mult: 0.2, msg: "Goes right through the ribs." },
      "fear": { mult: 0.0, target: "wp", msg: "It feels nothing." }
    }
  },
  {
    id: "treant",
    name: "Elder Treant",
    emoji: "🌳",
    level: 5,
    hp: 80, wp: 50,
    desc: "Ancient wood, slow anger.",
    vocabulary: ["ROOT", "CRUSH", "GROW", "STOMP", "BRANCH"],
    weaknesses: {
      "fire": { mult: 3.0, msg: "TIMBERRR!" },
      "axe": { mult: 2.0, msg: "Chop chop!" }
    },
    resistances: {
      "water": { mult: -1.0, msg: "It drinks deeply." },
      "blunt": { mult: 0.8, msg: "Thud." }
    }
  },
  {
    id: "dragon",
    name: "Ember Drake",
    emoji: "🐉",
    level: 10,
    hp: 200, wp: 80,
    desc: "The lord of the volcano.",
    vocabulary: ["INFERNO", "ROAR", "FLY", "BURN", "CLAW"],
    weaknesses: {
      "water": { mult: 2.0, msg: "Steam hisses violently!" },
      "ice": { mult: 2.0, msg: "Thermal shock!" },
      "bribe": { mult: 1.5, target: "wp", msg: "A tribute for the hoard?" }
    },
    resistances: {
      "fire": { mult: 0.0, msg: "It bathes in flame." }
    }
  }
];