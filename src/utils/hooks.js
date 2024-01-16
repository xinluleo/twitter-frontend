import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink, includeMenu } from './constants';

// 获取当前菜单
export const useCurrentMenu = () => {
  const lo = useLocation();
  const menu = getMenuByLink(lo.pathname) || {};
  // console.log('menu: ', menu);
  return menu;
};

// 跳转到指定菜单
export const useGoTo = () => {
  const navigate = useNavigate();

  return (key) => {
    if (!key) {
      return navigate(-1);
    }
    const menu = getMenuByKey(key);
    if (!menu) {
      return navigate('/');
    }
    return navigate(menu.link);
  };
};

export const useIncludeMenu = () => {
  const location = useLocation();
  return includeMenu(location.pathname);
};
