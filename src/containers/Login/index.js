import TInput from '@components/TInput';
import { login } from '@services/login';
import {
  Button, Dialog, Form,
} from 'antd-mobile';
import { Link } from 'react-router-dom';

import style from './index.module.scss';

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    const values = await form.validateFields();
    if (values) {
      const res = await login(values.username, values.password);
      if (res.success && res.data && res.data.length > 0) {
        Dialog.alert({
          content: '登录成功',
        });
        return;
      }
      Dialog.alert({
        content: '登录失败',
      });
    }
  };

  return (
    <div className={style.login}>
      <div className={style.formTitle}>登录 Twitter</div>
      <Form
        form={form}
        className={style.formContainer}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: '用户名不能为空' },
          ]}
        >
          <TInput label="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: '密码不能为空' },
          ]}
        >
          <TInput label="密码" type="password" />
        </Form.Item>
        <Button className={style.footerButton} onClick={onSubmit}>下一步</Button>
      </Form>
      <div className={style.goToRegister}>
        还没有账号？
        <Link to="/register">注册</Link>
      </div>
    </div>
  );
};

export default Login;
