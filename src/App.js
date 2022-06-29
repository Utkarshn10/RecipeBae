import { useEffect } from "react";
import "./App.css";
import AppContext from "./context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Error from "./pages/404/404";
import Footer from "./components/Footer";
import ReactGA from 'react-ga';


function App() {


  return (
    // Routes
    <BrowserRouter>
      <AppContext>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AppContext>
    </BrowserRouter>
  );
}

export default App;
