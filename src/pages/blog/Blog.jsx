import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getAllPosts } from '../../slices/postSlice';
import { formatDate } from '../../utils/utils';

import './Blog.css';

export default function Blog() {

  const dispatch = useDispatch();

  const posts = useSelector(state => state.post.posts);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {

    dispatch(getAllPosts());

  }, [dispatch]);

  useEffect(() => {

    posts[0]?.content && setLoading(true);

  }, [posts]);

  if (isLoading) {
    return (
      <div className='blog'>
        {
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
        }
        <Link to={`/post/76788768768`} className="postcard">

          <div className="postcardHeader">
            <p className='postcardDate'>Thursday, 27 June 2024</p>
            <h2 className='postcardTitle'>ChatGPT: Yapay Zekanın Sınırlarını Zorlayan Konuşma Modeli</h2>
          </div>

          <h3 className="postcardContent">Bu p etiketinin içinde artık yazının ön izlemesi yerine alt başlık yer alacak.</h3>

          {/* <div className="postcardTags">
            <p className="postcardTag tag1">AI</p>
            <p className="postcardTag tag2">Software Development</p>
          </div> */}

        </Link>
        <Link to={`/post/76788768768`} className="postcard">

          <div className="postcardHeader">
            <p className='postcardDate'>Thursday, 27 June 2024</p>
            <h2 className='postcardTitle'>Neden JavaScript yazıyorum?</h2>
          </div>

          <h3 className="postcardContent">Bu p etiketinin içinde artık yazının ön izlemesi yerine alt başlık yer alacak.</h3>

          {/* <div className="postcardTags">
            <p className="postcardTag tag1">AI</p>
            <p className="postcardTag tag2">Software Development</p>
          </div> */}

        </Link>
        <Link to={`/post/76788768768`} className="postcard">

          <div className="postcardHeader">
            <p className='postcardDate'>Thursday, 27 June 2024</p>
            <h2 className='postcardTitle'>Neden JavaScript yazıyorum?</h2>
          </div>

          <h3 className="postcardContent">Bu p etiketinin içinde artık yazının ön izlemesi yerine alt başlık yer alacak.</h3>

          {/* <div className="postcardTags">
            <p className="postcardTag tag1">AI</p>
            <p className="postcardTag tag2">Software Development</p>
          </div> */}

        </Link>
        <Link to={`/post/76788768768`} className="postcard">

          <div className="postcardHeader">
            <p className='postcardDate'>Thursday, 27 June 2024</p>
            <h2 className='postcardTitle'>Neden JavaScript yazıyorum?</h2>
          </div>

          <h3 className="postcardContent">Bu p etiketinin içinde artık yazının ön izlemesi yerine alt başlık yer alacak.</h3>

          {/* <div className="postcardTags">
            <p className="postcardTag tag1">AI</p>
            <p className="postcardTag tag2">Software Development</p>
          </div> */}

        </Link>
        <Link to={`/post/76788768768`} className="postcard">

          <div className="postcardHeader">
            <p className='postcardDate'>Thursday, 27 June 2024</p>
            <h2 className='postcardTitle'>Neden JavaScript yazıyorum?</h2>
          </div>

          <h3 className="postcardContent">Bu p etiketinin içinde artık yazının ön izlemesi yerine alt başlık yer alacak.</h3>

          {/* <div className="postcardTags">
            <p className="postcardTag tag1">AI</p>
            <p className="postcardTag tag2">Software Development</p>
          </div> */}

        </Link>
        <Link to={`/post/76788768768`} className="postcard">

          <div className="postcardHeader">
            <p className='postcardDate'>Thursday, 27 June 2024</p>
            <h2 className='postcardTitle'>Neden JavaScript yazıyorum?</h2>
          </div>

          <h3 className="postcardContent">Bu p etiketinin içinde artık yazının ön izlemesi yerine alt başlık yer alacak.</h3>

          {/* <div className="postcardTags">
            <p className="postcardTag tag1">AI</p>
            <p className="postcardTag tag2">Software Development</p>
          </div> */}

        </Link>
        <Link to={`/post/76788768768`} className="postcard">

          <div className="postcardHeader">
            <p className='postcardDate'>Thursday, 27 June 2024</p>
            <h2 className='postcardTitle'>Neden JavaScript yazıyorum?</h2>
          </div>

          <h3 className="postcardContent">Bu p etiketinin içinde artık yazının ön izlemesi yerine alt başlık yer alacak.</h3>

          {/* <div className="postcardTags">
            <p className="postcardTag tag1">AI</p>
            <p className="postcardTag tag2">Software Development</p>
          </div> */}

        </Link>
      </div>
    )
  }

}
