import axios from 'axios';

const usingAPI = 'http://localhost:8080';

/**
 * Login user and get auth token
 * @param {string} emailUser
 * @param {string} passwordUser
 * @returns
 */
export function userPetition(emailUser, passwordUser) {
  return axios.post(`${usingAPI}/login`, {
    email: emailUser,
    password: passwordUser,
  });
}

const getToken = () => localStorage.getItem('jwt');

export function getProductList() {
  return axios.get(`${usingAPI}/products`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
}
export function getProductById(id) {
  return axios.get(`${usingAPI}products/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
}
// Editando la informacion del nuevo producto
export function patchProduct(name, price, type, image, id) {
  console.log('patch', id);
  return axios.patch(
    `${usingAPI}products/${id}`,
    { name, price, image, type },
    { headers: { Authorization: `Bearer ${getToken()}` } },
  );
}
