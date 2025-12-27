// Base enemies (single-word names). Affixes can be applied to these.
const BASES = {
  1: [
    {
      id: 'rat',
      name: 'rat',
      emoji: '🐀',
      level: 1,
      hp: 15,
      wp: 5,
      vocabulary: ['BITE', 'GNAW', 'SQUEAK'],
      weaknesses: {
        fire: { mult: 1.5 },
        fear: { mult: 2.0, target: 'wp' }
      },
      resistances: {
        poison: { mult: 0.0 }
      }
    },
    {
      id: 'poop',
      name: 'poop',
      emoji: '💩',
      level: 1,
      hp: 12,
      wp: 4,
      vocabulary: ['STINK', 'SMEAR'],
      weaknesses: {
        clean: { mult: 2.0 }
      },
      resistances: {}
    },
    {
      id: 'snail',
      name: 'snail',
      emoji: '🐌',
      level: 1,
      hp: 18,
      wp: 6,
      vocabulary: ['SLIME', 'SHELL'],
      weaknesses: {},
      resistances: {
        water: { mult: 0.5 }
      }
    }
  ],

  2: [
    {
      id: 'bird',
      name: 'bird',
      emoji: '🐦',
      level: 2,
      hp: 22,
      wp: 15,
      vocabulary: ['CROAK', 'PECK', 'TAUNT'],
      weaknesses: {
        loud: { mult: 1.5, target: 'wp' }
      },
      resistances: {}
    },
    {
      id: 'snake',
      name: 'snake',
      emoji: '🐍',
      level: 2,
      hp: 24,
      wp: 12,
      vocabulary: ['BITE', 'HISS', 'VENOM'],
      weaknesses: {
        fire: { mult: 1.5 }
      },
      resistances: {
        poison: { mult: 0.5 }
      }
    }
  ],

  3: [
    {
      id: 'pumpkin',
      name: 'pumpkin',
      emoji: '🎃',
      level: 3,
      hp: 35,
      wp: 20,
      vocabulary: ['ROLL', 'SMASH', 'GLOW'],
      weaknesses: {
        blade: { mult: 2.0 }
      },
      resistances: {}
    },
    {
      id: 'goblin',
      name: 'goblin',
      emoji: '👺',
      level: 3,
      hp: 30,
      wp: 25,
      vocabulary: ['STAB', 'STEAL', 'SHOUT'],
      weaknesses: {
        bribe: { mult: 2.5, target: 'wp' }
      },
      resistances: {}
    }
  ],

  4: [
    {
      id: 'clown',
      name: 'clown',
      emoji: '🤡',
      level: 4,
      hp: 50,
      wp: 40,
      vocabulary: ['JEST', 'SQUEAK', 'BOOM'],
      weaknesses: {
        taunt: { mult: 1.5, target: 'wp' }
      },
      resistances: {}
    },
    {
      id: 'alien',
      name: 'alien',
      emoji: '👽',
      level: 4,
      hp: 55,
      wp: 45,
      vocabulary: ['ZAP', 'PROBE', 'HUM'],
      weaknesses: {
        mind: { mult: 1.5, target: 'wp' }
      },
      resistances: {}
    }
  ],

  5: [
    {
      id: 'troll',
      name: 'troll',
      emoji: '🧌',
      level: 5,
      hp: 90,
      wp: 30,
      vocabulary: ['SMASH', 'THUMP', 'ROAR'],
      weaknesses: {
        fire: { mult: 1.5 }
      },
      resistances: {
        blunt: { mult: 0.8 }
      }
    },
    {
      id: 'camel',
      name: 'camel',
      emoji: '🐫',
      level: 5,
      hp: 70,
      wp: 40,
      vocabulary: ['SPIT', 'TRUDGE', 'ENDURE'],
      weaknesses: {
        water: { mult: 1.5 }
      },
      resistances: {
        heat: { mult: 0.8 }
      }
    }
  ]
};

