import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";

const titleLenght = (text, maxLenght) => {
  return text.length > maxLenght ? text.slice(0, maxLenght) + "..." : text;
};

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--mwwnkb6flj8h.code.run/comics?page=${page}`
        );
        // console.log("console 4", response.data);
        // console.log("console 5", response.data.results);
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
          {data.results.map((comic, index) => {
            // console.log(comic.title);
            return (
              <article className="comic-card" key={index}>
                <div className="title-comic">
                  <h2>{titleLenght(comic.title, 14)}</h2>
                </div>
                <div className="picture-comic">
                  <img
                    src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                    alt=""
                  />
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

export default Comics;
