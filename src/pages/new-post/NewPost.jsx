import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

import { createNewPost } from '../../slices/postSlice';

import './NewPost.css';

export default function NewPost() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const { access_token } = useSelector(state => state.auth);

  const handlePublish = (e) => {
    
    e.preventDefault();

    dispatch(createNewPost({ access_token, title, content }))
    .then(response => {
      console.log('NewPost.js', response);
      if (response.payload?.success) {
        setTitle('');
        setContent('');
        Swal.fire({
          title: "Your blog post has been successfully shared!",
          icon: "success"
        });
      }
      
    })
    .catch(err => {
      console.log(err);
    })

  }

  return (
    <div className="newpost">

      <div className="newpostHeader">
        <h2 className="newpostHeading">New Post</h2>
      </div>

      <form className="newpostForm" onSubmit={handlePublish}>

        <div className="newpostTitle">
          <label className="newpostTitleLabel">Post Title</label>

          <input
            type="text"
            value={title}
            className="newpostTitleInput"
            placeholder="Enter a title..."
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="newpostText">
          <label className="newpostTextLabel">Post Content</label>

          <textarea
            type="text"
            value={content}
            className="newpostTextInput"
            placeholder="Enter text..."
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <div className="newpostButtonContainer">
          <button type="submit" className="newpostButton" >Publish</button>
        </div>

      </form>

    </div>
  )
}
