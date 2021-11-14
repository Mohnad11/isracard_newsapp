import {SafeAreaView, FlatList, StyleSheet, Alert} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import IAppState from '../types/IAppState';
import INewsCategory from '../types/INewsCategory';
import {StackScreenProps} from '@react-navigation/stack';
import CategoryItem from '../components/CategoryItem';
import ScreenLayout from '../components/ScreenLayout';
import {clearNews} from '../redux/news/NewsActions';
type RootStackParamList = {};
type NavigationProps = StackScreenProps<any, 'SplashScreen'>;
interface IProps extends NavigationProps {
  categories: INewsCategory[];
  clearNews: clearNews;
}
function Home(props: IProps) {
  const MoveToCategory = (category: INewsCategory) => {
    props.clearNews();
    props.navigation.navigate('CategoryNewsScreen', {category: category});
  };
  return (
    <ScreenLayout>
      <FlatList
        data={props.categories}
        numColumns={2}
        style={{padding: 10}}
        columnWrapperStyle={styles.list_columns}
        renderItem={({item}) => (
          <CategoryItem onPress={MoveToCategory} category={item} />
        )}
      />
    </ScreenLayout>
  );
}
function mapStateToProps(state: IAppState) {
  return {
    categories: state.newsCategoriesState.categories,
  };
}
const mapDispatchToProps = {
  clearNews: clearNews,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
const styles = StyleSheet.create({
  list_columns: {
    justifyContent: 'space-between',
  },
});
