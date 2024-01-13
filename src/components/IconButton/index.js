import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

import style from './index.module.scss';

const IconButton = ({
  src,
  className,
}) => {
  <div className={style.container}>
    <ReactSVG
      src={src}
      beforeInjection={(svg) => {
        if (!className) {
          return;
        }
        svg.childNodes.forEach((child) => {
          if (child.tagName === 'path') {
            child.classList.add(className);
          }
        });
      }}
    />
  </div>;
};

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
};

export default IconButton;
