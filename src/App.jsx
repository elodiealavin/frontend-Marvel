import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

import "./App.css";

import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharactersComicsId from "./pages/Characters-comics-Id";
import { useState } from "react";
const App = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/characters"
            search={search}
            setSearch={setSearch}
            element={<Characters />}
          />
          <Route
            path="/comics"
            search={search}
            setSearch={setSearch}
            element={<Comics />}
          />
          <Route path="/character/:id" element={<CharactersComicsId />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
