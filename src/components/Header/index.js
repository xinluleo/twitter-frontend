import { useAppContext } from '@utils/context';
import { useCurrentMenu, useGoTo } from '@utils/hooks';
import { CloseOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';
import logo from '../../assets/twitter-logo.svg';

import style from './index.module.scss';

const Header = ({
  children,
}) => {
  const [store] = useAppContext();
  const menu = useCurrentMenu();
  const goto = useGoTo();

  const headerComponents = [];

  // 登录状态
  if (store.user) {
    if (menu.hideHeader) {
      headerComponents.push(
        <div key="backHeader" className={style.headerWrapper}>
          <svg className={style.back} onClick={() => goto()} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z" /></g></svg>
          {children}
        </div>,
      );
    } else {
      headerComponents.push(
        <div key="avatarUrl" className={style.backHeader}>
          <img src={store.user.avatar_url} alt="avatar" className={style.avatar} />
        </div>,
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
};

Header.defaultProps = {
  children: null,
};

export default Header;
