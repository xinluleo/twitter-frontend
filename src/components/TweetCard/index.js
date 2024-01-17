import Bar from '@components/Bar';
import { OBJECT_TYPES } from '@components/Bar/constants';
import ImageCard from '@components/ImageCard';
import { useGoTo } from '@utils/hooks';
import moment from 'moment';
import PropTypes from 'prop-types';

import style from './index.module.scss';

const TweetCard = ({
  dataSource: tweet,
}) => {
  const goTo = useGoTo();

  return (
    <div className={style.container}>
      <div className={style.avatarContainer}>
        <img src={tweet.user.avatar_url} alt="头像" className={style.avatar} />
      </div>
      <div className={style.contentContainer}>
        <div className={style.header}>
          <span className={style.nickname}>{tweet.user.nickname}</span>
          <span className={style.username}>
            @
            {tweet.user.username}
          </span>
          &nbsp;·&nbsp;
          {moment(tweet.created_at).format('MM分钟')}
        </div>
        <div className={style.content} onClick={() => goTo('tweet', { id: tweet.id })}>
          {tweet.content}
        </div>
        <div className={style.photo}>
          <ImageCard
            imgs={tweet.photo_urls}
            commentsCount={tweet.comments_count}
            likesCount={tweet.likes_count}
          />
        </div>
        <div className={style.bar}>
          <Bar
            id={tweet.id}
            commentsCount={tweet.comments_count}
            likesCount={tweet.likes_count}
            contentType={OBJECT_TYPES.TWEET}
          />
        </div>
      </div>
    </div>
  );
};

TweetCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataSource: PropTypes.object.isRequired,
};

export default TweetCard;
