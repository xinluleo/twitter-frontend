import Avatar from '@components/Avatar';
import MyPopup from '@components/MyPopup';
import { useAppContext } from '@utils/context';
import { useCurrentMenu, useGoTo } from '@utils/hooks';
import { CloseOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import logo from '../../assets/twitter-logo.svg';

import style from './index.module.scss';

const Header = ({
  children,
  title,
}) => {
  const [store] = useAppContext();
  const [visible, setVisible] = useState(false);

  const menu = useCurrentMenu();
  const goto = useGoTo();

  const headerComponents = [];

  // 登录状态
  if (store.user) {
    if (menu.hideHeader) {
      headerComponents.push(
        <div key="backHeader" className={style.headerWrapper}>
          <svg className={style.back} onClick={() => goto()} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z" /></g></svg>
          {title && (
          <span key="title" className={style.title}>
            {title}
          </span>
          )}
          {menu.title && (
          <span key="menu" className={style.title}>
            {menu.title}
          </span>
          )}
          {children}
        </div>,
      );
    } else {
      headerComponents.push(
        <MyPopup
          key="popUp"
          visible={visible}
          onClose={() => setVisible(false)}
        />,
      );
      headerComponents.push(
        <Avatar
          className={style.backHeader}
          key="avatarUrl"
          avatarUrl={store.user?.avatar_url}
          onClick={() => setVisible(true)}
        />,
      );
      headerComponents.push(
        <span key="title" className={style.title}>
          {menu.title}
        </span>,
      );
    }
  }

  // 未登录状态
  if (store.closeHeaderHandler) {
    headerComponents.push(
      <CloseOutline
        className={style.closeIcon}
        onClick={store.closeHeaderHandler}
      />,
    );
    headerComponents.push(
      <img src={logo} alt="twitter-logo" className={style.twitterLogo} />,
    );
  }

  return (
    <div className={style.header}>
      {headerComponents}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

Header.defaultProps = {
  children: null,
  title: '',
};

export default Header;
