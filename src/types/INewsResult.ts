import INews from './INews';

export interface INewsResult {
  pagination: IResultPagination;
  data: INews[];
}
export interface IResultPagination {
  limit: number;
  offset: number;
  count: number;
  total: number;
}
