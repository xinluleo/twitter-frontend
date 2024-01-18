import { useEffect, useRef, useState } from 'react';
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

const MAX_Y = 100;

/**
 * 下拉刷新 hook
 */
export const usePullToRefresh = () => {
  // 触发条件: document.documentElement.scrollTop === 0
  // 事件:
  // 记录y的偏移量
  // 最大偏移量 MAX_Y
  const y = useRef(0);
  const [tip, setTip] = useState();

  useEffect(() => {
    window.ontouchstart = (e) => {
      if (document.documentElement.scrollTop === 0) {
        y.current = e.touches[0].pageY;
      }
    };

    window.ontouchmove = (e) => {
      if (document.documentElement.scrollTop > 0) {
        return;
      }
      if (e.touches[0].pageY - y.current > MAX_Y) {
        setTip('释放立即刷新');
        return;
      }
      if (e.touches[0].pageY - y.current > 0) {
        setTip('下拉刷新');
      }
    };

    return () => {
      window.ontouchstart = null;
      window.ontouchmove = null;
    };
  }, []);

  useEffect(() => {
    window.ontouchend = () => {
      if (document.documentElement.scrollTop === 0) {
        if (tip === '释放立即刷新') {
          setTip('加载中...');
          setTimeout(() => {
            setTip('刷新成功');
            setTimeout(() => {
              setTip('');
            }, 500);
          }, 1000);
          return;
        }
        setTip('');
      }
    };
    return () => {
      window.ontouchend = null;
    };
  }, [tip]);

  return tip;
};

const OFFSET = 50;

/**
 * 上拉加载 hook
 */
export const usePullUpToLoad = () => {
  const [loading, setLoading] = useState(false);

  // 判断是否触底
  // 1 相关高度:
  // document.documentElement.clientHeight
  // document.body.scrollHeight
  // document.documentElement.scrollTop
  // 2 触底条件: scrollTop + clientHeight = scrollHeight
  // 3 OFFSET 偏移量
  // scrollTop + clientHeight >= scrollHeight - OFFSET;
  useEffect(() => {
    window.onscroll = () => {
      if (loading) {
        return;
      }
      const { scrollTop, clientHeight } = document.documentElement;
      const { scrollHeight } = document.body;
      if (scrollTop + clientHeight >= scrollHeight - OFFSET) {
        setLoading(true);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        console.log('加载完成');
        setLoading(false);
      }, 2000);
    }
  }, [loading]);

  return loading;
};
