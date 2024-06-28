import React, { useEffect, useState } from 'react';

import Side from '../../components/side/Side';

import './Dashboard.css';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {

  return (
    <div className="dashboardContainer">

      <div className="sideContainer">
        <div className="dashboardLogo">nexilis</div>
      </div>

      <Side />

      <div className="dashboard">

        <Outlet />

      </div>

    </div>
  )
}
