import { React, useEffect, useState } from "react";
import BoardModule from "./BoardModule";
import KeyboardModule from "./KeyboardModule";
// import Score from "./Score";
import gameStyle from "./game.css";
import tileAlmostCorrectYellow from "./game.css";
import tileCorrectGreen from "./game.css";
import tile from "./game.css";

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
  const [previousGuesses, setPreviousGuesses] = useState([
    // { id: 1, word: "STATE" },
    // { id: 2, word: "GRATE" },
  ]);

  useEffect(() => {
    const colouredpreviousGuesses = previousGuesses.map(({word}) => {
      console.log(word);
      const colouredWord = word.split("").map((letter) => {
        if(currentAnswer.indexOf(letter) !== -1) {
          return (
            <div style={tileAlmostCorrectYellow}>
              {letter}
            </div>
          )
        } else 
        return (
          <div>
            {letter}
          </div>
        )
      })
      return (
        <div></div>
      )
    })
    

  }, [previousGuesses])

  useEffect(() => {
    setAnswer(selectWord());
  },[])

  const emptyLines = ["", "", ""];

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
  }

  const addLetter = (letter) => {
    if (currentGuess.length < 5) {
      setGuess((currentGuess + letter));
      // console.log(currentGuess);
    }
  };

  const removeLetter = () => {
    setGuess(currentGuess.slice(0, currentGuess.length - 1));
  };

  const submitCurrentGuess = () => {
    if (currentGuess.length === 5) {
      if(WORDLE_DICTIONARY.includes(currentGuess)) {
        const newId = previousGuesses.length + 1;
      console.log(newId);
      setPreviousGuesses((previousGuesses) => [
        ...previousGuesses,
        { id: newId, word: currentGuess },
      ]);
      comparetoAnswer(currentGuess);
      setGuess("");
      setRound(currentRound + 1);
      if (currentRound === 5) {
        alert(`Game over!  The Answer Was : ${currentAnswer}`)
      }
      } else {
        alert("The word is not in the dictionary mate. try again.")
      }
      
    } else {
      alert("The needs to be 5 characters in length. Not more, not less.");
    }
  };

  const comparetoAnswer = (currentGuess) => {
    if (currentGuess === currentAnswer) {
      console.log("You win!");
    } else {console.log("That was chance Number " + currentRound);}
  };

  let props = {
    currentAnswer: currentAnswer,
    prevWords: { previousGuesses },
    currentGuess:  currentGuess ,
    emptyLines: { emptyLines },
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
