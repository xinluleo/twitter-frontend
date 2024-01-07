import { Button, Input } from 'antd-mobile';

import DatePickerInput from '../../components/DatePickerInput';
import Header from '../../components/Header';
import style from './index.module.css';

/**
 * 注册页面
 */
const Register = () => {
  console.log('Register');
  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>创建你的账号</div>
        <Input placeholder="名字" className={style.input} />
        <Input placeholder="手机" className={style.input} />
        <div className={style.changeTypeButton}>改用电子邮件</div>
        <div className={style.birthdayTitle}>出生日期</div>
        <div>这不会公开显示。确认你自己的年龄，即使此账号是用于业务、宠物或其他内容的。</div>
        <DatePickerInput />
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton}>下一步</Button>
      </div>
    </div>
  );
};

export default Register;
