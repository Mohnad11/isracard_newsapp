import ScreenLayout from '../components/ScreenLayout';
import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {FlatList, StyleSheet, View} from 'react-native';
import IAppState from '../types/IAppState';
import {connect} from 'react-redux';
import IFavorite from '../types/IFavorite';
import FavoriteItem from '../components/FavoriteItem';
import {removeFromFavorites} from '../redux/favorites/FavoritesActions';
import HideableView from '../components/HideableView';
import AppText from '../components/AppText';
type RootStackParamList = {};
type NavigationProps = StackScreenProps<RootStackParamList, 'FavoritesScreen'>;
interface IProps extends NavigationProps {
  favorites: IFavorite[];
  removeFromFavorites: removeFromFavorites;
}
function Favorites(props: IProps) {
  const moveToNews = (favItem: IFavorite) => {
    props.navigation.navigate('NewsScreen', {news: favItem.item});
  };
  const deleteFav = (id: string) => {
    props.removeFromFavorites(id);
  };
  return (
    <ScreenLayout>
      <View style={styles.screen}>
        <HideableView
          style={styles.list_container}
          hide={!(props.favorites && props.favorites.length > 0)}>
          <FlatList
            data={props.favorites}
            renderItem={({item}) => (
              <FavoriteItem
                onPress={moveToNews}
                onDelete={deleteFav}
                favItem={item}
              />
            )}
          />
        </HideableView>
        <HideableView
          style={styles.empty_container}
          hide={props.favorites && props.favorites.length > 0}>
          <AppText style={styles.empty_text}>Favorite list is empty</AppText>
        </HideableView>
      </View>
    </ScreenLayout>
  );
}
function mapStateToProps(state: IAppState) {
  return {
    favorites: state.favoritesState.favorites,
  };
}
const mapDispatchToProps = {
  removeFromFavorites: removeFromFavorites,
};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
  },
  list_container: {
    flex: 1,
  },
  empty_container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  empty_text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
