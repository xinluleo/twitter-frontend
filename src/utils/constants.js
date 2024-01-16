import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import searchSvg from '@assets/search.svg';
import tipSvg from '@assets/tip.svg';

import { matchPath } from 'react-router-dom';
import style from '../common.module.scss';

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
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    title: '搜索',
    link: '/search',
    isMenu: true,
    icon: <img className={style.icon} src={searchSvg} alt="search" />,
  },
  {
    key: 'tip',
    title: '通知',
    link: '/tip',
    isMenu: true,
    icon: <img className={style.icon} src={tipSvg} alt="tip" />,
  },
  {
    key: 'message',
    title: '私信',
    link: '/message',
    isMenu: true,
    icon: <img className={style.icon} src={messageSvg} alt="message" />,
  },
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
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

// matchPath('/comment/:id', '/comment/1') => true
export const getMenuByLink = (link) => menus.find((item) => matchPath(item.link, link));

export const includeMenu = (link) => menus.some((item) => item.link === link);
