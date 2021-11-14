import {AnyAction, Dispatch} from 'redux';
import IUser from '../../types/IUser';

export type saveUser = (user: IUser) => AnyAction;
export function saveUser(user: IUser) {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: 'SAVE_USER',
      user,
    });
  };
}
