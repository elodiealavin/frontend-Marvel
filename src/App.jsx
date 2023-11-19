import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

import "./App.css";

import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharactersComicsId from "./pages/Characters-comics-Id";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/character/:id" element={<CharactersComicsId />} />
      </Routes>
    </Router>
  );
};

export default App;
