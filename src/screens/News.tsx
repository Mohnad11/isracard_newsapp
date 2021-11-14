import {
  Alert,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import IAppState from '../types/IAppState';
import {StackScreenProps} from '@react-navigation/stack';
import INews from '../types/INews';
import ScreenLayout from '../components/ScreenLayout';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import IUser from '../types/IUser';
import {addToFavorites} from '../redux/favorites/FavoritesActions';
import IFavorite from '../types/IFavorite';
import {GenerateGuid} from '../utils/SharedFunctions';
import AddedToFavoriteModal from '../modals/AddedToFavoriteModal';
import LoginRequiredModal from '../modals/LoginRequiredModal';
import HideableView from '../components/HideableView';
import Icon from 'react-native-vector-icons/FontAwesome';
type RootStackParamList = {
  NewsScreen: {news: INews};
};
type NavigationProps = StackScreenProps<RootStackParamList, 'NewsScreen'>;
interface IProps extends NavigationProps {
  user?: IUser;
  addToFavorites: addToFavorites;
}
function News(props: IProps) {
  const [showAddedToFavModal, setShowAddedToFavModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const item = props.route.params.news;
  const [noImage, setNoImage] = useState(false);
  useEffect(() => {
    if (!item.image) {
      setNoImage(true);
    }
  }, [item]);
  const onError = () => {
    setNoImage(true);
  };
  const addToFav = () => {
    if (!props.user) {
      //props.navigation.navigate('LoginScreen');
      setShowLoginModal(true);
      return;
    }
    let favItem: IFavorite = {
      id: GenerateGuid(),
      item: item,
    };
    props.addToFavorites(favItem);
    setShowAddedToFavModal(true);
  };
  const moveToLogin = () => {
    setShowLoginModal(false);
    props.navigation.navigate('LoginScreen');
  };
  return (
    <ScreenLayout>
      <View style={styles.screen}>
        <View style={styles.news_container}>
          <HideableView hide={noImage}>
            <Image
              onError={onError}
              style={styles.image}
              source={{uri: item.image}}
            />
          </HideableView>
          <HideableView hide={!noImage}>
            <Icon name={'image'} size={60} style={styles.image_icon} />
          </HideableView>
          <AppText style={styles.title}>{item.title}</AppText>
          <AppText style={styles.disc}>{item.title}</AppText>
          <View style={styles.details_container}>
            <AppText numberOfLines={1}>{item.source}</AppText>
            <AppText numberOfLines={1}>
              {item.published_at.substring(0, 10)}
            </AppText>
          </View>
        </View>
        <View style={styles.fav_button_container}>
          <AppButton onPress={addToFav} text={'Add To Favirotes'} />
        </View>
      </View>
      <AddedToFavoriteModal
        visible={showAddedToFavModal}
        onClose={() => setShowAddedToFavModal(false)}
      />
      <LoginRequiredModal
        visible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLoginPress={moveToLogin}
      />
    </ScreenLayout>
  );
}
function mapStateToProps(state: IAppState) {
  return {
    user: state.userState.user,
  };
}
const mapDispatchToProps = {
  addToFavorites: addToFavorites,
};
export default connect(mapStateToProps, mapDispatchToProps)(News);
const styles = StyleSheet.create({
  screen: {
    padding: 10,
    flex: 1,
    flexDirection: 'column',
  },
  news_container: {
    flex: 0.9,
    paddingTop: 15,
  },
  fav_button_container: {
    flex: 0.1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
    alignSelf: 'center',
  },
  image_icon: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: '500',
  },
  disc: {
    fontSize: 14,
    marginTop: 15,
  },
  details_container: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
});
