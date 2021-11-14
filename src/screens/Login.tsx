import ScreenLayout from '../components/ScreenLayout';
import React from 'react';

import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';
import GoogleLoginButton from '../components/GoogleLoginButton';
import FBLoginButton from '../components/FBLoginButton';
import IUser from '../types/IUser';
import IAppState from '../types/IAppState';
import {saveUser} from '../redux/user/UserActions';
import {connect} from 'react-redux';
import AppText from '../components/AppText';

type RootStackParamList = {};
type NavigationProps = StackScreenProps<RootStackParamList, 'LoginScreen'>;
interface IProps extends NavigationProps {
  saveUser: saveUser;
}
function Login(props: IProps) {
  const onLogin = (user: IUser) => {
    props.saveUser(user);
    props.navigation.navigate('HomeScreen');
  };
  return (
    <ScreenLayout>
      <View style={styles.screen}>
        <AppText style={styles.title}>
          Hello Guest,{'\n'}Please Login to save your favorite news
        </AppText>
        <View>
          <GoogleLoginButton onLogin={onLogin} />
        </View>
        <View style={{marginTop: 15}}>
          <FBLoginButton onLogin={onLogin} />
        </View>
      </View>
    </ScreenLayout>
  );
}
function mapStateToProps(state: IAppState) {
  return {
    categories: state.newsCategoriesState.categories,
  };
}
const mapDispatchToProps = {
  saveUser: saveUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 50,
    textAlign: 'center',
  },
});
