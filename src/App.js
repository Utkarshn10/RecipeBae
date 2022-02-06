import "./App.css";
import AppContext from "./context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./pages/404/404";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppContext>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
