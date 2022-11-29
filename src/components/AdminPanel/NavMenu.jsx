import { useState } from 'react';

function NavMenu() {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const onClickBurgerButton = () => {
    setIsCollapsed((value) => !value);
  };

  return (
    <nav
      className="navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Fourth navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Expand at md
        </a>
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
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
