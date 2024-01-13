<<<<<<< Updated upstream
import React from 'react';
import ReactDOM from 'react-dom/client';
import Register from './containers/Register';
import './index.css';
=======
import App from '@containers/App';
import Comment from '@containers/Comment';
import Login from '@containers/Login';
import Register from '@containers/Register';
import Tweets from '@containers/Tweets';
import { CtxProvider } from '@utils/context';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.scss';
>>>>>>> Stashed changes
// import { startVConsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    {/* <Login /> */}
    <Register />
=======
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
>>>>>>> Stashed changes
  </React.StrictMode>,
);

// 启动 vconsole
// startVConsole();
