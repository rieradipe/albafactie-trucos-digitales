import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="brand">
        <a
          href="https://www.rieradipe.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="rainbow-link"
        >
          🌈
        </a>

        <NavLink to="/" className="brand-name">
          RieraDiPe
        </NavLink>

        <nav>
          <NavLink to="/recursos" className="resource-link">
            Recursos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
