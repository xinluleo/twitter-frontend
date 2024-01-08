import { Button } from 'antd-mobile';
import PropTypes from 'prop-types';
import style from '../index.module.scss';

const Footer = ({
  onClickNextStep,
  disabled,
}) => (
  <div className={style.footer}>
    <Button
      className={disabled ? style.footerButtonDisabled : style.footerButton}
      onClick={onClickNextStep}
    >
      下一步
    </Button>
  </div>
);

Footer.propTypes = {
  onClickNextStep: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Footer;
