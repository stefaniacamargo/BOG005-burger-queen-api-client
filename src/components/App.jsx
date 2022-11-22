import { useState } from "react";
import urbanBurger from "../../public/Urban Burger (6).png";

const App = () => {
  return (
    <div class="login-bg">
      <main class="container login-container">
        <div class="login-form w-100 m-auto d-flex flex-column">
          <img
            class="login-image m-auto"
            src={urbanBurger}
            alt="Login Image"
          />
          <form class="p-4">
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            <div class="form-floating">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
