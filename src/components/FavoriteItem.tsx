import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import IFavorite from '../types/IFavorite';
import AppText from './AppText';
import ShadowBox from './ShadowBox';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
  favItem: IFavorite;
  onPress: Function;
  onDelete: Function;
}
export default function FavoriteItem(props: IProps) {
  return (
    <ShadowBox style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity onPress={() => props.onPress(props.favItem)}>
          <AppText numberOfLines={2}>{props.favItem.item.title}</AppText>
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => props.onDelete(props.favItem.id)}>
          <Icon name="trash" size={25} color={'#d54343'} />
        </TouchableOpacity>
      </View>
    </ShadowBox>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 15,
    borderRadius: 15,
    height: 50,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  left: {
    flex: 0.8,
    justifyContent: 'center',
  },
  right: {
    flex: 0.2,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
