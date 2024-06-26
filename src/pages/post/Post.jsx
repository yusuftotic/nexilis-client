import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostById } from '../../slices/postSlice';

import './Post.css';

export default function Post() {

  const { post_id } = useParams();

  const dispatch = useDispatch();

  const post = useSelector(state => state.post.post);

  useEffect(() => {

    dispatch(getPostById({ post_id }));

  }, [dispatch]);

  return (
    <div className="post">
      <div className="postHeader">
        <h2 className="postTitle">{post.title}</h2>
        <p className="postDate">Friday, 21 June 2024</p>
      </div>
      <div className="postContent">
        <p className="postText">{post.content}</p>
      </div>
    </div>
  );
}
