import { useState } from 'react';
import './index.css';

const Login = () => {
  const [name, setName] = useState('');
  const [pwd, setPwd] = useState('');

  const clickHandler = () => {
    alert('登录成功' + name + ', ' + pwd);
  }

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }

  const onChangePwdHandler = (e) => {
    setPwd(e.target.value);
  }

  return (
    <div className="login">
      <div>用户名：<input onChange={onChangeNameHandler} /></div>
      <div>密码：<input type='password' onChange={onChangePwdHandler}/></div>
      <div><button onClick={clickHandler}>登录</button></div>
    </div>
  );
}

export default Login;