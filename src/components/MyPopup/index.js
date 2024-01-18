import { useAppContext } from '@utils/context';
import { useGoTo } from '@utils/hooks';
import { Popup } from 'antd-mobile';
import { UserOutline } from 'antd-mobile-icons';
import PropTypes from 'prop-types';

import style from './index.module.scss';

/**
* 个人信息抽屉
*/
const MyPopup = ({
  visible,
  onClose,
}) => {
  const [store] = useAppContext();
  const goTo = useGoTo();

  return (
    <Popup
      visible={visible}
      onMaskClick={onClose}
      position="left"
      bodyStyle={{ width: '60vw' }}
    >
      <div className={style.container}>
        <div className={style.title}>账号信息</div>
        <img className={style.avatar} src={store.user.avatar_url} alt="头像" />
        <div className={style.nickname}>
          {store.user?.nickname || 'unknown'}
        </div>
        <div className={style.username}>
          @
          {store.user?.username}
        </div>
        <div className={style.follower}>
          <span className={style.numberOfFollowings}>100</span>
          正在关注
          <span className={style.numberOfFollowers}>200</span>
          关注者
        </div>
        <div className={style.listItem} onClick={() => goTo('my')}>
          <UserOutline />
          <span className={style.info}>
            个人资料
          </span>
        </div>
        <div className={style.footer}>
          登出
        </div>
      </div>
    </Popup>
  );
};

MyPopup.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default MyPopup;
