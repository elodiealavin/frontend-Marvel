import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <Link to="/">
        <img
          className="Home-logo"
          src="https://cdn.registerdisney.go.com/v4/asset/bundler/MARVEL/v4/images/v1/marvel-logo.svg"
          alt=" logo"
        />
      </Link>
      <div className="input-search">
        <input className="search" type="search" placeholder="Iron Man" />
      </div>

      <div className="header-button">
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
    </div>
  );
};

export default Header;
