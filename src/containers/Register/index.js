import Header from '@components/Header';
import Show from '@components/Show';
import { registerUser } from '@services/register';
import { Toast } from 'antd-mobile';
import { useState } from 'react';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';

const STEP = {
  ONE: 1,
  TWO: 2,
};

/**
 * 注册页面
 */
const Register = () => {
  const [step, setStep] = useState(STEP.ONE);
  const [userInfo, setUserInfo] = useState({});

  const gotoNextStepHandler = (data) => {
    setUserInfo(data);
    setStep(STEP.TWO);
  };

  const confirmRegisterHandler = async (password) => {
    const res = await registerUser({
      password,
      ...userInfo,
    });
    if (res.success) {
      Toast.show('注册成功');
      return;
    }
    Toast.show('注册失败');
  };

  const onClickClose = () => {
    setStep(STEP.ONE);
  };

  return (
    <div>
      <Header onClickClose={onClickClose} />
      <Show visible={step === STEP.ONE}>
        <StepOne gotoNextStepHandler={gotoNextStepHandler} />
      </Show>
      <Show visible={step === STEP.TWO}>
        <StepTwo
          userInfo={userInfo}
          confirmRegisterHandler={confirmRegisterHandler}
        />
      </Show>
    </div>
  );
};

export default Register;
