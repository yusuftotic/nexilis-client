import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

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
            <Helmet>
              <title>{post.title}</title>
              <meta property="og:title" content={post.title.substring(0, 35)} />
              <meta property="og:description" content={post.content.substring(0, 50)} />
              {/* <meta property="og:image" content={post.imageUrl} /> */}
              <meta property="og:url" content={`https://nexilis.vercel.app/post/${post._id}`} />
              <meta property="og:type" content="article" />
            </Helmet>
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
