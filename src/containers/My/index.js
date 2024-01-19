import TweetCard from '@components/TweetCard';
import { getTweets } from '@services/tweet';
import { useAppContext } from '@utils/context';
import { useGoTo } from '@utils/hooks';
import { Button, Tabs } from 'antd-mobile';
import { useEffect, useState } from 'react';

import style from './index.module.scss';

/**
*
*/
const My = () => {
  const [store] = useAppContext();
  const [data, setData] = useState([]);
  const goTo = useGoTo();

  useEffect(() => {
    const init = async () => {
      const res = await getTweets();
      setData(res.data);
    };
    init();
  }, []);

  return (
    <div className={style.container}>
      <div className={style.header} />
      <img className={style.avatar} src={store.user?.avatar_url} alt="头像" />
      <Button
        className={style.edit}
        onClick={() => goTo('editUser')}
      >
        更新个人资料
      </Button>
      <div className={style.nickname}>{store.user?.nickname || 'unknown'}</div>
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
      <Tabs>
        <Tabs.Tab title="推文" key="tweet">
          {data.map((item) => <TweetCard key={item.id} dataSource={item} />)}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default My;
