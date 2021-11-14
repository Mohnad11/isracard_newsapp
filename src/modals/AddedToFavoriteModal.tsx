import React from 'react';
import BaseModal from './BaseModal';
import AppText from '../components/AppText';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import AppButton from '../components/AppButton';
interface IProps {
  visible: boolean;
  onClose: Function;
}
export default function AddedToFavoriteModal(props: IProps) {
  return (
    <BaseModal
      style={styles.modal}
      visible={props.visible}
      onClose={props.onClose}>
      <View style={styles.modal_container}>
        <View style={styles.modal_top}>
          <LottieView
            source={require('../assets/animations/156-star-blast.json')}
            speed={0.7}
            autoPlay
            loop
            style={{width: 250, height: 250}}
          />
          <AppText style={styles.text}>News added to favorite</AppText>
        </View>
        <View style={styles.modal_bottom}>
          <AppButton text={'Close'} onPress={props.onClose} />
        </View>
      </View>
    </BaseModal>
  );
}
const styles = StyleSheet.create({
  modal: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  modal_container: {
    width: '100%',
    height: '50%',
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
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
