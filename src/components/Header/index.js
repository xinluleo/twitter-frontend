<<<<<<< Updated upstream
import { CloseOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';
=======
import { useAppContext } from '@utils/context';
import { useGoTo, useIncludeMenu } from '@utils/hooks';
import { Button } from 'antd-mobile';
import { CloseOutline } from 'antd-mobile-icons';

>>>>>>> Stashed changes
import logo from '../../assets/twitter-logo.svg';

import style from './index.module.scss';

<<<<<<< Updated upstream
const Header = ({
  onClickClose,
}) => (
  <div className={style.header}>
    <CloseOutline className={style.closeIcon} onClick={onClickClose} />
    <img src={logo} alt="twitter-logo" className={style.twitterLogo} />
  </div>
);

Header.propTypes = {
  onClickClose: PropTypes.func.isRequired,
=======
const Header = () => {
  const [store] = useAppContext();
  const include = useIncludeMenu();
  const goto = useGoTo();

  const onClick = () => {
  };

  const headerComponents = [];

  // 登录状态
  if (store.user) {
    if (!include) {
      headerComponents.push(
        <div className={style.headerWrapper}>
          <svg className={style.back} onClick={() => goto()} viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z" /></g></svg>
          <Button className={style.button}>回复</Button>
        </div>,
      );
    } else {
      headerComponents.push(
        <div className={style.backHeader}>
          <img src={store.user.avatar_url} alt="avatar" className={style.avatar} />
        </div>,
      );
      headerComponents.push(
        <span className={style.title}>
          {store.title}
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
>>>>>>> Stashed changes
};

export default Header;
