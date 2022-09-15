import "./BoardModule.css";

function BoardModule(props) {
  const prevWords = props.props.prevWords;
  const currentWord = props.props.currentWord;
  const emptyLines = props.props.emptyLines;

  return (
    <div className="board-container">
      <div className="board">
        <PreviousGuesses prevWords={prevWords} />

        <CurrentGuess currentWord={currentWord} />

        <EmptyLines emptyLines={emptyLines} />
      </div>
    </div>
  );
}

function PreviousGuesses(props) {
  const prevWordsArray = props.prevWords.previousGuesses;
  console.log(prevWordsArray);

  // Each time a row in the grid is created and the word is placed inside of it. that row itself  is also a grid with 1 row and 5 columns, one for each tile  which will contain 1 letter each.
  let prevWordRows = prevWordsArray.map((wordObj) => {
    let splitWord = wordObj.word.split("").map((letter) => {
      return (
        <div  className="tile">
          {letter}
        </div>
      );
    });

    return (
      <div  className="row">
        {splitWord}
      </div>
    );
  });

  return (
    <div className="parent" id="parent">
      {prevWordRows}
    </div>
  );
}

function CurrentGuess() {}

function EmptyLines() {}

export default BoardModule;
