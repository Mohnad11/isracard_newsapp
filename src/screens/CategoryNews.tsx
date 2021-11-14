import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import IAppState from '../types/IAppState';
import {StackScreenProps} from '@react-navigation/stack';
import INews from '../types/INews';
import NewsService from '../services/NewsService';
import {saveNews} from '../redux/news/NewsActions';
import NewsItem from '../components/NewsItem';
import ScreenLayout from '../components/ScreenLayout';
import AppText from '../components/AppText';
import INewsCategory from '../types/INewsCategory';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppColors} from '../utils/AppColors';
import HideableView from '../components/HideableView';
import LottieView from 'lottie-react-native';

type RootStackParamList = {
  CategoryNewsScreen: {category: INewsCategory};
};
type NavigationProps = StackScreenProps<
  RootStackParamList,
  'CategoryNewsScreen'
>;
interface IProps extends NavigationProps {
  news: INews[];
  saveNews: saveNews;
}
function CategoryNews(props: IProps) {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, [props.route.params.category]);
  const category = props.route.params.category;
  const fetchData = () => {
    setLoading(true);
    NewsService.FetchNewsByCategory(category.name, offset)
      .then(x => {
        let news = props.news.concat(x.data);
        props.saveNews(news);
        setOffset(offset + 1);
      })
      .catch(e => console.log(e))
      .finally(() => setLoading(false));
  };
  const moveToNews = (news: INews) => {
    props.navigation.navigate('NewsScreen', {news: news});
  };

  return (
    <ScreenLayout>
      <View style={styles.header}>
        <Icon name={category.icon} size={33} color={AppColors.PRIMARY} />
        <AppText style={styles.category_name}>{category.name}</AppText>
      </View>
      <FlatList
        style={styles.list}
        data={props.news}
        onEndReached={() => fetchData()}
        onEndReachedThreshold={0.8}
        renderItem={({item}) => <NewsItem onPress={moveToNews} news={item} />}
      />
      <HideableView style={styles.loader} hide={!loading}>
        <LottieView
          source={require('../assets/animations/9629-loading.json')}
          autoPlay
          loop
          style={{width: 50, height: 50}}
        />
      </HideableView>
    </ScreenLayout>
  );
}
function mapStateToProps(state: IAppState) {
  return {
    news: state.newsState.news,
  };
}
const mapDispatchToProps = {
  saveNews: saveNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryNews);
const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
    alignItems: 'center',
  },
  category_name: {
    fontSize: 17,
    fontWeight: '600',
    marginLeft: 5,
  },
  loader: {justifyContent: 'center', alignItems: 'center', width: '100%'},
});
