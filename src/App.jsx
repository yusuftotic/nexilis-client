import React from "react";

import Nav from "./components/nav/Nav.jsx";
import Blog from './pages/blog/Blog.jsx';

import './App.css';

export default function App () {

  return (
    <div className="app">
      <Nav />
      <Blog />
    </div>
  )
}