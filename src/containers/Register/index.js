import DatePickerInput from '@components/DatePickerInput';
import Header from '@components/Header';
import TInput from '@components/TInput';
import { Form } from 'antd-mobile';
import { useState } from 'react';

import Footer from './components/Footer';
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
  const [footerButtonDisabled, setFooterButtonDisabled] = useState(true);

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

  const onValuesChange = async () => {
    try {
      const validate = await form.validateFields();
      if (validate) {
        setFooterButtonDisabled(false);
      }
    } catch (_) {
      setFooterButtonDisabled(true);
    }
  };

  return (
    <div>
      <Header />
      <div className={style.form}>
        <div className={style.formTitle}>创建你的账号</div>
        <Form
          form={form}
          initialValues={formData}
          onValuesChange={onValuesChange}
          className={style.formContainer}
        >
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
              message: '手机号码无效',
              pattern: /^1[3456789]\d{9}$/,
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
              message: '邮箱地址无效',
              pattern: /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
            }]}
          >
            <TInput length={50} label="邮箱" />
          </Form.Item>
          )}
          <span className={style.changeTypeButton} onClick={onAccountTypeChange}>
            {accountType === ACCOUNT_TYPE.TEL ? '改用邮箱注册' : '改用手机注册'}
          </span>
          <div className={style.birthdayTitle}>出生日期</div>
          <div>这不会公开显示。确认你自己的年龄，即使此账号是用于业务、宠物或其他内容的。</div>
          <Form.Item name="birthday">
            <DatePickerInput />
          </Form.Item>
        </Form>
      </div>
      <Footer onClickNextStep={onClickNextStep} disabled={footerButtonDisabled} />
    </div>
  );
};

export default Register;
