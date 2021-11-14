import React from 'react';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import AppText from './AppText';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppColors} from '../utils/AppColors';
import IAppState from '../types/IAppState';
import {connect} from 'react-redux';
import IUser from '../types/IUser';
import HideableView from './HideableView';
import Icon from 'react-native-vector-icons/FontAwesome';
interface IProps {
  navigation: StackNavigationProp<any>;
  user?: IUser;
  showBackButton?: boolean;
}
function AppHeader(props: IProps) {
  const moveToFav = () => {
    props.navigation.navigate('FavoritesScreen');
  };
  const moveToLogin = () => {
    props.navigation.navigate('LoginScreen');
  };
  const moveBack = () => {
    props.navigation.goBack();
  };
  return (
    <View style={styles.header}>
      <SafeAreaView style={styles.header_inner}>
        <View style={styles.header_left}>
          <HideableView hide={!props.showBackButton}>
            <TouchableOpacity onPress={moveBack}>
              <Icon name="arrow-left" size={25} color={AppColors.ICONS} />
            </TouchableOpacity>
          </HideableView>
        </View>
        <View style={styles.header_center}>
          <AppText style={styles.header_text}>News App</AppText>
        </View>
        <View style={styles.header_right}>
          <HideableView hide={!props.user}>
            <TouchableOpacity onPress={moveToFav}>
              <Icon name="star" size={25} color={AppColors.ICONS} />
            </TouchableOpacity>
          </HideableView>
          <HideableView hide={props.user != null}>
            <TouchableOpacity onPress={moveToLogin}>
              <Icon name="sign-in" size={25} color={AppColors.ICONS} />
            </TouchableOpacity>
          </HideableView>
        </View>
      </SafeAreaView>
    </View>
  );
}
function mapStateToProps(state: IAppState) {
  return {
    user: state.userState.user,
  };
}
export default connect(mapStateToProps)(AppHeader);
const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: Platform.OS == 'ios' ? 80 : 60,
    backgroundColor: AppColors.PRIMARY,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
    paddingTop: Platform.OS == 'ios' ? 0 : 10,
  },
  header_inner: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
  },
  header_left: {
    flex: 0.33333,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  header_center: {
    flex: 0.33333,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_right: {
    flex: 0.33333,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  header_text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
});
