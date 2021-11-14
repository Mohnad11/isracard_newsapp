import React from 'react';
import {StyleSheet, View,TouchableOpacity} from 'react-native';
import AppText from './AppText';
import {AppColors} from '../utils/AppColors';

import Icon from 'react-native-vector-icons/FontAwesome';
import HideableView from './HideableView';
//import {TouchableOpacity} from 'react-native-gesture-handler';

interface IProps {
  text: string;
  onPress?: Function;
  icon?: string;
}
export default function AppButton(props: IProps) {
  return (
    <View style={styles.button_container}>
      <TouchableOpacity style={styles.container}
        onPress={() => (props.onPress ? props.onPress() : null)}>
        <HideableView hide={!props.icon}>
          <Icon name={props.icon} size={25} color={AppColors.ICONS} />
        </HideableView>
        <AppText style={styles.text}>{props.text}</AppText>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button_container: {
    width: '100%',
    height: 40,
  },
  container: {
    width: '100%',
    backgroundColor: AppColors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    height:'100%',
    borderRadius: 10,
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    marginLeft: 5,
  },
});
