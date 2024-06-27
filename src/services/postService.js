import API from './api';

export const getAllPostsService = async () => {

  try {

    const response = await API.get("/post");

    return response.data;

  } catch (err) {

    throw err;

  }

}

export const getPostById = async ({ post_id }) => {

  try {

    const response = await API.get(`/post/${post_id}`);

    return response.data;

  } catch (err) {

    throw err;

  }

}

export const createNewPost = async ({ access_token, title, content }) => {

  try {

    const response = await API.post(`/post/create`, { title, content },
      {
        headers: {
          Authorization: `Bearer: ${access_token}`
        }
      }
    );

    return response.data;

  } catch (err) {

    throw err;

  }

}