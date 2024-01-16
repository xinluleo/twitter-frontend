import commentSvg from '@assets/comment.svg';
import likeSvg from '@assets/like.svg';
import retweetSvg from '@assets/retweet.svg';
import shareSvg from '@assets/share.svg';
import { TabBar } from 'antd-mobile';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import style from './index.module.scss';

const getBars = ({
  commentsCount,
  likesCount,
  navigate,
  id,
}) => [
  {
    key: 'comment',
    icon: (
      <div onClick={() => navigate(`/comment/${id}`)}>
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
  isBottom,
  id,
}) => {
  const [activeKey, setActiveKey] = useState();
  const navigate = useNavigate();

  const onChangeTabItem = (key) => {
    setActiveKey(key);
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
  isBottom: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

Bar.defaultProps = {
  commentsCount: 0,
  likesCount: 0,
  isBottom: false,
};

export default Bar;
