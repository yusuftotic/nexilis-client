import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom';

import Nav from "./components/nav/Nav.jsx";
import Blog from './pages/blog/Blog.jsx';
import Post from "./pages/post/Post.jsx";
import Login from "./pages/login/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import NotFound from './pages/not-found/NotFound.jsx';

import './App.css';

export default function App() {

  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/dashboard');

  console.log(location);

  return (
    <div className="app">

      {!isDashboardRoute && <Nav />}

      <Routes>

        <Route path="/" element={<Blog />} />

        <Route path="/post" element={<Post />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="new-post" element={<NewPost />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}