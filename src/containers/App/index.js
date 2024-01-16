import Bottom from '@components/Bottom';
import Header from '@components/Header';
import { getUser } from '@services/login';
import { useAppContext } from '@utils/context';
import { useCurrentMenu } from '@utils/hooks';
import { Toast } from 'antd-mobile';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import CreateButton from '@components/CreateButton';
import style from './index.module.scss';

const App = () => {
  const [, updateStore] = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  const menu = useCurrentMenu();

  useEffect(() => {
    const init = async () => {
      const userId = Cookies.get('userId');
      if (!userId) {
        Toast.show('请先登录');
        navigate('/login');
        return;
      }
      const res = await getUser(userId);
      if (res.data) {
        updateStore({
          user: res.data,
        });
        if (location.pathname === '/login') {
          navigate('/tweets');
        }
        return;
      }
      navigate('/login');
    };
    init();
  }, []);

  const onClickCreateTweet = () => {
    navigate('/createTweet');
  };

  return (
    <div className={style.container}>
      {!menu.hideHeader && <Header />}
      <Outlet />
      <Bottom />
      {!menu.hideHeader && <CreateButton onClick={onClickCreateTweet} />}
    </div>
  );
};

export default App;
