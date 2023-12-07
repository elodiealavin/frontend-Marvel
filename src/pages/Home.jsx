import { Link } from "react-router-dom";
// import logo from "../assets/new-logo.jpeg";

const Home = () => {
  return (
    <div className="Home-container">
      {/* <div className="logo-home">
        <img className="hero" src={logo} alt="" />
      </div> */}

      <header className="home-title">
        <h1> Bienvenue dans l'univers Marvel </h1>
      </header>

      <footer>
        <div className="button-direction">
          <Link to="/characters">
            <div>
              <button>Personnages</button>
            </div>
          </Link>
          <Link to="/comics">
            <div>
              <button>Comics</button>
            </div>
          </Link>
          <div>
            <button>Favoris</button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
