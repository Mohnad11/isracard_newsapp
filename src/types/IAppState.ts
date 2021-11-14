import INewsState from './INewsState';
import INewsCategoriesState from './INewsCategoriesState';
import IFavoritesState from './IFavoritesState';
import IUserState from './IUserState';

export default interface IAppState {
  newsState: INewsState;
  newsCategoriesState: INewsCategoriesState;
  favoritesState: IFavoritesState;
  userState: IUserState;
}
