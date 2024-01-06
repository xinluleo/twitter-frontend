import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './containers/Login';
import './index.css';
import { startVConsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
);

// 启动 vconsole
startVConsole();
