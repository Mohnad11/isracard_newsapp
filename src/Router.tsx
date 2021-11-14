import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from './screens/Splash';
import Home from './screens/Home';
import React from 'react';
import News from './screens/News';
import CategoryNews from './screens/CategoryNews';
import Login from './screens/Login';
import Favorites from './screens/Favorites';
import AppHeader from './components/AppHeader';

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" options={{headerShown:false}} component={Splash} />
        <Stack.Screen
          name="HomeScreen"
          options={{
            header: ({navigation}) => <AppHeader navigation={navigation} />,
          }}
          component={Home}
        />
        <Stack.Screen
          name="CategoryNewsScreen"
          options={{
            header: ({navigation}) => <AppHeader navigation={navigation} showBackButton={true} />,
          }}
          component={CategoryNews}
        />
        <Stack.Screen
          name="NewsScreen"
          options={{
            header: ({navigation}) => <AppHeader navigation={navigation} showBackButton={true} />,
          }}
          component={News}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{
            header: ({navigation}) => <AppHeader navigation={navigation} showBackButton={true} />,
          }}
          component={Login}
        />
        <Stack.Screen
          name={'FavoritesScreen'}
          options={{
            header: ({navigation}) => <AppHeader navigation={navigation} showBackButton={true} />,
          }}
          component={Favorites}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
//
export default Router;
