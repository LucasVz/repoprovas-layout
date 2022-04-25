import axios from "axios";

function createConfig(token) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

const REACT_APP_BASE_URL = process.env.REACT_APP_BASE_URL;
console.log(REACT_APP_BASE_URL)

async function createUser(user) {
  await axios.post(`${REACT_APP_BASE_URL}/signup`, user);
}

async function signin(data) {
  console.log(data)
  const token = await axios.post(`${REACT_APP_BASE_URL}/`, data);
  console.log("token:" + token)
  return (token);
}

export async function getTestsByDisciplines(auth) {
  const config = createConfig(auth);
  const token = await axios.get(`${REACT_APP_BASE_URL}/tests/disciplines`, config);
  return token;
}

export async function getTestsByTeacher(auth) {
  const config = createConfig(auth);
  const token = await axios.get(`${REACT_APP_BASE_URL}/tests/teachers`, config);
  return token;
}

// async function signout(token) {
//   const config = createConfig(token);
//   await axios.delete(`${REACT_APP_BASE_URL}/signout`, config);
// }

const api = {
  createUser,
  signin,
  //signout,
};

export default api;