// Affixes add vocabulary and can add weaknesses/resistances
const AFFIXES = [
  {
    id: 'ember',
    name: 'ember',
    emoji: '🔥',
    vocabByLevel: {
      1: ['BURN', 'ASH'],
      2: ['BURN', 'EMBER'],
      3: ['BLAZE', 'EMBER', 'INFERNO'],
      4: ['INCENDIO', 'CONFLARE'],
      5: ['CONFLAGRATE', 'INCINERATE', 'APOCALYPSE']
    },
    weaknesses: {
      water: { mult: 2.0 }
    },
    resistances: {
      fire: { mult: 0.0 }
    }
  },
  {
    id: 'water',
    name: 'water',
    emoji: '💧',
    vocabByLevel: {
      1: ['SPLASH', 'DRIP'],
      2: ['SPLASH', 'DRENCH'],
      3: ['WAVE', 'SURGE'],
      4: ['TSUNAMI'],
      5: ['DELUGE', 'MONSOON']
    },
    weaknesses: {
      ice: { mult: 2.0 }
    },
    resistances: {
      water: { mult: 0.0 }
    }
  },
  {
    id: 'wind',
    name: 'wind',
    emoji: '💨',
    vocabByLevel: {
      1: ['GUST'],
      2: ['GUST', 'BREEZE'],
      3: ['WHIRL', 'TORNADO'],
      4: ['CYCLONE'],
      5: ['TEMPEST']
    },
    weaknesses: {},
    resistances: {
      air: { mult: 0.5 }
    }
  },
  {
    id: 'dark',
    name: 'dark',
    emoji: '🌑',
    vocabByLevel: {
      1: ['HEX'],
      2: ['HEX', 'SHADOW'],
      3: ['CURSE', 'NOCTURNAL'],
      4: ['OBLIVION'],
      5: ['DARKNESS']
    },
    weaknesses: {
      holy: { mult: 2.0 }
    },
    resistances: {
      dark: { mult: 0.0 }
    }
  },
  {
    id: 'lightning',
    name: 'lightning',
    emoji: '⚡',
    vocabByLevel: {
      1: ['ZAP'],
      2: ['SPARK'],
      3: ['SHOCK', 'CHAIN'],
      4: ['STORMY'],
      5: ['THUNDERCLAP']
    },
    weaknesses: {
      earth: { mult: 1.5 }
    },
    resistances: {
      electric: { mult: 0.0 }
    }
  },
  {
    id: 'verdant',
    name: 'verdant',
    emoji: '🍃',
    vocabByLevel: {
      1: ['GROW', 'SAP'],
      2: ['SPROUT'],
      3: ['ENTANGLE', 'VINE'],
      4: ['OVERGROWTH'],
      5: ['FORESTCALL']
    },
    weaknesses: {
      fire: { mult: 2.0 }
    },
    resistances: {
      earth: { mult: 0.8 }
    }
  },
  {
    id: 'stone',
    name: 'stone',
    emoji: '🪨',
    vocabByLevel: {
      1: ['CRUSH'],
      2: ['BOULDER'],
      3: ['QUAKE', 'RUPTURE'],
      4: ['LANDSLIDE'],
      5: ['CATACLYSM']
    },
    weaknesses: {
      ice: { mult: 1.5 }
    },
    resistances: {
      earth: { mult: 0.0 }
    }
  },
  {
    id: 'archer',
    name: 'archer',
    emoji: '🏹',
    vocabByLevel: {
      1: ['SHOOT'],
      2: ['AIM'],
      3: ['BOLT', 'SNIPER'],
      4: ['VOLLEY'],
      5: ['RAIN']
    },
    weaknesses: {
      blunt: { mult: 1.5 }
    },
    resistances: {
      pierce: { mult: 0.2 }
    }
  }
];

export const MAX_STAGE = 5;

// Create a new enemy instance by combining a base (by level) and a random affix
export function createEnemy(stageIndex) {
  const level = Math.min(5, stageIndex + 1);
  const bases = BASES[level] || BASES[5];
  const base = bases[Math.floor(Math.random() * bases.length)];

  // 25% chance to spawn without an affix
  const useAffix = Math.random() >= 0.25;
  const affix = useAffix ? AFFIXES[Math.floor(Math.random() * AFFIXES.length)] : null;

  const capitalize = s => s.charAt(0).toUpperCase() + s.slice(1);
  const id = affix ? `${base.id}_${affix.id}` : base.id;
  const name = affix ? `${capitalize(affix.name)} ${capitalize(base.name)}` : capitalize(base.name);
  const emoji = affix ? `${base.emoji}${affix.emoji ? affix.emoji : ''}` : base.emoji;

  // Merge vocabulary and tags; choose affix vocab based on base level (longer words for higher levels)
  let affixVocab = [];
  if (affix) {
    if (affix.vocabByLevel) {
      affixVocab = affix.vocabByLevel[base.level] || affix.vocabByLevel[5] || [];
    } else {
      affixVocab = affix.vocab || [];
    }
  }
  const vocabulary = Array.from(new Set([...(base.vocabulary || []), ...affixVocab]));

  // Merge weaknesses and resistances (affix overrides base where specified)
  const weaknesses = { ...(base.weaknesses || {}) };
  if (affix && affix.weaknesses) Object.keys(affix.weaknesses).forEach(k => { weaknesses[k] = affix.weaknesses[k]; });
  const resistances = { ...(base.resistances || {}) };
  if (affix && affix.resistances) Object.keys(affix.resistances).forEach(k => { resistances[k] = affix.resistances[k]; });

  return {
    id,
    name,
    emoji,
    level: base.level,
    hp: base.hp,
    wp: base.wp,
    vocabulary,
    weaknesses,
    resistances
  };
}