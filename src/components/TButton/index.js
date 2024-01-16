import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';

import style from './index.module.scss';

/**
* 公共的Button
*/
const TButton = ({
  disabled,
  onClick,
  children,
}) => (
  <Button disabled={disabled} className={style.button} onClick={onClick}>
    {children}
  </Button>
);

TButton.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

TButton.defaultProps = {
  disabled: false,
};

export default TButton;
