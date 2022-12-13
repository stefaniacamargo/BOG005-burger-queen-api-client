import { useState } from 'react';
import urbanBurgerRemove from '../../../public/Urban_Burger-removebg.png';

function NavMenu() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onClickBurgerButton = () => {
    setIsCollapsed((value) => !value);
  };

  return (
    <nav
      className="nav-color navbar navbar-expand-md "
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid">
        <img
          className="logo-image m-auto"
          src={urbanBurgerRemove}
          alt="Login"
        />
        <button
          className={`navbar-toggler ${isCollapsed ? 'collapsed' : ''}`}
          type="button"
          aria-controls="main-nav-menu"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={onClickBurgerButton}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`navbar-collapse collapse ${isCollapsed ? '' : 'show'}`}
          id="main-nav-menu"
        >
          <ul className="navbar-nav me-auto mb-1 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Users
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Log Out
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
