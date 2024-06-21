import React from 'react';
import { Link } from 'react-router-dom';
import { LuPlusCircle, LuArchive, LuUser, LuLogOut } from 'react-icons/lu';


import './Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboardContainer">

      <div className="sideContainer"></div>

      <div className="side">

        <div className="sideHeader">
          <h1 className="sideLogo">nexilis</h1>
        </div>

        <div className="sideMenuWrapper">

          <ul className="sideMenu">
            <li className="sideMenuItem">
              <Link to="/create" className="sideLink">
                <LuPlusCircle className="sideIcon" />
                New Post
              </Link>
            </li>

            <li className="sideMenuItem">
              <Link to="/posts" className="sideLink">
                <LuArchive className="sideIcon" />
                Post Archive
              </Link>
            </li>

            <li className="sideMenuItem">
              <Link to="/profile" className="sideLink">
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

      <div className="dashboard">
        
      </div>

    </div>
  )
}
