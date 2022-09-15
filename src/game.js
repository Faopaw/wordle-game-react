import { React, useEffect, useState } from "react";
import BoardModule from "./BoardModule";
import KeyboardModule from "./KeyboardModule";
// import Score from "./Score";
import gameStyle from "./game.css";

function Game() {
  const WORDLE_DICTIONARY = [
    "APPLE",
    "ABOUT",
    "PIANO",
    "HOUSE",
    "ALONE",
    "ABOVE",
    "MEDIA",
    "RADIO",
    "VOICE",
    "VALUE",
    "ALIVE",
    "OCEAN",
    "IMAGE",
  ];

  const [currentAnswer, setAnswer] = useState(() => selectWord());
  const [currentGuess, setGuess] = useState('')
  const [previousGuesses, setPreviousGuesses] = useState([
    { id: 1, word: "STATE" },
    { id: 2, word: "GRATE" }
  ]);
  const emptyLines = ["", "", ""];

  function selectWord() {
    const num = Math.floor(Math.random() * WORDLE_DICTIONARY.length);
    let newAnswer = WORDLE_DICTIONARY[num];
    console.log(newAnswer);
    return newAnswer;
  }

  function resetGame() {
    setAnswer(() => selectWord());
  }

  const addLetter = (letter) => {
    setGuess(currentGuess + letter);
    console.log(currentGuess);
  };

  function submitCurrentGuess() {
    const numofGuesses = Object.keys(previousGuesses).length;
    setPreviousGuesses(previousGuesses + {id: numofGuesses + 1, word: currentAnswer})
  }

  let props = {
    prevWords: { previousGuesses },
    currentWord: { currentAnswer },
    emptyLines: { emptyLines },
  };

  let keyboardProps = {
    addLetter : addLetter,
    submitCurrentGuess: submitCurrentGuess
  }

  return (
    <div style={gameStyle}>
      <BoardModule props={props} />
      <KeyboardModule keyboardProps={keyboardProps} />
      {/* <Score />  */}
      <button onClick={resetGame}>Reset!</button>
    </div>
  );
}

export default Game;
