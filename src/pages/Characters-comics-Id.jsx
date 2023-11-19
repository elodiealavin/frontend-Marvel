import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";

const descriptionLenght = (text, maxLenght) => {
  return text.length > maxLenght ? text.slice(0, maxLenght) + "..." : text;
};

const CharactersComicsId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [comics, setComics] = useState([]);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fechData = async () => {
      try {
        const characterResponse = await axios.get(
          `https://site--backend-marvel--mwwnkb6flj8h.code.run/character/${id}`
        );
        const comicsResponse = await Promise.all(
          characterResponse.data.comics.map((comicId) =>
            axios.get(
              `https://site--backend-marvel--mwwnkb6flj8h.code.run/comic/${comicId}`
            )
          )
        );

        // console.log("console 1", characterResponse);
        // console.log("console 2", characterResponse.data.comics);
        // console.log("console 3", comicsResponse.data);
        setData(characterResponse.data);
        setComics(comicsResponse.map((response) => response.data));

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fechData();
  }, [id]);
  return isLoading ? (
    <p>Chargement ...</p>
  ) : (
    <main>
      <Header />
      <div className="container">
        <div className="card-container">
          {data.title}
          {comics.map((comic) => (
            <div className="comic-card" key={comic._id}>
              <div className="title-comic">
                <h3>{comic.title}</h3>
              </div>
              <div className="picture-comic">
                <img
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                />
              </div>
              <div>
                <p
                  style={{
                    color: "yellow",
                    marginTop: "20px",
                    marginBottom: "20Px",
                  }}
                >
                  {" "}
                  {descriptionLenght(comic.title, 30)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default CharactersComicsId;
