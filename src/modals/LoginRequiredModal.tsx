import React from 'react';
import BaseModal from './BaseModal';
import AppText from '../components/AppText';
import { Alert, SafeAreaView, StyleSheet, View } from "react-native";
import LottieView from 'lottie-react-native';
import AppButton from '../components/AppButton';
interface IProps {
  visible: boolean;
  onClose: Function;
  onLoginPress: Function;
}
export default function LoginRequiredModal(props: IProps) {
  return (
    <BaseModal
      style={styles.modal}
      visible={props.visible}
      onClose={props.onClose}>
      <SafeAreaView style={styles.modal_container}>
        <View style={styles.modal_top}>
          <LottieView
            source={require('../assets/animations/82473-login.json')}
            speed={0.7}
            autoPlay
            loop
            style={{width: 250, height: 250}}
          />
          <AppText style={styles.text}>You need to Login</AppText>
        </View>
        <View style={styles.modal_bottom}>
          <View style={styles.button_container}>
            <AppButton text={'Login'} onPress={props.onLoginPress} />
          </View>
          <View style={styles.button_container}>
            <AppButton text={'Close'} onPress={props.onClose} />
          </View>
        </View>
      </SafeAreaView>
    </BaseModal>
  );
}
const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  modal_container: {
    width: '100%',
    height: '55%',
    backgroundColor: 'white',
    padding: 15,
  },
  modal_top: {
    width: '100%',
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal_bottom: {
    width: '100%',
    flex: 0.2,
    flexDirection: 'row',
  },
  button_container: {
    flex: 0.5,
    paddingLeft: 10,
    paddingRight: 10,
    height: '100%',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
