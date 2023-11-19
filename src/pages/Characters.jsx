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

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get(
          "https://site--backend-marvel--mwwnkb6flj8h.code.run/characters"
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
    </main>
  );
};
export default Characters;
