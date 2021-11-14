import BaseService from './BaseService';
import {RequestMethod} from '../utils/Enums';
import {INewsResult} from '../types/INewsResult';

class NewsService {
  public static async FetchNewsByCategory(
    category: string,
    offset: number,
  ): Promise<INewsResult> {
    return BaseService(
      '&categories=' + category + '&offset=' + offset,
      RequestMethod.GET,
    );
  }
}
export default NewsService;
