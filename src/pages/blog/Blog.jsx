import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPosts } from '../../slices/postSlice';
import { formatDate } from '../../utils/utils';

import SkeletonBlog from '../../skeletons/SkeletonBlog';

import './Blog.css';

export default function Blog() {

  const dispatch = useDispatch();

  const posts = useSelector(state => state.post.posts);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    dispatch(getAllPosts())
      .then(response => {

        if (response.payload?.success) {
          setIsLoading(true);
        }

      });

  }, [dispatch]);

  return (
    <div className='blog'>
      {
        isLoading
          ?
          posts[0]?.content
            ?
            posts.map(post => (
              <Link to={`/post/${post._id}`} className="postcard" key={post._id}>

                <div className="postcardHeader">
                  <p className='postcardDate'>{formatDate(post.createdAt)}</p>
                  <h2 className='postcardTitle'>{post.title}</h2>
                </div>

                <p className="postcardContent">{post.content.substring(0, 500)}...</p>
                {/* <p className="postcardContent">{post.content.length}</p> */}

                {/* <div className="postcardTags">
                <p className="postcardTag tag1">AI</p>
                <p className="postcardTag tag2">Software Development</p>
              </div> */}

              </Link>
            ))
            :
            <div className="postcard">
              <div className="postcardHeader">
                <h2 className="postcardTitle" style={{textAlign: "center"}} >Henüz paylaşılmış bir gönderi yok.</h2>
              </div>
            </div>


          :
          [1, 2, 3, 4, 5].map(n => (
            <div className="postcard" key={n}>
              <SkeletonBlog />
            </div>
          ))
      }
    </div>
  )

}
