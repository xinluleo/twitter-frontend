import { Input } from 'antd-mobile';
import PropTypes from 'prop-types';
import { useState } from 'react';
import style from './index.module.scss';

const TInput = ({
  label,
  value,
  length,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const onFocus = () => {
    setIsFocused(true);
    setShowBorder(true);
  };

  const onBlur = () => {
    if (value.length === 0) {
      setIsFocused(false);
    }
    setShowBorder(false);
  };

  const onChangeHandler = (val) => {
    if (length && val.length <= length) {
      onChange(val);
    }
  };

  return (
    <div className={showBorder ? style.tInputFocused : style.tInput}>
      <div className={isFocused ? style.labelFocused : style.label}>
        {label}
        {showBorder && length && (
        <span className={style.labelRight}>
          {value.length}
          /
          {length}
        </span>
        )}
      </div>
      <Input
        className={isFocused ? style.inputItemFocused : style.inputItem}
        onFocus={onFocus}
        onBlur={onBlur}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  );
};

TInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TInput;
