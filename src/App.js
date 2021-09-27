import "./App.css";
import ToDo from "./components/ToDo";
import { GlobalStyle } from "./globalStyles";

function App() {
  return (
    <div className="App">
      <h1>ToDo Listè</h1>
      <ToDo />
      <GlobalStyle />
    </div>
  );
}

export default App;
