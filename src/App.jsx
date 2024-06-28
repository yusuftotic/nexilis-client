import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { refreshSession } from "./slices/authSlice.js";

import Nav from "./components/nav/Nav.jsx";
import Blog from './pages/blog/Blog.jsx';
import Post from "./pages/post/Post.jsx";
import Login from "./pages/login/Login.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import NewPost from "./pages/new-post/NewPost.jsx";
import NotFound from './pages/not-found/NotFound.jsx';

import './App.css';

export default function App() {

  const { pathname } = useLocation();

  const isDashboardRoute = pathname.startsWith('/dashboard');

  const isLoginRoute = pathname.startsWith('/login');

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { access_token } = useSelector(state => state.auth);

  const navigate = useNavigate();

  useEffect(() => {

    if (pathname.includes('/dashboard')) {

      if (!access_token) {
        dispatch(refreshSession())
          .then(response => {
            if (!response.payload.access_token) navigate('/login');
          })
          .catch((err) => {
            navigate('/login');
            throw err;
          })
      }

    }

  }, [access_token, dispatch]);

  return (
    <div className="app">

      {!isDashboardRoute && !isLoginRoute && <Nav />}

      <Routes>

        <Route path="/" element={<Blog />} />

        <Route path="/post/:post_id" element={<Post />} />

        <Route path="/login" element={<Login />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="new-post" element={<NewPost />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  )
}