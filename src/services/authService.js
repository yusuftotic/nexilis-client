import API from './api';

export const signupService = async ({ name, username, email, password }) => {

  try {

    const response = await API.post("/auth/signup", { name, username, email, password });

    return response.data;

  } catch (err) {

    throw err;

  }

}

export const loginService = async ({ username, password }) => {

  try {

    const response = await API.post("/auth/login", { username, password });
    return response.data;

  } catch (err) {

    throw err;

  }

}