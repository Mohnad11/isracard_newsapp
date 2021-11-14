import AppButton from './AppButton';
import React from 'react';
import AuthServices from '../services/AuthServices';
interface IProps {
  onLogin: Function;
}
export default function FBLoginButton(props: IProps) {
  const signIn = async () => {
    AuthServices.FBLogin().then(x => {
      props.onLogin(x);
    });
  };
  return <AppButton icon={"facebook"} onPress={signIn} text={'Login with facebook'} />;
}
