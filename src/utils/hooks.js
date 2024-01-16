import { generatePath, useLocation, useNavigate } from 'react-router-dom';
import { getMenuByKey, getMenuByLink, includeMenu } from './constants';

// 获取当前菜单
export const useCurrentMenu = () => {
  const lo = useLocation();
  const menu = getMenuByLink(lo.pathname) || {};
  return menu;
};

// 跳转到指定菜单
export const useGoTo = () => {
  const navigate = useNavigate();

  return (key, params) => {
    if (!key) {
      return navigate(-1);
    }
    const menu = getMenuByKey(key);
    if (!menu) {
      return navigate('/');
    }
    // generatePath("/tweet/:id", { id: 123 }) => "/tweet/123"
    const link = generatePath(menu.link, params);
    return navigate(link);
  };
};

export const useIncludeMenu = () => {
  const location = useLocation();
  return includeMenu(location.pathname);
};
