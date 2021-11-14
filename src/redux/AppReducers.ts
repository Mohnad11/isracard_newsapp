import {combineReducers} from 'redux';
import IAppState from '../types/IAppState';
import NewsReducers from './news/NewsReducers';
import NewsCategoriesReducers from './NewsCategoriesReducers';
import FavoritesReducers from './favorites/FavoritesReducers';
import UserReducers from './user/UserReducers';
const defaultState: IAppState = {
  newsState: {news: []},
  favoritesState: {favorites: []},
  userState: {},
  newsCategoriesState: {
    categories: require('../assets/data/Categories.json'),
  },
};
function createReducer(initialState: any, handlers: any) {
  return function reducer(state = initialState, action: any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
const newsReducers = createReducer(defaultState.newsState, NewsReducers);
const newsCategoriesReducers = createReducer(
  defaultState.newsCategoriesState,
  NewsCategoriesReducers,
);
const favoritesReducers = createReducer(
  defaultState.favoritesState,
  FavoritesReducers,
);
const userReducers = createReducer(defaultState.userState, UserReducers);
const AppReducer = combineReducers({
  newsState: newsReducers,
  newsCategoriesState: newsCategoriesReducers,
  favoritesState: favoritesReducers,
  userState: userReducers,
});

export default AppReducer;
