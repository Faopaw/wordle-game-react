import "./BoardModule.css";
import "animate.css";

function BoardModule(props) {
  const prevWords = props.props.prevWords;
  const currentGuess = props.props.currentGuess;
  const emptyLines = props.props.emptyLines;
  const currentAnswer = props.props.currentAnswer;
  const extraprops = {
    prevWords: prevWords,
    currentAnswer: currentAnswer,
  };

  return (
    <div className="board-container">
      <div className="board">
        <PreviousGuesses props={extraprops} />

        <CurrentGuess currentGuess={currentGuess} />

        <EmptyLines emptyLines={emptyLines} />
      </div>
    </div>
  );
}

function PreviousGuesses(props) {
  const prevWordsArray = props.props.prevWords.previousGuesses;
  const currentAnswer = props.props.currentAnswer;
  const arrayLength = prevWordsArray.length;
  let GridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${arrayLength}, 1fr)`,
    gridColumnGap: "10px",
    gridRowGap: "10px",
  };

  // Each time a row in the grid is created and the word is placed inside of it. that row itself  is also a grid with 1 row and 5 columns, one for each tile  which will contain 1 letter each.
  let prevWordRows = prevWordsArray.map((wordObj) => {
    let splitWord = wordObj.word.split("").map((letter) => {
      const regEx = new RegExp(letter);
      const letterIndex = wordObj.word.indexOf(letter);
      if (regEx.test(currentAnswer)) {
        if (letter === currentAnswer.charAt(letterIndex)) {
          return <div className="tileCorrectGreen animate__animated animate__bounceIn animate__delay-0.3s">{letter}</div>;
        } else {
          return <div className="tileAlmostCorrectYellow animate__animated animate__bounceIn animate__delay-0.3s">{letter}</div>;
        }
      } else {
        return <div className="tile animate__animated animate__bounceIn animate__delay-0.3s">{letter}</div>;
      }
    });

    return <div className="row">{splitWord}</div>;
  });

  return (
    <div style={GridStyle} className="parent" id="parent">
      {prevWordRows}
    </div>
  );
}

function CurrentGuess({ currentGuess }) {
  // const currentGuess = props.currentGuess.currentGuess;
  const splitcurrentGuess = currentGuess.split("").map((letter) => {
    return <div className="tile animate__animated animate__bounceIn ">{letter}</div>;
  });

  return (
    // <div className="parent">
    <div className="row">{splitcurrentGuess}</div>
    // </div>
  );
}

function EmptyLines({ emptyLines }) {
  const emptyLinesNum = emptyLines;
  const fakeWord = [" ", " ", " ", " ", " "];
  const emptyRows = [];
  let GridStyle = {
    display: "grid",
    gridTemplateRows: `repeat(${1}, 1fr)`,
    gridColumnGap: "10px",
    gridRowGap: "10px",
  };
  const splitfakeWord = fakeWord.map((letter) => {
    return <div className="tile">{letter}</div>;
  });
  for (let i = 0; i < emptyLinesNum; i++) {
    emptyRows.push(splitfakeWord);
  }

  return (
    <div style={GridStyle} className="parent" id="parent">
      <div className="row">{emptyRows}</div>
    </div>
  );
}

export default BoardModule;
