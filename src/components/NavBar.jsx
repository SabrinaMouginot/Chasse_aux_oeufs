import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Accueil</Link> | 
      <Link to="/game">Jouer</Link> | 
      <Link to="/about">À propos</Link>
    </nav>
  );
}

export default NavBar;
