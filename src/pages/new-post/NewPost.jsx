import React, { useState } from 'react';

import './NewPost.css';

export default function NewPost() {

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="newpost">

      <div className="newpostHeader">
        <h2 className="newpostHeading">New Post</h2>
      </div>

      <form className="newpostForm">

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
          <label className="newpostTextLabel">Post Text</label>

          <textarea
            type="text"
            value={text}
            className="newpostTextInput"
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="newpostButtonContainer">
          <button type="button" className="newpostButton" >Publish</button>
        </div>

      </form>

    </div>
  )
}
