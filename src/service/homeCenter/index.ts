import { HttpClientHelper } from '@/utils';
import API from './API';

export class HomeService {
  public getQueryBookList = (data?: any, query?: any, h?: any, callback?: any) => HttpClientHelper.post({
    url: `${API.getQueryBookList}`,
    query,
    data,
    h,
  }, callback);

  public getBookList = (data?: any, query?: any, h?: any, callback?: any) => HttpClientHelper.post({
    url: `${API.getBookList}`,
    query,
    data,
    h,
  }, callback);

  public getSaveBook = (data?: any, query?: any, h?: any, callback?: any) => HttpClientHelper.post({
    url: `${API.getSaveBook}`,
    query,
    data,
    h,
  }, callback);
  public getUploadBook = (data?: any, query?: any, h?: any, callback?: any) => HttpClientHelper.post({
    url: `${API.getUploadBook}`,
    query,
    data,
    h,
  }, callback);

}

export default new HomeService();
