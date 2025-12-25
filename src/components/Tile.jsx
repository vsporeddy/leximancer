import { LETTER_SCORES } from '../data/player';

export default function Tile({ tile, onClick, empty = false }) {
  if (empty) {
    return <div className="tile empty">?</div>;
  }
  
  const score = LETTER_SCORES[tile.char] || 1;

  return (
    <div className="tile" onClick={() => onClick(tile)}>
      {tile.char}
      <span className="tile-score">{score}</span>
    </div>
  );
}