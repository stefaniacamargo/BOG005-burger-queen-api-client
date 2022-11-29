import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import urbanBurger from '../../public/Urban Burger (6).png';
import userPetition from '../../Utils/petitions';

function Login() {
  const navigate = useNavigate();
  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeEmail(event) {
    setEmailUser(event.target.value);
  }

  function handleChangePassword(event) {
    setPasswordUser(event.target.value);
  }

  const onFormSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsLoading(true);
      try {
        const response = await userPetition(emailUser, passwordUser);
        setErrorMessage('');
        localStorage.setItem('jwt', response.data.accessToken);
        localStorage.setItem('user', response.data.user.email);
        if (response.data.user.role === 'admin') {
          navigate('/admin');
        }
      } catch (error) {
        setIsLoading(false);
        setErrorMessage(error.response.data);
      }
    },
    [emailUser, passwordUser, navigate],
  );

  return (
    <section className="componentLogin">
      <div className="login-bg">
        <main className="container login-container">
          <div className="login-form w-95 m-auto d-flex flex-column">
            <img className="login-image m-auto" src={urbanBurger} alt="Login" />
            <form
              className="p-4 bg-dark text-white rounded-3 border border-white "
              onSubmit={onFormSubmit}
            >
              <h3 className="h4 mb-3 fw-normal text-center">
                Please fill up the information
              </h3>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  onChange={handleChangeEmail}
                  value={emailUser}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  required
                  onChange={handleChangePassword}
                  value={passwordUser}
                />
              </div>
              <p id="errorMessage">{errorMessage}</p>
              <button
                className="w-100 btn btn-lg btn-primary mt-4"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  />
                ) : (
                  <>Log In</>
                )}
              </button>
            </form>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Login;
