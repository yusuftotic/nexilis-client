import React from 'react';
import { Link } from 'react-router-dom';
import { LuHome, LuPlusCircle, LuArchive, LuUser, LuLogOut } from 'react-icons/lu';

import './Side.css';

export default function Side() {
  return (
    <div className="side">

      <div className="sideHeader">
        <h1 className="sideLogo">nexilis</h1>
      </div>

      <div className="sideMenuWrapper">

        <ul className="sideMenu">
          <li className="sideMenuItem">
            <Link to="/" className="sideLink">
              <LuHome className="sideIcon" />
              Blog
            </Link>
          </li>

          <li className="sideMenuItem">
            <Link to="/dashboard/post-archive" className="sideLink">
              <LuArchive className="sideIcon" />
              Post Archive
            </Link>
          </li>

          <li className="sideMenuItem">
            <Link to="/dashboard/new-post" className="sideLink">
              <LuPlusCircle className="sideIcon" />
              New Post
            </Link>
          </li>

          <li className="sideMenuItem">
            <Link to="/dashboard/profile" className="sideLink">
              <LuUser className="sideIcon" />
              Profile
            </Link>
          </li>
        </ul>

        <div className="sideLogoutWrapper">
          <button type="button" className="sideLogoutButton">
            <LuLogOut className="sideIcon" />
            Çıkış Yap
          </button>
        </div>

      </div>

    </div>
  )
}
