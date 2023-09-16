import React from 'react';
import { Layout } from 'antd';
import Login from './views/login';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Menu from './components/menu';
import Register from './views/register';

const App: React.FC = () => {
  const routes = (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Menu/>} />
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
