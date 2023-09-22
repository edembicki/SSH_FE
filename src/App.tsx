import React from 'react';
import { Layout } from 'antd';
import Login from './views/login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Register from './views/register';
import Dashboard from './views/dashboard';
import Tracker from './views/tracker';
import Wallet from './views/wallet';
import HotspotQR from './views/hotspot-qr';
import Advertising from './views/advertising';

const App: React.FC = () => {
  const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/tracker" element={<Tracker/>} />
        <Route path="/hotspot-scan" element={<HotspotQR/>} />
        <Route path="/hotspot-ad" element={<Advertising/>} />
        <Route path="/wallet" element={<Wallet/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/logout" element={<Login/>} />
        <Route path="/auth" element={<Login/>} />
        <Route path="/" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );

  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>                
          {routes}
        </Layout>
      </Layout>
    </div>
  );
};

export default App;
