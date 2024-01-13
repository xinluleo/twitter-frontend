import { Image } from 'antd-mobile';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
}) => {
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
          />
        ))}
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
};

ImageCard.defaultProps = {
  imgs: [],
};

export default ImageCard;
