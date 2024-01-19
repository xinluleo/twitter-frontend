import { UnorderedListOutline, UserCircleOutline } from 'antd-mobile-icons';
import { matchPath } from 'react-router-dom';

export const menus = [
  {
    key: 'tweet',
    title: '推文',
    link: '/tweet/:id',
    hideHeader: true,
  },
  {
    key: 'tweets',
    title: '主页',
    link: '/',
    isMenu: true,
    icon: <UnorderedListOutline />,
  },
  {
    key: 'my',
    link: '/my',
    title: '个人资料',
    isMenu: true,
    icon: <UserCircleOutline />,
  },
  // {
  //   key: 'search',
  //   title: '搜索',
  //   link: '/search',
  //   isMenu: true,
  //   icon: <img className={style.icon} src={searchSvg} alt="search" />,
  // },
  // {
  //   key: 'tip',
  //   title: '通知',
  //   link: '/tip',
  //   isMenu: true,
  //   icon: <img className={style.icon} src={tipSvg} alt="tip" />,
  // },
  // {
  //   key: 'message',
  //   title: '私信',
  //   link: '/message',
  //   isMenu: true,
  //   icon: <img className={style.icon} src={messageSvg} alt="message" />,
  // },
  {
    key: 'comment',
    link: '/comment/:id',
    hideHeader: true,
  },
  {
    key: 'createTweet',
    link: '/createTweet',
    hideHeader: true,
  },
  {
    key: 'editUser',
    title: '编辑个人信息',
    link: '/editUser',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

// matchPath('/comment/:id', '/comment/1') => true
export const getMenuByLink = (link) => menus.find((item) => matchPath(item.link, link));

export const includeMenu = (link) => menus.some((item) => item.link === link);
