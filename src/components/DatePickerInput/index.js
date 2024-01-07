import datepickerIcon from '../../assets/datepicker-icon.svg';

import style from './index.module.css';

export default () => (
  <div className={style.birthdayInput}>
    <div className={style.birthdayInputTitle}>出生日期</div>
    <div>
      <span className={style.birthdayPlaceholder}>年/月/日</span>
      <img className={style.datepickerIcon} src={datepickerIcon} alt="datepickerIcon" />
    </div>
  </div>
);
