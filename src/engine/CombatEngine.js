import { SPELLBOOK } from '../data/spells';
import { PLAYER_DEFENSE, LETTER_SCORES } from '../data/player';

// --- SCORING HELPER ---
export const calculateWordPower = (word) => {
  const upper = word.toUpperCase();
  const len = upper.length;
  
  // 1. BASE SCORE: Sum of letter rarities
  let baseScore = 0;
  for (let i = 0; i < len; i++) {
    const char = upper[i];
    baseScore += LETTER_SCORES[char] || 1; // Default to 1 if missing
  }

  // 2. LENGTH RAMP: The original bonus logic
  // (+2 damage for every letter beyond 4)
  if (len > 4) {
    baseScore += (len - 4) * 2;
  }
  
  return baseScore;
};

/**
 * Resolves a spell cast by a Source Entity against a Target Entity.
 * @param {string} word - The word cast
 * @param {object} caster - The entity casting (Player or Enemy)
 * @param {object} target - The entity receiving (Enemy or Player)
 * @param {boolean} isPlayerCasting - Context flag
 */
export function resolveSpell(word, caster, target, isPlayerCasting = true) {
  const upperWord = word.toUpperCase();
  const wordData = SPELLBOOK[upperWord];

  // 1. DETERMINE SPELL DATA
  // If player, use Ramp scaling. If enemy, use Linear scaling (or Spellbook value).
  let basePower = 0;
  let tags = [];
  
  if (isPlayerCasting) {
    basePower = calculateWordPower(upperWord);
    if (wordData) tags = wordData.tags || [];
  } else {
    // Enemy Casting
    basePower = wordData?.power || upperWord.length;
    tags = wordData?.tags || [];
  }

  // 2. INITIALIZE RESULT OBJECT
  const result = {
    damage: 0,
    targetStat: 'hp', // 'hp' or 'wp'
    heal: 0,
    status: null, // 'stun', 'flee', etc.
    logs: [],
    tags: tags,
    emoji: "✨" // Default
  };

  // 3. CHECK TAGS FOR SPECIAL BEHAVIORS
  let isAttack = true; // Most things are attacks unless specified

  // --- SPECIAL TAG LOGIC ---
  
  // FLEE / ESCAPE
  if (tags.includes("flee")) {
    result.status = "flee";
    result.logs.push(`> Attempting to escape...`);
    result.emoji = "🏃";
    return result; // End early, no damage
  }

  // HEAL
  if (tags.includes("heal")) {
    result.heal = basePower * 2; // Healing is usually stronger than base damage
    isAttack = false; // Usually doesn't hurt the enemy
    result.emoji = "💖";
    result.logs.push(`> Restoration magic!`);
  }

  // FOOD (Context Sensitive)
  if (tags.includes("food")) {
    // Check if target wants food
    if (target.weaknesses && target.weaknesses["food"]) {
      isAttack = true; // It's a bribe/distraction attack!
      result.emoji = "🍖";
    } else {
      isAttack = false; // Eat it yourself
      result.heal = basePower * 1.5;
      result.emoji = "🍎";
      result.logs.push(`> A delicious snack.`);
    }
  }

  // STUN / ICE
  if (tags.includes("stun") || tags.includes("ice")) {
    // 50% chance to stun? Or guaranteed? Let's say guaranteed for now.
    result.status = "stun";
    result.logs.push(`> Freezing effect!`);
    result.emoji = "🧊";
  }

  // 4. CALCULATE DAMAGE (If it's an attack)
  if (isAttack) {
    let multipliers = 1.0;
    
    tags.forEach(tag => {
      // Check Weaknesses
      if (target.weaknesses && target.weaknesses[tag]) {
        const weak = target.weaknesses[tag];
        multipliers *= weak.mult;
        result.logs.push(`> ${weak.msg} (x${weak.mult})`);
        if (weak.target) result.targetStat = weak.target;
      }
      // Check Resistances
      if (target.resistances && target.resistances[tag]) {
        const res = target.resistances[tag];
        multipliers *= res.mult;
        result.logs.push(`> ${res.msg} (x${res.mult})`);
      }
    });

    result.damage = Math.floor(basePower * multipliers);
    if (result.damage < 0) result.damage = 0; // No negative damage
  }

  return result;
}