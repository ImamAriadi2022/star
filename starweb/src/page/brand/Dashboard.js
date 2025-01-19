import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../../components/brand/Sidebar';
import NavbarBrand from '../../components/brand/NavbarBrand';
import Marketplace from '../../components/brand/marketplace';
import Notifikasi from '../../components/brand/Notifikasi';
import AkunBrand from '../../components/brand/AkunBrand';

function DashboardBrand() {
  const dashboardStyle = {
    marginLeft: '250px', // Adjusting for the sidebar width
    padding: '20px',
  };

  return (
      <div>
        <Sidebar />
        <NavbarBrand />
        <div style={dashboardStyle}>
          <Routes>
            <Route path="/brand/dashboard/marketplace" element={<Marketplace />} />
            <Route path="/brand/dashboard/notifikasi" element={<Notifikasi />} />
            <Route path="/brand/dashboard/akun" element={<AkunBrand />} />
          </Routes>
        </div>
      </div>
  );
}

export default DashboardBrand;