import homeSvg from '@assets/home.svg';
import messageSvg from '@assets/message.svg';
import searchSvg from '@assets/search.svg';
import tipSvg from '@assets/tip.svg';

import style from '../common.module.scss';

export const menus = [
  {
    key: 'tweets',
    title: '主页',
    link: '/tweets',
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
    title: '回复',
    link: '/comment',
    hideHeader: true,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => link.indexOf(item.link) > -1);

export const includeMenu = (link) => menus.some((item) => item.link === link);