import { useEffect, useState } from 'react';

import TweetCard from '@components/TweetCard';
import style from './index.module.scss';

/**
* Tweets homepage
*/
const Tweets = () => {
  const [data, setData] = useState();

  useEffect(() => {
    console.log('data: ', data);
    setData([]);
  }, []);

  return (
    <div className={style.container}>
      <TweetCard />
    </div>
  );
};

export default Tweets;
