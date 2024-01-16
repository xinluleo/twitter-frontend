import createTweetSvg from '@assets/create-tweet.svg';
import IconButton from '@components/IconButton';
import { fileToBase64 } from '@utils/index';
import PropTypes from 'prop-types';

import style from './index.module.scss';

/**
* 图片上传组件
*/
const ImageUpload = ({
  onChange,
}) => {
  const onChangeUploadFile = (e) => {
    const { files } = e.target;
    const fls = Object.values(files);
    const filesContentPromises = fls.map((file) => new Promise((resolve) => {
      fileToBase64(file).then((res) => {
        resolve({
          key: file.name,
          content: res,
        });
      });
    }));
    Promise.all(filesContentPromises).then((res) => {
      const result = {};
      res.forEach((item) => {
        result[item.key] = item.content;
      });
      onChange(result);
    });
    e.target.value = '';
  };

  return (
    <div className={style.container}>
      <input
        type="file"
        encType="multipart/form-data"
        accept="image/gif.image/jpg"
        className={style.uploadFile}
        multiple
        onChange={onChangeUploadFile}
      />
      <IconButton
        src={createTweetSvg}
        svgClass={style.imageUpload}
        className={style.imageButton}
      />
    </div>
  );
};

ImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ImageUpload;
