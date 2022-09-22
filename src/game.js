import { React, useEffect, useState } from "react";
import BoardModule from "./BoardModule";
import KeyboardModule from "./KeyboardModule";
import gameStyle from "./game.css";
import tileAlmostCorrectYellow from "./game.css";
import tileCorrectGreen from "./game.css";
import tile from "./game.css";
import row from "./game.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Game() {
  let timerStart = Date.now();
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
  const [emptyLines, setemptyLines] = useState(5);
  const successOptions =  {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    };

  const errorOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    };
  const notifySuccess = (word) => {
    let timerEnd = Date.now();
    toast.success(`Answer : ${word}`,successOptions);
    toast.success(`Time Elapsed : ${(timerEnd - timerStart) / 100} seconds`, successOptions);
    console.log(`Success. Answer: ${word}`);
  }

  const notifyFailure = (word) => {
    let timerEnd = Date.now();
    toast.error(`Answer : ${word}`,errorOptions);
    toast.error(`Time Elapsed : ${(timerEnd - timerStart) / 100} seconds`,errorOptions);
    console.log(`Failure. Answer: ${word}`);
  }

  useEffect(() => {

    setemptyLines(5 - previousGuesses.length);
  }, [previousGuesses]);

  useEffect(() => {
    setAnswer(selectWord());
  }, []);
 

  function selectWord() {
    const num = Math.floor(Math.random() * WORDLE_DICTIONARY.length);
    let newAnswer = WORDLE_DICTIONARY[num];
    console.log(newAnswer);
    // setAnswer(newAnswer)
    return newAnswer;
  }

  async function resetGame() {
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
        if (hasWon === true) {
          // displayToasts(currentAnswer);
          return resetGame() }
        if ((currentRound === 6) && (hasWon === false)) {
          // let timerEnd = Date.now();
          // alert(`Game over!  The Answer Was : ${currentAnswer}. Time Elapsed: ${(timerEnd - timerStart) / 100} seconds`);
          notifyFailure(currentAnswer);
        } else if (currentRound === 6) {
          // let timerEnd = Date.now();
          // alert(`Game over!  The Answer Was : ${currentAnswer}. Time Elapsed: ${(timerEnd - timerStart) / 100} seconds`);
          notifyFailure(currentAnswer);
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
      notifySuccess(currentAnswer);
      // alert(`You win! Time Elapsed: ${(timerEnd - timerStart) / 100} seconds`);
      return sethasWon(true);
    } else {
      console.log("That was chance Number " + currentRound);
      return sethasWon(false);
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
    hasWon : hasWon
  };

  return (
    <div style={gameStyle}>
      <BoardModule props={props} />
      <KeyboardModule keyboardProps={keyboardProps} />
      {/* <Score />  */}
      <button onClick={resetGame}>Reset!</button>
      <ToastContainer 
        position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
      />
    </div>
  );
}

export default Game;
