import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Components/Header";

const titleLenght = (text, maxLenght) => {
  return text.length > maxLenght ? text.slice(0, maxLenght) + "..." : text;
};

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-marvel--mwwnkb6flj8h.code.run/comics"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fechData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <main>
      <Header />
      <div className="container">
        <div className="card-container">
          {data.results.map((comic, index) => {
            console.log(comic.title);
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
    </main>
  );
};

export default Comics;
