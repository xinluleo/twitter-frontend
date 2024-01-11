import ImageCard from '@components/ImageCard';
import moment from 'moment';
import { useEffect, useState } from 'react';

import Bar from '@components/Bar';
import style from './index.module.scss';

const TweetCard = () => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log('data: ', data);
    setData([]);
  }, []);

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
            {}
          </span>
          &nbsp;.&nbsp;
          {moment(tweet.created_at.format('MM分钟'))}
        </div>
        <div className={style.content}>
          {tweet.content}
        </div>
        <div className={style.photo}>
          <ImageCard imgs={tweet.photo_urls} />
        </div>
        <div className={style.bar}>
          <Bar commentsCount={tweet.comments_count} likesCount={tweet.likes_count} />
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
