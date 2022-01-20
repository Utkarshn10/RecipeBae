import "./App.css";
import AppContext from "./context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <AppContext>
      <div>
        <Navbar />
        <Home />
      </div>
    </AppContext>
  );
}

export default App;
