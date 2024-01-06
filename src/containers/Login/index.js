import {
  Button, Dialog, Form, Input,
} from 'antd-mobile';
import { loginService } from '../../services/login';
import './index.css';

const initialValues = {
  username: 'lol',
  password: '123456',
};

const Login = () => {
  const [form] = Form.useForm();
  const onSubmit = async () => {
    const values = form.getFieldsValue();
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: '登录成功',
      });
      return;
    }
    Dialog.alert({
      content: '登录失败',
    });
  };

  return (
    <div className="login">
      <Form
        form={form}
        layout="horizontal"
        mode="card"
        initialValues={initialValues}
        footer={
          <Button color="primary" onClick={onSubmit} size="large">登录</Button>
        }
      >
        <Form.Item label="用户名" name="username">
          <Input placeholder="请输入用户名" clearable />
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input placeholder="请输入密码" clearable type="password" />
        </Form.Item>
      </Form>
    </div>

  );
};

export default Login;
