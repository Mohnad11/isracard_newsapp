import axios, {AxiosError, AxiosResponse} from 'axios';
const ACCESS_KEY = '38516d52b53a31e70529ee05b9c2b09c';
const API_URL = 'http://api.mediastack.com/v1/news?access_key=' + ACCESS_KEY;
export default async function HttpRequest(
  url: string,
  method: any,
  data?: any,
  cancelToken?: any,
) {
  console.log(API_URL + url)
  return axios
    .request({
      url: API_URL + url,
      method: method,
      data: data,
      cancelToken: cancelToken ? cancelToken() : null,
    })
    .then((result: AxiosResponse<any>) => {
      return Promise.resolve(result);
    })
    .catch((err: AxiosError) => {
      return Promise.reject(err);
    });
}
