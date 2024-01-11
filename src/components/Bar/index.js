import commentSvg from '@assets/comment.svg';
import likeSvg from '@assets/like.svg';
import retweetSvg from '@assets/retweet.svg';
import shareSvg from '@assets/share.svg';
import { TabBar } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState } from 'react';

import style from './index.module.scss';

const getBars = ({
  commentsCount,
  likesCount,
}) => [
  {
    key: 'comment',
    icon: (
      <div>
        <img className={style.icon} src={commentSvg} alt="comment" />
        {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
      </div>
    ),
  },
  {
    key: 'retweet',
    icon: <img className={style.icon} src={retweetSvg} alt="retweet" />,
  },
  {
    key: 'like',
    icon: (
      <div>
        <img className={style.icon} src={likeSvg} alt="like" />
        {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
      </div>
    ),
  },
  {
    key: 'share',
    icon: <img className={style.icon} src={shareSvg} alt="share" />,
  },
];

/**
* Tweet's button bar
*/
const Bar = ({
  commentsCount,
  likesCount,
}) => {
  const [activeKey, setActiveKey] = useState();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
  };

  return (
    <div className={style.container}>
      <TabBar activeKey={activeKey} onChange={onChangeTabItem}>
        {getBars({
          commentsCount,
          likesCount,
        }).map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} />
        ))}
      </TabBar>
    </div>
  );
};

Bar.propTypes = {
  commentsCount: PropTypes.number,
  likesCount: PropTypes.number,
};

Bar.defaultProps = {
  commentsCount: 0,
  likesCount: 0,
};

export default Bar;
