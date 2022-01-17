import "./App.css";
import Appcontext from "./context";
import Home from "./pages/Home";

function App() {
  return (
    <Appcontext>
      <div>
        <Home />
      </div>
    </Appcontext>
  );
}

export default App;
