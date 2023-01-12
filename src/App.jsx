import {  useEffect, useState } from 'react';
import './App.css';
import Card from './component/Card';
import { createMatrix } from './helpers/shuffle'

function App() {
  const [cards, setCards] = useState(createMatrix());
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);



  const handleChoice = (cell) => {
    choiceOne ? setChoiceTwo(cell): setChoiceOne(cell);
  }
  useEffect(() => {
    if(choiceOne && choiceTwo) {
      if(choiceOne.face === choiceTwo.face && choiceOne.id !== choiceTwo.id) {
        setCards( prevCards => {
          return prevCards.map( card => {
            if (card.face === choiceOne.face ) {
              return { ...card, matched: true }
            } else {
              return card;
            }
          })
        })
        setTimeout(() => {
          resetTurn();
        }, 500)
      } else {
        setTimeout(() => {
          resetTurn();
        }, 500)
      }
    }
  },[choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
  }

  return (
    <div className="App">
    <h1 className='title'>Memory Game</h1>
      <div className='game-field'>
        {cards.map((cell, index) => (
          <Card 
            key={cell.face + index}  
            data={cell} 
            handleChoice={handleChoice}
            flipped = {cell === choiceOne || cell === choiceTwo || cell.matched}
          />
            
        ))}
      </div>
    </div>
  );
}

export default App;
