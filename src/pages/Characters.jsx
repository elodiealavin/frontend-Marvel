import Header from "../Components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const nameLenght = (text, maxLenght) => {
  return text.length > maxLenght ? text.slice(0, maxLenght) + "..." : text;
};

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--mwwnkb6flj8h.code.run/characters?page=${page}`
        );
        console.log(response.data);
        setTotalItems(response.data.count);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fechData();
  }, [page]);

  useEffect(() => {
    setTotalPage(Math.ceil(totalItems / 100));
  }, [totalItems]);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <Header />
      <div className="container">
        <div className="card-container">
          {data.results.map((character, index) => {
            // console.log(character.name);
            return (
              <article className="comic-card" key={index}>
                <div className="name-character">
                  <h2>{nameLenght(character.name, 14)}</h2>
                  {/* console.log(character.name) */}
                </div>
                <div className="picture-characters">
                  <Link to={`/character/${character._id}`}>
                    <img
                      src={
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      }
                      alt=""
                    />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="button-page">
        <button
          onClick={() => {
            let pagination = page - 1;
            setPage(pagination);
          }}
          disabled={page === 1 ? true : false}
        >
          Retour
        </button>
        <button
          onClick={() => {
            let pagination = page + 1;
            setPage(pagination);
          }}
          disabled={page === totalPage ? true : false}
        >
          Suivant
        </button>
      </div>
    </main>
  );
};
export default Characters;
