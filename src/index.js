import Login from '@containers/Login';
// import Register from '@containers/Register';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { startVConsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
    {/* <Register /> */}
  </React.StrictMode>,
);

// 启动 vconsole
// startVConsole();
