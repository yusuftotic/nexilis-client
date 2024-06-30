import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getPostById } from '../../slices/postSlice';
import { formatDate } from '../../utils/utils';

import SkeletonPost from '../../skeletons/SkeletonPost';

import './Post.css';

export default function Post() {

  const { post_id } = useParams();

  const dispatch = useDispatch();

  const post = useSelector(state => state.post.post);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    dispatch(getPostById({ post_id }))
      .then(response => {

        if (response.payload?.success) {
          setIsLoading(true);
        }

      });

  }, [dispatch]);

  return (
    <div className="post">
      {
        isLoading
          ?
          <>
            <div className="postHeader">
              <h2 className="postTitle">{post.title}</h2>
              <p className="postDate">{formatDate(post.createdAt)}</p>
            </div>
            <div className="postContent">
              <p className="postText">{post.content}</p>
            </div>
          </>
          :
          <div className="postcard">
            <SkeletonPost />
          </div>
      }
    </div>
  );
}
