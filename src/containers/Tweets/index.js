import TweetCard from '@components/TweetCard';

import style from './index.module.scss';

/**
* Tweets homepage
*/
const Tweets = () => (
  <div className={style.container}>
    <TweetCard />
    <TweetCard />
    <TweetCard />
    <TweetCard />
  </div>
);

export default Tweets;
