import INews from '../../types/INews';
import {Dispatch, AnyAction} from 'redux';
export type saveNews = (news: INews[]) => AnyAction;
export function saveNews(news: INews[]) {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: 'SAVE_NEWS',
      news,
    });
  };
}
export type clearNews = () => AnyAction;
export function clearNews() {
  return async (dispatch: Dispatch) => {
    return dispatch({
      type: 'SAVE_NEWS',
      news: [],
    });
  };
}
