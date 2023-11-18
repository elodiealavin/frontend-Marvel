import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CharactersComicsId = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams;
  const id = params.id;

  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.get(
          `https://site--backend-marvel--mwwnkb6flj8h.code.run/character/${id}`
        );
        console.log(response.data);
        console.log(response.data.results);
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
    <div>
      {data.results.map((comic) => {
        console.log("response", comic.title);
      })}
      ;
    </div>
  );
};

export default CharactersComicsId;