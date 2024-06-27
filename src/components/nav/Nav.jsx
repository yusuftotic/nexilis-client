import React from 'react';

import { FaGithub, FaXTwitter, FaLinkedin, FaInstagram } from "react-icons/fa6";

import './Nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div className="nav">
      
      <Link to="/"><h1 className="navLogo">nexilis</h1></Link>

      <div className="navLinks">
        <a target='_blank' href="https://github.com/yusuftotic"><FaGithub className="navIcon" /></a>
        <a target='_blank' href="https://x.com/toticx"><FaXTwitter className="navIcon" /></a>
        <a target='_blank' href="https://www.linkedin.com/in/totic"><FaLinkedin className="navIcon" /></a>
        <a target='_blank' href="https://instagram.com/yusuftotic"><FaInstagram className="navIcon" /></a>
      </div>

    </div>
  )
}
