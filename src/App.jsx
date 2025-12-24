import { useState, useEffect, useRef } from 'react'
import './App.css'
import { STARTING_DECK, ENCOUNTERS, SPELLBOOK, WIZARDS } from './gameData'

// --- CONFIGURATION ---
const HAND_SIZE = 12; // Increased from 7 to 12
const SHUFFLE_COST = 0; // Made free to encourage cycling

// Fisher-Yates shuffle
const shuffle = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

function App() {
  // --- STATE ---
  const [gameState, setGameState] = useState('START');
  const [playerAvatar, setPlayerAvatar] = useState(WIZARDS[0]);
  const [deck, setDeck] = useState([]);
  const [hand, setHand] = useState([]);
  const [spellSlots, setSpellSlots] = useState([]);
  const [currentEnemy, setCurrentEnemy] = useState(null);
  const [enemyIndex, setEnemyIndex] = useState(0);
  const [logs, setLogs] = useState(["Welcome, Leximancer."]);
  
  const logEndRef = useRef(null);

  // --- INITIALIZATION ---
  const startGame = () => {
    setDeck(shuffle(STARTING_DECK));
    setEnemyIndex(0);
    setLogs(["Welcome, Leximancer.", "The dungeon awaits..."]);
    startEncounter(0);
  };

  const startEncounter = (index) => {
    if (index >= ENCOUNTERS.length) {
      setGameState('VICTORY');
      return;
    }
    const enemyData = JSON.parse(JSON.stringify(ENCOUNTERS[index]));
    enemyData.maxHp = enemyData.hp;
    enemyData.maxWp = enemyData.wp;
    
    setCurrentEnemy(enemyData);
    setGameState('BATTLE');
    
    // Start with a fresh full hand
    drawHand(HAND_SIZE, shuffle(STARTING_DECK), []); 
    setSpellSlots([]);
    addLog(`A wild ${enemyData.name} appears!`);
  };

  // --- HAND MANAGEMENT ---
  // Modified to handle reshuffling automatically if deck runs dry
  const drawHand = (count, currentDeck, currentHand) => {
    const newHand = [...currentHand];
    let deckCopy = [...currentDeck];
    
    for (let i = 0; i < count; i++) {
      if (deckCopy.length === 0) {
        addLog("Deck empty. Reshuffling...");
        deckCopy = shuffle(STARTING_DECK);
      }
      newHand.push({ id: Math.random(), char: deckCopy.pop() });
    }
    
    setDeck(deckCopy);
    setHand(newHand);
  };

  const moveTileToSlot = (tile) => {
    setHand(hand.filter(t => t.id !== tile.id));
    setSpellSlots([...spellSlots, tile]);
  };

  const returnTileToHand = (tile) => {
    setSpellSlots(spellSlots.filter(t => t.id !== tile.id));
    setHand([...hand, tile]);
  };

  const discardAndRedraw = () => {
    // Discard entire hand and spell slots, draw fresh 12
    setSpellSlots([]);
    drawHand(HAND_SIZE, deck, []); // Passing empty array as current hand clears it
    addLog("Mulligan! You drew a fresh hand.");
  };

  // --- COMBAT LOGIC ---
  const castSpell = () => {
    if (spellSlots.length === 0) return;

    const word = spellSlots.map(t => t.char).join("");
    const wordData = SPELLBOOK[word]; 
    
    let power = word.length;
    let tags = [];
    let isMagic = false;

    if (wordData) {
      power = wordData.power;
      tags = wordData.tags;
      isMagic = true;
    }

    let multipliers = 1.0;
    let targetStat = 'hp';
    let battleLog = [`You cast "${word}"!`];

    if (isMagic) {
      battleLog.push(`It pulsates with [${tags.join(", ")}] energy.`);
      
      tags.forEach(tag => {
        if (currentEnemy.weaknesses[tag]) {
          const weak = currentEnemy.weaknesses[tag];
          multipliers *= weak.mult;
          battleLog.push(`> ${weak.msg} (x${weak.mult})`);
          if (weak.target) targetStat = weak.target;
        }
        if (currentEnemy.resistances[tag]) {
          const res = currentEnemy.resistances[tag];
          multipliers *= res.mult;
          battleLog.push(`> ${res.msg} (x${res.mult})`);
        }
      });
    } else {
      battleLog.push("It's a mundane collection of letters.");
    }

    const finalDamage = Math.floor(power * multipliers);
    
    const newEnemy = { ...currentEnemy };
    if (targetStat === 'hp') {
      newEnemy.hp -= finalDamage;
      battleLog.push(`Dealt ${finalDamage} Physical DMG!`);
    } else {
      newEnemy.wp -= finalDamage;
      battleLog.push(`Dealt ${finalDamage} Willpower DMG!`);
    }

    addLog(...battleLog);
    setCurrentEnemy(newEnemy);
    
    // CLEAR PLAYED TILES & REFILL
    setSpellSlots([]);
    
    // REFILL HAND TO MAX
    const tilesNeeded = HAND_SIZE - hand.length;
    if (tilesNeeded > 0) {
      drawHand(tilesNeeded, deck, hand);
    }
    
    if (newEnemy.hp <= 0 || newEnemy.wp <= 0) {
      addLog(`The ${newEnemy.name} is defeated!`);
      setTimeout(() => setGameState('REWARD'), 1000);
    } else {
      setTimeout(() => {
        addLog(`${newEnemy.name} attacks!`);
      }, 1000);
    }
  };

  const addLog = (...messages) => {
    setLogs(prev => [...prev, ...messages]);
  };

  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  const renderTile = (tile, onClick) => (
    <div key={tile.id} className="tile" onClick={() => onClick(tile)}>
      {tile.char}
    </div>
  );

  // --- SCREENS ---
  if (gameState === 'START') {
    return (
      <div className="start-screen">
        <h1>LEXIMANCER</h1>
        <div style={{fontSize: '4rem', marginBottom: '20px'}}>{playerAvatar}</div>
        <p>Spell words. Exploit weaknesses. Survive.</p>
        <button className="cast-btn" onClick={startGame}>Enter Dungeon</button>
      </div>
    );
  }

  if (gameState === 'REWARD') {
    return (
      <div className="reward-screen">
        <h2>VICTORY!</h2>
        <p>The {currentEnemy.name} is vanquished.</p>
        <div className="controls">
          <button className="cast-btn" onClick={() => {
            setEnemyIndex(prev => prev + 1);
            startEncounter(enemyIndex + 1);
          }}>
            Next Encounter ➡
          </button>
        </div>
      </div>
    );
  }

  if (gameState === 'VICTORY') {
    return (
      <div>
        <h1>YOU WIN!</h1>
        <p>The dungeon is cleared.</p>
        <button onClick={() => setGameState('START')}>Play Again</button>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="header">
        <div>{playerAvatar} Leximancer</div>
        <div className="stats">Encounter {enemyIndex + 1}/{ENCOUNTERS.length}</div>
      </div>

      {currentEnemy && (
        <div className="battle-area">
          <div className="enemy-emoji">{currentEnemy.emoji}</div>
          <h3>{currentEnemy.name}</h3>
          <div className="bars">
            <div className="bar">
              <div className="bar-fill hp-fill" style={{width: `${Math.max(0, (currentEnemy.hp / currentEnemy.maxHp) * 100)}%`}}></div>
              <span className="bar-text">HP: {currentEnemy.hp}</span>
            </div>
            <div className="bar">
              <div className="bar-fill wp-fill" style={{width: `${Math.max(0, (currentEnemy.wp / currentEnemy.maxWp) * 100)}%`}}></div>
              <span className="bar-text">WP: {currentEnemy.wp}</span>
            </div>
          </div>
          <p style={{fontSize: '0.8em', color: '#888', marginTop: '10px'}}>{currentEnemy.desc}</p>
        </div>
      )}

      <div className="log">
        {logs.map((l, i) => <div key={i}>{l}</div>)}
        <div ref={logEndRef} />
      </div>

      <div className="spell-slot">
        {spellSlots.length === 0 && <span className="tile empty">?</span>}
        {spellSlots.map(t => renderTile(t, returnTileToHand))}
      </div>

      <div className="hand">
        {hand.map(t => renderTile(t, moveTileToSlot))}
      </div>

      <div className="controls">
        <button onClick={() => { setSpellSlots([]); setHand([...hand, ...spellSlots]); }}>Clear</button>
        
        {/* UPDATED DISCARD BUTTON */}
        <button 
            onClick={discardAndRedraw} 
            title="Discard all tiles and draw fresh ones"
            style={{border: '1px solid #e74c3c', color: '#e74c3c'}}
        >
            Discard Hand ♻
        </button>

        <button className="cast-btn" disabled={spellSlots.length === 0} onClick={castSpell}>CAST</button>
      </div>
    </div>
  )
}

export default App