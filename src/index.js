import App from '@containers/App';
import Comment from '@containers/Comment';
import CreateTweet from '@containers/CreateTweet';
import Login from '@containers/Login';
import My from '@containers/My';
import Register from '@containers/Register';
import Tweet from '@containers/Tweet';
import Tweets from '@containers/Tweets';
import { CtxProvider } from '@utils/context';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.scss';

// import { startVConsole } from './utils';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CtxProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Tweets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/comment/:id" element={<Comment />} />
          <Route path="/createTweet" element={<CreateTweet />} />
          <Route path="/search" element={<Comment />} />
          <Route path="/tip" element={<Comment />} />
          <Route path="/message" element={<Comment />} />
          <Route path="/my" element={<My />} />
          <Route path="/tweet/:id" element={<Tweet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </CtxProvider>,
);

// 启动 vconsole
// startVConsole();
