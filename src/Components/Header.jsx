import { Link } from "react-router-dom";
import Search from "./Search";
import { useLocation } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  let location = useLocation();
  console.log(location);
  return (
    <div className="header-container">
      <Link to="/">
        <img
          className="Home-logo"
          src="https://cdn.registerdisney.go.com/v4/asset/bundler/MARVEL/v4/images/v1/marvel-logo.svg"
          alt=" logo"
        />
      </Link>
      {(location.pathname === "/comics" ||
        location.pathname === "/characters") && (
        <div className="input-search">
          <Search search={search} setSearch={setSearch} />
        </div>
      )}

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
