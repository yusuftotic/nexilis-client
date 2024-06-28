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

export const logoutService = async ({ access_token }) => {

  try {

    const response = await API.get("/auth/logout", {
      headers: {
        Authorization: `Bearer: ${access_token}`
      }
    });

    return response.data;

  } catch(err) {

    throw err;

  }

}

export const refreshSessionService = async () => {

  try {
    
    const response = await API.get(`/auth/refresh-session`);
    return response.data;

  } catch (error) {
    throw error;
  }

};