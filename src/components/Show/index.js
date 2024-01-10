import PropTypes from 'prop-types';

/**
 * 用于显示/隐藏其它组件
 */
const Show = ({
  visible,
  children,
}) => (
  <div style={{ display: visible ? 'block' : 'none' }}>
    { children }
  </div>
);

Show.propTypes = {
  visible: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Show;
