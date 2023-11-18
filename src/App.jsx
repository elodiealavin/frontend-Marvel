import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";

import "./App.css";

import Home from "./pages/Home";
import Comics from "./pages/Comics";
import Characters from "./pages/Characters";
import CharactersComicsId from "./pages/Characters-comics-Id";

// import Posts from "./Components/Posts";
// import Paginations from "./Components/Paginations";

const App = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [posts, setPosts] = useState([]);
  // const [postPerPage] = useState(100);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     setLoading(true);
  //     const res = await axios.get(
  //       `https://site--backend-marvel--mwwnkb6flj8h.code.run/comics`
  //     );
  //     setPosts(res.data);
  //     setLoading(false);
  //   };
  //   fetchPosts();
  // }, []);

  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route
          path="/character/:characterId"
          element={<CharactersComicsId />}
        />

        {/* <Posts post={currentPosts} loading={loading} />
        <Paginations
          postPerPage={postPerPage}
          totalPosts={posts.lenght}
          paginate={paginate}
        /> */}
      </Routes>
    </Router>
  );
};

export default App;
