import { Image } from 'antd-mobile';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { CloseOutline } from 'antd-mobile-icons';
import style from './index.module.scss';

/**
* Component for image preview
* 可以展示最多4张图片
* 1张图片直接填充满
* 2张图片左右各一张
* 3张图片左一右二
* 4张图片左二右二
*/
const ImagePreview = ({
  imgs,
  handleDeleteImg,
}) => {
  if (!imgs || imgs.length === 0) return null;

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
          <div key={classNames(img, index)} className={classNames(style.img, `img${index}`)}>
            <CloseOutline className={style.close} onClick={() => handleDeleteImg(index)} />
            <Image
              fit="cover"
              className={style.itemImg}
              src={img}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

ImagePreview.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.string),
  handleDeleteImg: PropTypes.func,
};

ImagePreview.defaultProps = {
  imgs: [],
  handleDeleteImg: () => {},
};

export default ImagePreview;
