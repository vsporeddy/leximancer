// Helper to construct spell objects efficiently
const spellList = {};

const register = (words, tags, power = 3) => {
  words.forEach(word => {
    spellList[word] = { tags, power };
  });
};

// --- CONTENT DEFINITION ---

// 1. FIRE (Power: 4-5)
register(
  ["FIRE", "BURN", "HEAT", "LAVA", "ASH", "COAL", "SEAR", "CHAR", "PYRE"], 
  ["fire"], 4
);
register(
  ["FLAME", "BLAZE", "TORCH", "IGNITE", "EMBER", "SCORCH", "MAGMA"], 
  ["fire", "light"], 5
);
register(["INFERNO", "WILDFIRE", "HELLFIRE"], ["fire", "destruction"], 8);

// 2. WATER / ICE
register(
  ["WATER", "AQUA", "RAIN", "MIST", "DEW", "WASH", "BATH", "SOAK"], 
  ["water"], 3
);
register(
  ["ICE", "SNOW", "COLD", "FROST", "CHILL", "HAIL", "SLUSH", "FREEZE"], 
  ["ice", "water"], 4
);
register(["GLACIER", "BLIZZARD", "TSUNAMI", "FLOOD"], ["water", "force"], 7);

// 3. NATURE
register(
  ["TREE", "ROOT", "LEAF", "BARK", "WOOD", "VINE", "MOSS", "SEED", "BUSH"], 
  ["plant"], 3
);
register(
  ["FOREST", "JUNGLE", "GROWTH", "BLOOM", "THORN"], 
  ["plant", "life"], 5
);

// 4. COMBAT (Physical)
register(
  ["HIT", "HURT", "BASH", "BEAT", "KICK", "SLAP", "PUNCH", "STRIKE"], 
  ["blunt", "physical"], 3
);
register(
  ["CUT", "SLICE", "STAB", "SLASH", "CHOP", "CLEAVE", "GASH", "REND"], 
  ["blade", "physical"], 4
);
register(
  ["SMASH", "CRUSH", "SLAM", "BREAK", "CRASH", "WRECK"], 
  ["blunt", "force"], 5
);
register(
  ["SWORD", "AXE", "KNIFE", "DAGGER", "SPEAR", "MACE", "FLAIL"], 
  ["weapon", "metal"], 4
);

// 5. HOLY / UNHOLY
register(
  ["GHOST", "ZOMBIE", "GHOUL", "LICH", "DEATH", "GRAVE", "TOMB"], 
  ["undead", "fear"], 5
);
register(
  ["HOLY", "PRAY", "BLESS", "SAINT", "LIGHT", "GLORY", "SHINE"], 
  ["holy", "light"], 5
);

// 6. SOCIAL / ABSTRACT
register(
  ["GOLD", "COIN", "CASH", "GEM", "RUBY", "PAY", "BUY", "SELL", "GREED"], 
  ["bribe", "wealth"], 4
);
register(
  ["FEAR", "SCARE", "PANIC", "DREAD", "TERROR", "SCREAM", "SHOUT"], 
  ["fear", "sound"], 4
);
register(
  ["LOVE", "HOPE", "JOY", "KISS", "HUG", "PEACE"], 
  ["heal", "emotion"], 1
); // Low damage, but maybe healing later?

// 7. UTILITY & HEALING
register(
  ["HEAL", "HEALTH", "MEND", "CURE", "REST", "POTION", "ELIXIR"], 
  ["heal", "magic"], 3
);
register(
  ["APPLE", "BREAD", "MEAT", "STEAK", "PIE", "CAKE", "FOOD", "EAT"], 
  ["food"], 2
);
register(
  ["RUN", "FLEE", "ESCAPE", "LEAVE", "EXIT", "BOLT"], 
  ["flee", "motion"], 1
);
register(
  ["STUN", "STOP", "HALT", "FREEZE", "SLOW", "TRAP"], 
  ["stun", "force"], 3
);

export const SPELLBOOK = spellList;