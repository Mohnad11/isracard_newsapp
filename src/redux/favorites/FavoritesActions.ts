import {Dispatch, AnyAction} from 'redux';
import IFavorite from '../../types/IFavorite';

export type addToFavorites = (item: IFavorite) => AnyAction;
export function addToFavorites(item: IFavorite) {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: 'ADD_TO_FAVORITES',
      item,
    });
  };
}

export type removeFromFavorites = (id: string) => AnyAction;
export function removeFromFavorites(id: string) {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: 'REMOVE_FROM_FAVORITES',
      id,
    });
  };
}
