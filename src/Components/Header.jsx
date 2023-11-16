const Header = () => {
  return (
    <div className="header-container">
      <img
        className="Home-logo"
        src="https://cdn.registerdisney.go.com/v4/asset/bundler/MARVEL/v4/images/v1/marvel-logo.svg"
        alt=" logo"
      />
      <div className="input-search">
        <input className="search" type="search" placeholder="Iron Man" />
      </div>
    </div>
  );
};

export default Header;
