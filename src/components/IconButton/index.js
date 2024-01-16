import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';

const IconButton = ({
  src,
  className,
  svgClass,
}) => (
  <div className={className}>
    <ReactSVG
      src={src}
      beforeInjection={(svg) => {
        if (!svgClass) return;
        svg.childNodes.forEach((child) => {
          if (child && child.classList) {
            child.classList.add(svgClass);
          }
        });
      }}
    />
  </div>
);

IconButton.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  svgClass: PropTypes.string,
};

IconButton.defaultProps = {
  className: null,
  svgClass: null,
};

export default IconButton;
