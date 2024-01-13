import App from '@containers/App';
import Login from '@containers/Login';
import Register from '@containers/Register';
import Tweets from '@containers/Tweets';
import { CtxProvider } from '@utils/context';

import Comment from '@containers/Comment';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.scss';

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
            <Route path="/tweets" element={<Tweets />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/search" element={<div>search</div>} />
            <Route path="/tip" element={<div>tip</div>} />
            <Route path="/message" element={<div>message</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CtxProvider>
  </React.StrictMode>,
);

// 启动 vconsole
// startVConsole();
