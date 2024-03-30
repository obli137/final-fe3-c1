import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav>
      <div className="dhodonto">
        <h1>
          <span className="dh-highlight">DH</span> Odonto
        </h1>
      </div>

      <div className="links">
        <Link to="/">
          <h3>Home</h3>
        </Link>
        <Link to="/favs">
          <h3>Favs</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>

        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>🌛</button>
      </div>
    </nav>
  );
};

export default Navbar;
