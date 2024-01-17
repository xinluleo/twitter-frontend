import TweetCard from '@components/TweetCard';
import { getFeeds } from '@services/tweet';
import { PullToRefresh } from 'antd-mobile';
import { useEffect, useState } from 'react';
import {
  CellMeasurer, CellMeasurerCache, List, WindowScroller,
} from 'react-virtualized';

import style from './index.module.scss';

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 200,
});

const noRowsRenderer = () => '加载中...';

/**
* Tweets homepage
*/
const Tweets = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const init = async () => {
      const res = await getFeeds();
      setData(res);
    };
    init();
  }, []);

  const rowRenderer = ({
    key, style: sy, index, parent,
  }) => (
    <CellMeasurer
      cache={cache}
      columnIndex={0}
      key={key}
      rowIndex={index}
      parent={parent}
    >
      {({ registerChild }) => (
        <div style={sy} key={key} ref={registerChild}>
          <TweetCard dataSource={data[index]} />
        </div>
      )}
    </CellMeasurer>
  );

  return (
    <div className={style.container}>
      <PullToRefresh
        onRefresh={async () => {
          const res = await getFeeds();
          setData((d) => [...d, ...res]);
        }}
      >
        <WindowScroller>
          {({
            height, width, isScrolling, registerChild, onChildScroll, scrollTop,
          }) => (
            <div ref={registerChild}>
              <List
                isScrolling={isScrolling}
                onScroll={onChildScroll}
                scrollTop={scrollTop}
                autoHeight
                height={height}
                deferredMeasurementCache={cache}
                rowHeight={cache.rowHeight}
                overscanRowCount={2}
                noRowsRenderer={noRowsRenderer}
                rowCount={data.length}
                rowRenderer={rowRenderer}
                width={width}
              />
            </div>
          )}
        </WindowScroller>
      </PullToRefresh>
    </div>
  );
};

export default Tweets;
