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
    icon: <img className={style.icon} src={homeSvg} alt="" />,
  },
  {
    key: 'search',
    title: '搜索',
    link: '/search',
    icon: <img className={style.icon} src={searchSvg} alt="search" />,
  },
  {
    key: 'tip',
    title: '通知',
    link: '/tip',
    icon: <img className={style.icon} src={tipSvg} alt="tip" />,
  },
  {
    key: 'message',
    title: '私信',
    link: '/message',
    icon: <img className={style.icon} src={messageSvg} alt="message" />,
  },
];

export const getMenuByKey = (key) => menus.find((item) => item.key === key);

export const getMenuByLink = (link) => menus.find((item) => item.link === link);

export const includeMenu = (link) => menus.some((item) => item.link === link);
