import App from '@containers/App';
import Login from '@containers/Login';
import Register from '@containers/Register';
import { CtxProvider } from '@utils/context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
// import { startVConsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CtxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CtxProvider>
  </React.StrictMode>,
);

// 启动 vconsole
// startVConsole();
