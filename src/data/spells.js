// Helper to construct spell objects efficiently
const spellList = {};

const register = (words, tags) => {
  words.forEach(word => {
    spellList[word] = { tags };
  });
};

// --- CONTENT DEFINITION ---

// FIRE (Merged fire, heat, burn, light -> fire)
register(
  ["FIRE", "BURN", "HEAT", "LAVA", "ASH", "COAL", "SEAR", "CHAR", "PYRE", "FLAME", "BLAZE", "IGNITE", "INFERNO", "HELLFIRE", "SCORCH", "EMBER", "SMOKE", "TORCH", "CHARCOAL"], 
  ["fire"]
);

// WATER & ICE (Merged cold -> ice, etc)
register(
  ["WATER", "AQUA", "RAIN", "MIST", "WASH", "SOAK", "FLOOD", "TSUNAMI", "STEAM", "DEW"], 
  ["water"]
);
register(
  ["ICE", "SNOW", "COLD", "FROST", "FREEZE", "CHILL", "GLACIER", "BLIZZARD", "SLEET"], 
  ["ice"]
);

// PHYSICAL (Merged force, weapon -> blunt/blade)
register(
  ["HIT", "BASH", "BEAT", "KICK", "PUNCH", "STRIKE", "SMASH", "CRUSH", "SLAM", "BREAK"], 
  ["blunt"]
);
register(
  ["CUT", "SLICE", "STAB", "SLASH", "CHOP", "CLEAVE", "SWORD", "AXE", "KNIFE", "DAGGER", "MACE", "HAMMER"], 
  ["blade"]
);

// UTILITY
register(
  ["HEAL", "HEALTH", "MEND", "CURE", "REST", "POTION", "REGEN"], 
  ["heal"]
);
register(
  ["RUN", "FLEE", "ESCAPE", "LEAVE", "BOLT", "SPRINT"], 
  ["motion"] // mapped to 'flee' logic in engine
);
register(
  ["STUN", "STOP", "HALT", "TRAP", "PARALYZE"], 
  ["stun"]
);

// HOLY / LIGHT
register(
  ["LIGHT", "HOLY", "RADIANT", "BLESS", "BLESSING", "DIVINE", "LUMEN", "SUN"], 
  ["holy"]
);

// POISON / TOXIN
register(
  ["POISON", "TOXIN", "VENOM", "BLIGHT", "FUMES", "ROT"], 
  ["poison"]
);

// ELECTRIC
register(
  ["THUNDER", "LIGHTNING", "SHOCK", "SPARK", "ZAP", "BOLT", "STORM"], 
  ["electric"]
);

// AIR / WIND
register(
  ["WIND", "GUST", "BREEZE", "GALE", "ZEPHYR", "BREATH", "WHIRL"], 
  ["air"]
);

// EARTH / STONE
register(
  ["EARTH", "STONE", "ROCK", "QUAKE", "RUMBLE", "TREMOR"], 
  ["earth"]
);

// NATURE / PLANT
register(
  ["ROOT", "VINE", "GROW", "SEED", "BLOOM", "LEAF", "SPROUT", "NECTAR"], 
  ["nature"]
);

// DARK / CURSE
register(
  ["DARK", "SHADOW", "CURSE", "VOID", "NIGHT", "HEX"], 
  ["dark"]
);

// STATUS / MISC
register(
  ["FEAR", "TERROR", "SCARE", "PANIC", "FRIGHT", "DREAD"], 
  ["fear"]
);
register(
  ["SILENCE", "MUTE", "HUSH", "SHUSH"], 
  ["silence"]
);
register(
  ["SLEEP", "NAP", "SLUMBER", "SNOOZE", "DREAM"], 
  ["sleep"]
);
register(
  ["ARMOR", "SHIELD", "PROTECT", "GUARD", "BARRIER"], 
  ["shield"]
);
register(
  ["SUMMON", "CALL", "CONJURE", "BECKON", "FAMILIAR"], 
  ["summon"]
);
register(
  ["BLEED", "GASH", "WOUND", "GORE"], 
  ["bleed"]
);
register(
  ["PIERCE", "PUNCTURE", "THRUST", "SPEAR", "LANCE"], 
  ["pierce"]
);
register(
  ["BRIBE", "COIN", "GOLD", "TREAT", "FOOD", "MEAT", "BREAD", "APPLE"], 
  ["bribe", "food"]
);


export const SPELLBOOK = spellList;