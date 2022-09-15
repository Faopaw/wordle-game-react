import "./App.css";
import Game from "./game";

function App() {
  return (
    <div>
      <h1 className="title">Wordle</h1>
      <div className="body">
        <Game /> {/*Will be display flexbox */}
      </div>
    </div>
  );
}
export default App;
