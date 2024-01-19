import { cancelLike, like } from '@services/comment';
import { ActionSheet, TabBar, Toast } from 'antd-mobile';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ACTION_KEYS, BAR_KEYS, OBJECT_TYPES, actions, getBars,
} from './constants';

import style from './index.module.scss';

/**
* Tweet's button bar
*/
const Bar = ({
  commentsCount,
  likesCount,
  isBottom,
  id,
  onlyLike,
  contentType,
}) => {
  const [activeKey, setActiveKey] = useState();
  const [visible, setVisible] = useState(false);
  const [liked, setLiked] = useState(false);

  const navigate = useNavigate();

  const onChangeTabItem = (key) => {
    console.log('onChangeTabItem', key);
    setActiveKey(key);
    if (key === BAR_KEYS.RETWEET) {
      Toast.show('转发成功');
    }
    if (key === BAR_KEYS.SHARE) {
      setVisible(true);
    }
    if (key === BAR_KEYS.LIKE) {
      console.log('key === BAR_KEYS.LIKE');
      if (liked) {
        console.log('取消点赞');
        cancelLike({
          content_type: contentType,
          object_id: id,
        }).then((res) => {
          if (res.success) {
            Toast.show('取消点赞成功');
            setLiked(false);
            return;
          }
          Toast.show('取消点赞失败');
        });
        return;
      }
      like({
        content_type: contentType,
        object_id: id,
      }).then((res) => {
        if (res.success) {
          Toast.show('点赞成功');
          setLiked(true);
          return;
        }
        Toast.show('点赞失败');
      });
    }
  };

  const onAction = (e) => {
    if (e.key === ACTION_KEYS.COPY) {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(`${window.location.origin}/tweet/${id}`);
        Toast.show('复制成功');
      }
    }
    setVisible(false);
  };

  return (
    <div className={classNames({
      [style.container]: !isBottom,
      [style.containerBottom]: isBottom,
    })}
    >
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {getBars({
          commentsCount,
          likesCount,
          navigate,
          id,
          onlyLike,
          liked,
        }).map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
      <ActionSheet
        visible={visible}
        actions={actions}
        onClose={() => setVisible(false)}
        onAction={onAction}
      />
    </div>
  );
};

Bar.propTypes = {
  commentsCount: PropTypes.number,
  likesCount: PropTypes.number,
  isBottom: PropTypes.bool,
  id: PropTypes.number.isRequired,
  onlyLike: PropTypes.bool,
  contentType: PropTypes.oneOf([OBJECT_TYPES.COMMENT, OBJECT_TYPES.TWEET]),
};

Bar.defaultProps = {
  commentsCount: 0,
  likesCount: 0,
  isBottom: false,
  onlyLike: false,
  contentType: OBJECT_TYPES.TWEET,
};

export default Bar;
