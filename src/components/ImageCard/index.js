import Bar from '@components/Bar';
import { Image, ImageViewer } from 'antd-mobile';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

import { OBJECT_TYPES } from '@components/Bar/constants';
import style from './index.module.scss';

/**
* Component for image display
* 可以展示最多4张图片
* 1张图片直接填充满
* 2张图片左右各一张
* 3张图片左一右二
* 4张图片左二右二
*/
const ImageCard = ({
  imgs,
  commentsCount,
  likesCount,
}) => {
  const imageViewerRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [visible]);

  const getWrapper = () => {
    switch (imgs.length) {
      case 1:
        return style.wrapper1;
      case 2:
        return style.wrapper2;
      case 3:
        return style.wrapper3;
      case 4:
        return style.wrapper4;
      default:
        return style.wrapper;
    }
  };

  const onClickImg = (index) => {
    setVisible(true);
    imageViewerRef.current.swipeTo(index);
  };

  return (
    <div className={style.container}>
      <div className={classNames(style.wrapper, getWrapper())}>
        {imgs.map((img, index) => (
          <Image
            className={classNames(style.img, `img${index}`)}
            fit="cover"
            key={classNames(img, index)}
            src={img}
            alt=""
            onClick={() => onClickImg(index)}
          />
        ))}
      </div>
      <ImageViewer.Multi
        getContainer={document.body}
        ref={imageViewerRef}
        images={imgs}
        visible={visible}
        onClose={() => setVisible(false)}
        renderFooter={() => (
          <Bar
            isBottom
            commentsCount={commentsCount}
            likesCount={likesCount}
            contentType={OBJECT_TYPES.TWEET}
          />
        )}
      />
    </div>
  );
};

ImageCard.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  commentsCount: PropTypes.number,
  likesCount: PropTypes.number,
};

ImageCard.defaultProps = {
  imgs: [],
  commentsCount: 0,
  likesCount: 0,
};

export default ImageCard;
