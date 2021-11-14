import IFavoritesState from '../../types/IFavoritesState';

const FavoritesReducers = {
  ADD_TO_FAVORITES: addToFavorites,
  REMOVE_FROM_FAVORITES: removeFromFavorites,
};
function addToFavorites(state: IFavoritesState, action: any) {
  let favorites = state.favorites;
  favorites.push(action.item);
  return {...state, ...{favorites: favorites}};
}
function removeFromFavorites(state: IFavoritesState, action: any) {
  let favorites = state.favorites;
  favorites = favorites.filter(x => x.id !== action.id);
  return {...state, ...{favorites: favorites}};
}
export default FavoritesReducers;
