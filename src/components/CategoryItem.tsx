import INewsCategory from '../types/INewsCategory';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from './AppText';
import ShadowBox from './ShadowBox';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../utils/AppColors';

interface IProps {
  category: INewsCategory;
  onPress: Function;
}
export default function CategoryItem(props: IProps) {
  return (
    <ShadowBox style={styles.container}>
      <TouchableOpacity
        onPress={() => props.onPress(props.category)}
        style={styles.inner_container}>
        <Icon name={props.category.icon} size={33} color={AppColors.PRIMARY} />
        <AppText style={styles.text}>{props.category.name}</AppText>
      </TouchableOpacity>
    </ShadowBox>
  );
}
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width / 2 - 20,
    backgroundColor: '#ffffff',
    height: Dimensions.get('screen').height / 6,
    marginTop: 15,
    borderRadius: 15,
  },
  inner_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    marginTop: 15,
  },
});
