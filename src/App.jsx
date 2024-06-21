import React from "react";
import { Routes, Route } from 'react-router-dom';

import Nav from "./components/nav/Nav.jsx";
import Blog from './pages/blog/Blog.jsx';
import Post from "./pages/post/Post.jsx";
import NotFound from './pages/not-found/NotFound.jsx';

import './App.css';

export default function App() {

  return (
    <div className="app">
      <Nav />

      <Routes>

        <Route path="/" element={<Blog />} />

        <Route path="/post" element={<Post />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}