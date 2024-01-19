import commentSvg from '@assets/comment.svg';
import likeSvg from '@assets/like.svg';
import likeRedSvg from '@assets/likeRed.svg';
import retweetSvg from '@assets/retweet.svg';
import shareSvg from '@assets/share.svg';
import { LinkOutline } from 'antd-mobile-icons';

import style from './index.module.scss';

export const BAR_KEYS = {
  COMMENT: 'comment',
  RETWEET: 'retweet',
  LIKE: 'like',
  SHARE: 'share',
};

export const getBars = ({
  commentsCount,
  likesCount,
  navigate,
  id,
  onlyLike,
  liked,
}) => {
  if (onlyLike) {
    return [{
      key: BAR_KEYS.LIKE,
      icon: (
        <div>
          {liked
            ? <img className={style.icon} src={likeRedSvg} alt="like" />
            : <img className={style.icon} src={likeSvg} alt="like" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>
      ),
    }];
  }

  return [
    {
      key: BAR_KEYS.COMMENT,
      icon: (
        <div onClick={() => navigate(`/comment/${id}`)}>
          <img className={style.icon} src={commentSvg} alt="comment" />
          {commentsCount > 0 && <span className={style.count}>{commentsCount}</span>}
        </div>
      ),
    },
    {
      key: BAR_KEYS.RETWEET,
      icon: <img className={style.icon} src={retweetSvg} alt="retweet" />,
    },
    {
      key: BAR_KEYS.LIKE,
      icon: (
        <div>
          {liked
            ? <img className={style.icon} src={likeRedSvg} alt="like" />
            : <img className={style.icon} src={likeSvg} alt="like" />}
          {likesCount > 0 && <span className={style.count}>{likesCount}</span>}
        </div>
      ),
    },
    {
      key: BAR_KEYS.SHARE,
      icon: <img className={style.icon} src={shareSvg} alt="share" />,
    },
  ];
};

export const ACTION_KEYS = {
  COPY: 'copy',
  CANCEL: 'cancel',
};

export const actions = [
  {
    text: (
      <div className={style.copyButton}>
        <LinkOutline style={{ marginRight: 10 }} />
        复制推文链接
      </div>
    ),
    key: ACTION_KEYS.COPY,
  },
  {
    text: <div className={style.cancelButton}>取消</div>,
    key: ACTION_KEYS.CANCEL,
  },
];

// 点赞的对象，tweet：点赞的是推文，comment：点赞的是评论
export const OBJECT_TYPES = {
  COMMENT: 'comment',
  TWEET: 'tweet',
};
