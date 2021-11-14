import {StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import ScreenLayout from '../components/ScreenLayout';
import AppText from '../components/AppText';
type RootStackParamList = {};
type IProps = StackScreenProps<any, 'SplashScreen'>;

export default function Splash(props: IProps) {
  useEffect(() => {
    //;
    setTimeout(() => {
      props.navigation.navigate('HomeScreen');
    }, 2000);
  }, [props.navigation]);
  return (
    <ScreenLayout>
      <View style={styles.screen}>
        <AppText style={styles.text}>News App</AppText>
        <LottieView
          source={require('../assets/animations/9629-loading.json')}
          autoPlay
          loop
          style={{width: 100, height: 100}}
        />
      </View>
    </ScreenLayout>
  );
}
const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 200,
  },
});
