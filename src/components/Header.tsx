import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="navbar mobile-sidenav inc-shape navbar-common navbar-sticky navbar-default validnavs">
        <div className="container-full d-flex justify-content-between align-items-center">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars" />
            </button>
            <Link className="navbar-brand" to="/" onClick={closeAll}>
              <img src="assets/img/bionagro-logo.svg" className="logo" alt="Bionagro Export" />
            </Link>
          </div>

          <div
            className={`collapse navbar-collapse collapse-mobile${menuOpen ? " show" : ""}`}
            id="navbar-menu"
          >
            <button
              type="button"
              className="navbar-toggle"
              onClick={() => setMenuOpen(false)}
              aria-label="Close navigation"
            >
              <i className="fa fa-times" />
            </button>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="/" end onClick={closeAll}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about-us" onClick={closeAll}>
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={closeAll}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/track-request" onClick={closeAll}>
                  Track Your Request
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={closeAll}>
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" onClick={closeAll}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`overlay-screen${menuOpen ? " opened" : ""}`}
          onClick={() => setMenuOpen(false)}
        />
      </nav>
    </header>
  );
}
