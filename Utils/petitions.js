import axios from 'axios';

const usingAPI = 'http://localhost:8080';

/**
 * Login user and get auth token
 * @param {string} emailUser
 * @param {string} passwordUser
 * @returns
 */
function userPetition(emailUser, passwordUser) {
  return axios.post(`${usingAPI}/login`, {
    email: emailUser,
    password: passwordUser,
  });
}

// function productList()

export default userPetition;
