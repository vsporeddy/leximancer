// Permanent player artifacts (upgrades)
// These are data-first artifacts; acquisition logic will be added later.
export const ARTIFACTS = [
  {
    id: 'tomato',
    emoji: '🍅',
    name: 'Tomato of Vitality',
    desc: '+20 max HP. (Permanent)',
    maxHpBonus: 20
  },
  {
    id: 'helmet',
    emoji: '🪖',
    name: 'Worn Helmet',
    desc: 'Block 1 damage from all enemy spells. (Permanent)',
    incomingDamageBlock: 1
  },
  {
    id: 'crystal_ball',
    emoji: '🔮',
    name: 'Crystal Ball',
    desc: 'Reveals enemy weaknesses in battle. (Permanent)',
    revealWeaknesses: true
  },
  {
    id: 'fairy_wings',
    emoji: '🪽',
    name: 'Fairy Wings',
    desc: 'Verbs deal +1 damage. (Permanent)',
    verbBonusDamage: 1
  }
];
