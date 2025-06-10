import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-header">
        <img src="../assets/images/logo.png" alt="Spotify Logo" />
      </div>

      <div className="mid-header">
        <input type="text" placeholder="Buscar" className="search-bar" />
      </div>

      <div className="end-header">
        <div className="profile">
          <img src="/assets/user.png" alt="User" className="profile-picture" />
          <span>Meu Perfil</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
