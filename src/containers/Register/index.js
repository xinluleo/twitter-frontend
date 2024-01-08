import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';
import TInput from '@components/TInput';
import { Button, Form } from 'antd-mobile';
import { useState } from 'react';

import style from './index.module.scss';

const ACCOUNT_TYPE = {
  TEL: 'tel',
  EMAIL: 'email',
};

/**
 * 注册页面
 */
const Register = () => {
  const [form] = Form.useForm();
  const [formData] = useState({
    name: '',
    tel: '',
    email: '',
    birthday: '20220203',
  });
  const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TEL);

  const onAccountTypeChange = () => {
    if (accountType === ACCOUNT_TYPE.TEL) {
      setAccountType(ACCOUNT_TYPE.EMAIL);
      return;
    }
    setAccountType(ACCOUNT_TYPE.TEL);
  };

  const onClickNextStep = async () => {
    const validate = await form.validateFields();
    if (validate) {
      console.log(validate);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>创建你的账号</div>
        <Form form={form} initialValues={formData} className={style.formContainer}>
          <Form.Item
            name="name"
            rules={[{
              required: true,
              message: '名字不能为空',
            }]}
          >
            <TInput length={50} label="名字" />
          </Form.Item>
          {accountType === ACCOUNT_TYPE.TEL && (
          <Form.Item
            name="tel"
            rules={[{
              required: true,
              message: '手机号不能为空',
            }]}
          >
            <TInput length={11} label="手机" />
          </Form.Item>
          )}
          {accountType === ACCOUNT_TYPE.EMAIL && (
          <Form.Item
            name="email"
            rules={[{
              required: true,
              message: '邮箱不能为空',
            }]}
          >
            <TInput length={50} label="邮箱" />
          </Form.Item>
          )}
          <div className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.TEL ? '改用邮箱注册' : '改用手机注册'}
          </div>
          <div className={style.birthdayTitle}>出生日期</div>
          <div>这不会公开显示。确认你自己的年龄，即使此账号是用于业务、宠物或其他内容的。</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <div className={style.footer}>
        <Button className={style.footerButton} onClick={onClickNextStep}>下一步</Button>
      </div>
    </div>
  );
};

export default Register;
