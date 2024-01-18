import Header from '@components/Header';
import { useAppContext } from '@utils/context';
import { Button, Tabs } from 'antd-mobile';

import style from './index.module.scss';

/**
*
*/
const My = () => {
  const [store] = useAppContext();

  return (
    <div className={style.container}>
      <Header title={store.user?.nickname || 'unknown'} />
      <div className={style.header} />
      <img className={style.avatar} src={store.user?.avatar_url} alt="头像" />
      <Button className={style.edit}>更新个人资料</Button>
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
          tweet
        </Tabs.Tab>
        <Tabs.Tab title="推文和回复" key="reply">
          reply
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default My;
