import React from 'react';

import Side from '../../components/side/Side';

import './Dashboard.css';
import { Outlet, Route, Routes } from 'react-router-dom';
import NewPost from '../new-post/NewPost';

export default function Dashboard() {
  return (
    <div className="dashboardContainer">

      <div className="sideContainer"></div>

      <Side />

      <div className="dashboard">

        <Outlet />

      </div>

    </div>
  )
}
