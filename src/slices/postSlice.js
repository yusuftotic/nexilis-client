import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import * as services from '../services/postService';

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async () => {
    
    const data = await services.getAllPostsService();

    return data;

  }
);

export const getPostById = createAsyncThunk(
  "post/getPostById",
  async ({ post_id }) => {

    const data = await services.getPostById({ post_id });

    return data;

  }
);

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    post: {}
  },
  extraReducers: builder => {
    builder
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.posts = action.payload.data.posts.reverse();
        // console.log(state.posts);
      })
      .addCase(getPostById.fulfilled, (state, action) => {
        state.post = action.payload.data.post;
        // console.log(action.payload.data.post);
      })
  }
});

export default postSlice.reducer;