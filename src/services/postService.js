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
