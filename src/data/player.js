export const WIZARDS = ["🧙‍♂️", "🧙‍♀️", "🧙", "🧙🏿‍♂️", "🧙🏻‍♀️"];

export const PLAYER_DEFENSE = {
  weaknesses: {
    "fear": { mult: 1.5, msg: "Your resolve shakes!" },
    "blunt": { mult: 1.2, msg: "Oof! Heavy hit." },
    "fire": { mult: 1.2, msg: "Hot hot hot!" }
  },
  resistances: {
    "bribe": { mult: 0.0, msg: "You cannot be bought." },
    "emotion": { mult: 0.8, msg: "You focus on the spell." }
  }
};

export const STARTING_DECK = [
  ..."AAAAAAAAABBCCDDDDEEEEEEEEEEEFFGGGHHIIIIIIIIIJKLLLLMMNNNNNNOOOOOOOOPPQRRRRRSSSSTTTTTTUUUUVVWWXYYZ".split("")
];

export const LETTER_SCORES = {
  // Common (1 pt)
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  // Medium (2 pts)
  D: 2, G: 2,
  // Rare (3 pts) - Merged Scrabble's 3 & 4 tiers
  B: 3, C: 3, M: 3, P: 3, F: 3, H: 3, V: 3, W: 3, Y: 3,
  // Epic (4 pts) - Merged Scrabble's 5, 8, & 10 tiers
  K: 4, J: 4, X: 4, Q: 4, Z: 4
};
