import INewsState from '../../types/INewsState';

const NewsReducers = {
  SAVE_NEWS: saveNews,
};
function saveNews(state: INewsState, action: any) {
  return {...state, ...{news: action.news}};
}
export default NewsReducers;
