import ImageCard from '@components/ImageCard';
import moment from 'moment';

import Bar from '@components/Bar';
import style from './index.module.scss';

const tweet = {
  id: 1, // 推文id
  user: {
    id: 2, // 发送该推文的用户id
    username: 'EpikGaming', // 发送该推文的用户名
    nickname: 'EpikGamingT3', // 发送该推文的用户昵称
    avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该推文的用户头像地址
  }, // 发送该推文的用户信息
  comments: [
    {
      id: 1, // 评论id
      tweet_id: 1, // 评论的推文id
      user: {
        id: 1, // 发送该评论的用户id
        username: 'admin', // 发送该评论的用户名
        nickname: 'EpikGamingT3', // 发送该评论的用户昵称
        avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该评论的用户头像地址
      }, // 发送该评论的用户信息
      content: 'Test!', // 该评论的文本内容
      created_at: '2021-12-22T15:03:52.662052Z', // 该评论的创建时间
      likes_count: 10, // 该评论点赞数
      has_liked: false, // 当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
    },
    {
      id: 2, // 评论id
      tweet_id: 1, // 评论的推文id
      user: {
        id: 1, // 发送该评论的用户id
        username: 'admin', // 发送该评论的用户名
        nickname: 'EpikGamingT3', // 发送该评论的用户昵称
        avatar_url: 'https://img.shoufaw.com/wp-content/uploads/2020/10/aEjURn.jpg', // 发送该评论的用户头像地址
      }, // 发送该评论的用户信息
      content: 'Test!', // 该评论的文本内容
      created_at: '2021-12-22T15:03:52.662052Z', // 该评论的创建时间
      likes_count: 10, // 该评论点赞数
      has_liked: false, // 当前登录的用户是否点赞了这个评论，true：当前登录的用户点赞了这条评论，false：当前登录的用户没有点赞这条评论
    },
  ], // 该推文的评论集
  created_at: '2021-12-18T07:38:01.699129Z', // 该推文的创建时间
  content: 'Id values are not mutable. Any id value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.', // 该推文的文本内容
  likes: [], // 哪些用户点赞了这条推文
  likes_count: 10, // 该推文的点赞数
  comments_count: 122, // 该推文的评论数
  has_liked: false, // 当前登录的用户是否点赞了这条推文，true：当前登录的用户点赞了这条推文，false：当前登录的用户没有点赞这条推文
  photo_urls: ['https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZuKXKJeqzfVVrwwS6IZ0NfZUwaxMoXiJkeya7tUM04zl3BJtbbbx2rThPKxwpXeufwbc&usqp=CAU',
    'https://pgw.udn.com.tw/gw/photo.php?u=https://uc.udn.com.tw/photo/2021/08/12/realtime/13315182.jpg',
    // 'https://mooc-drop.oss-cn-beijing.aliyuncs.com/20200607085521_Czt8N.gif',
  ], // 该推文的图片地址集
};

const TweetCard = () => (
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
      <div className={style.content}>
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
        />
      </div>
    </div>
  </div>
);

export default TweetCard;
