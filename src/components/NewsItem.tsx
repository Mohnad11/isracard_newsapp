import React, {useEffect, useState} from 'react';
import INews from '../types/INews';
import {
  Image,
  ImageErrorEventData,
  NativeSyntheticEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from './AppText';
import ShadowBox from './ShadowBox';
import HideableView from './HideableView';
import Icon from 'react-native-vector-icons/FontAwesome';

interface IProps {
  news: INews;
  onPress: Function;
}
//WT-2007233
export default function NewsItem(props: IProps) {
  const [noImage, setNoImage] = useState(false);
  useEffect(() => {
    if(!props.news.image){
      setNoImage(true);
    }
  }, [props.news]);
  const onError = () => {
    setNoImage(true);
  };
  return (
    <ShadowBox style={styles.container}>
      <TouchableOpacity
        style={styles.inner_container}
        onPress={() => props.onPress(props.news)}>
        <View style={styles.left_container}>
          <HideableView hide={noImage}>
            <Image
              onError={onError}
              source={{uri: props.news.image}}
              style={styles.image}
            />
          </HideableView>
          <HideableView hide={!noImage}>
            <Icon name={'image'} size={30} />
          </HideableView>
        </View>
        <View style={styles.right_container}>
          <AppText numberOfLines={2}>{props.news.title}</AppText>
          <View style={styles.right_bottom_container}>
            <AppText numberOfLines={1}>{props.news.source}</AppText>
            <AppText numberOfLines={1}>
              {props.news.published_at.substring(0, 10)}
            </AppText>
          </View>
        </View>
      </TouchableOpacity>
    </ShadowBox>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    marginTop: 15,
    borderRadius: 15,
    height: 100,
    padding: 10,
    width: '100%',
  },
  inner_container: {
    width: '100%',
    flexDirection: 'row',
    height: '100%',
  },
  left_container: {
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  right_container: {
    flex: 1,
    height: '100%',
    paddingLeft: 10,
    justifyContent: 'space-around',
  },
  right_bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 70,
  },
});
