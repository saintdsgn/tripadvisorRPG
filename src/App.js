import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header><h1>TripAdvisorRPG</h1></header>
      <div className="intro">
        <nav>
        <Link style={{textDecoration: 'none', color: 'lightgrey', fontSize: '24px'}} to="/rpg">Enter the game</Link>
        </nav>
      </div>
    </div>
  );
}

export default App;
