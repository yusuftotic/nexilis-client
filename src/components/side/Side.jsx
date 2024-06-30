import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LuHome, LuPlusCircle, LuArchive, LuUser, LuLogOut } from 'react-icons/lu';

import { logout } from '../../slices/authSlice';

import './Side.css';

export default function Side() {

  const dispatch = useDispatch();

  const { access_token } = useSelector(state => state.auth);

  const navigate = useNavigate();

  const handleLogout = () => {

    access_token && dispatch(logout({ access_token }))

  }

  return (
    <div className="side">

      <div className="privnav">

        <div className="privnavMenu">
          <Link to="/" className="privnavLink">
            <LuHome className="privnavIcon" />
          </Link>

          <Link to="/dashboard/post-archive" className="privnavLink">
            <LuArchive className="privnavIcon" />
          </Link>

          <Link to="/dashboard/new-post" className="privnavLink">
            <LuPlusCircle className="privnavIcon" />
          </Link>

          <Link to="/dashboard/profile" className="privnavLink">
            <LuUser className="privnavIcon" />
          </Link>
        </div>

      </div>

      <div className="sideHeader">
        <h1 className="sideLogo">nexilis</h1>
      </div>

      <div className="sideMenuWrapper">

        <ul className="sideMenu">
          <li className="sideMenuItem">
            <Link to="/" className="sideLink">
              <LuHome className="sideIcon" />
              <p>Blog</p>
            </Link>
          </li>

          <li className="sideMenuItem">
            <Link to="/dashboard/post-archive" className="sideLink">
              <LuArchive className="sideIcon" />
              <p>Post Archive</p>
            </Link>
          </li>

          <li className="sideMenuItem">
            <Link to="/dashboard/new-post" className="sideLink">
              <LuPlusCircle className="sideIcon" />
              <p>New Post</p>
            </Link>
          </li>

          <li className="sideMenuItem">
            <Link to="/dashboard/profile" className="sideLink">
              <LuUser className="sideIcon" />
              <p>Profile</p>
            </Link>
          </li>
        </ul>

        <div className="sideLogoutWrapper">
          <button type="button" className="sideLogoutButton" onClick={handleLogout}>
            <LuLogOut className="sideIcon" />
            Çıkış Yap
          </button>
        </div>

      </div>

    </div>
  )
}
