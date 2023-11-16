import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="logo-home">
        <img
          src=" https://res.cloudinary.com/lereacteur-apollo/image/upload/v1582097342/react-new-exercices/Marvel/langfr-1920px-MarvelLogo.svg_uw9pi8.png"
          alt=""
        />
      </div>

      <Link className="link-univers" to="/">
        <h1> Bienvenue dans l'univers Marvel </h1>
      </Link>
    </div>
  );
};

export default Home;
