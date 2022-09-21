import { React, useEffect, useState } from "react";
import BoardModule from "./BoardModule";
import KeyboardModule from "./KeyboardModule";
import gameStyle from "./game.css";
import tileAlmostCorrectYellow from "./game.css";
import tileCorrectGreen from "./game.css";
import tile from "./game.css";
import row from "./game.css";

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
  const [currentRound, setRound] = useState(1);
  const [currentAnswer, setAnswer] = useState();
  const [currentGuess, setGuess] = useState("");
  const [hasWon, sethasWon] = useState(false)
  const [previousGuesses, setPreviousGuesses] = useState([
  


  ]);
  const [emptyLines, setemptyLines] = useState(5)

  useEffect(() => {

    setemptyLines(5 - previousGuesses.length);
  }, [previousGuesses]);

  useEffect(() => {
    setAnswer(selectWord());
  }, []);

 
  let timerStart = Date.now();

 

 

  function selectWord() {
    const num = Math.floor(Math.random() * WORDLE_DICTIONARY.length);
    let newAnswer = WORDLE_DICTIONARY[num];
    console.log(newAnswer);
    // setAnswer(newAnswer)
    return newAnswer;
  }

  function resetGame() {
    setAnswer(() => selectWord());
    setPreviousGuesses([]);
    setRound(1);
    sethasWon(false);
  }

  const addLetter = (letter) => {
    if (currentGuess.length < 5) {
      setGuess(currentGuess + letter);
      // console.log(currentGuess);
    }
  };

  const removeLetter = () => {
    setGuess(currentGuess.slice(0, currentGuess.length - 1));
  };

  const submitCurrentGuess = () => {
    if (currentGuess.length === 5) {
      if (WORDLE_DICTIONARY.includes(currentGuess)) {
        const newId = previousGuesses.length + 1;
        // console.log(newId);
        setPreviousGuesses((previousGuesses) => [
          ...previousGuesses,
          { id: newId, word: currentGuess },
        ]);
        const hasWon = comparetoAnswer(currentGuess);
        setGuess("");
        setRound(currentRound + 1);
        if ((currentRound === 6) && (hasWon === false)) {
          let timerEnd = Date.now();
          alert(`Game over!  The Answer Was : ${currentAnswer}. Time Elapsed: ${(timerEnd - timerStart) / 100} seconds`); // BUG ON THIS LINE. FIRES WHEN CORRECT GUESS IS MADE ON LAST ATTEMPT.
        }
      } else {
        alert("The word is not in the dictionary mate. try again.");
      }
    } else {
      alert("The needs to be 5 characters in length. Not more, not less.");
    }
  };

  const comparetoAnswer = (currentGuess) => {
    if (currentGuess === currentAnswer) {
      sethasWon(true);
      let timerEnd = Date.now();
      console.log(`You win! Time Elapsed: ${(timerEnd - timerStart) / 100} seconds`);
      alert(`You win! Time Elapsed: ${(timerEnd - timerStart) / 100} seconds`);
      return hasWon === true;
    } else {
      console.log("That was chance Number " + currentRound);
    }
  };

  let props = {
    currentAnswer: currentAnswer,
    prevWords: { previousGuesses },
    currentGuess: currentGuess,
    emptyLines:  emptyLines ,
  };

  let keyboardProps = {
    addLetter: addLetter,
    submitCurrentGuess: submitCurrentGuess,
    removeLetter: removeLetter,
  };

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
