import { useEffect, useState } from 'react';

import TweetCard from '@components/TweetCard';
import style from './index.module.scss';

/**
* Tweets homepage
*/
const Tweets = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData([]);
    console.log('data: ', data);
  }, []);

  return (
    <div className={style.container}>
      <TweetCard />
      <TweetCard />
      <TweetCard />
      <TweetCard />
    </div>
  );
};

export default Tweets;
