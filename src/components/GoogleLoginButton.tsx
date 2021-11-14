import AppButton from './AppButton';
import React from 'react';
import AuthServices from '../services/AuthServices';
interface IProps {
  onLogin: Function;
}
export default function GoogleLoginButton(props: IProps) {
  const signIn = async () => {
    AuthServices.GoogleLogin().then(x => props.onLogin(x));
  };
  return <AppButton icon={"google"} onPress={signIn} text={'Login with google'} />;
}
