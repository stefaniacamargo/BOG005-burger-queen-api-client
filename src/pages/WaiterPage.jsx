import urbanBurgerRemove from '../../public/Urban_Burger-removebg.png';
import User from '../../public/Usuario (2).png';

function WaiterPage() {
  return (
    <>
      <section className="viewWaiter" />
      <nav className="navBar" aria-label="Fourth navbar example">
        <div className="container-fluid">
          <img
            className="logo-image m-auto"
            src={urbanBurgerRemove}
            alt="Login"
          />
          <img className="userLogo" src={User} alt="Login" />
        </div>
      </nav>
      <div className="title">
        <h2>Make a order</h2>
      </div>
      <section className="sectionOptions">
        <select className="form-select" aria-label="Default select example">
          <option selected>Select the menu</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
        </select>
        <section className="container-menu">
          <p>Order Summary</p>
          <input type="text" placeholder="Customer Name" />
          <input type="text" placeholder="Total $" />
          <div className="container-buttons">
            <button type="button" className="btn btn-success">
              Send
            </button>
            <button type="button" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

export default WaiterPage;
