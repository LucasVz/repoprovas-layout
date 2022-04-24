import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;

async function createUser(user) {
  await axios.post(`${REACT_APP_BASE_URL}/signup`, user);
}

async function signin(data) {
  const token = await axios.post(`${REACT_APP_BASE_URL}/signin`, data);
  return token;
}


async function signout(token) {
  const config = createConfig(token);
  await axios.delete(`${REACT_APP_BASE_URL}/signout`, config);
}



const api = {
  createUser,
  signin,
  signout,
};

export default api;
