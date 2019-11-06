import { ResResult } from '@/types/resResult';
import * as queryString from 'query-string';
import LoaderAxios from './MyAxios';


class HttpClientHelper<T> {
  /**
   * http的get方法
   * @param url
   * @param {object} query url的string parameter, 传对象
   * @param {object} h 头部, 传对象
   * @param callback
   * @returns {*|Promise<ResResult>}
   */
  public get = ({ url, query, h }: { url: string, query?: object, h?: object }, callback?: (res: ResResult<T>) => any) => {
    url = query ? `${url}?${queryString.stringify(query)}` : url;
    return LoaderAxios.invokeAPI(url, 'GET', undefined, h, callback);
  }

  /**
   * http的post方法
   * @param {string} url
   * @param {object} query, url的string parameter
   * @param {object} data, 请求的body内容
   * @param {object} h, 头部, 传对象
   * @param callback
   * @returns {*|Promise<ResResult>}
   */
  public post = ({ url, query, data, h }: { url: string, query?: object, data: object, h?: object }, callback?: (res: ResResult<T>) => any) => {
    url = query ? `${url}?${queryString.stringify(query)}` : url;
    return LoaderAxios.invokeAPI(url, 'POST', data, h, callback);
  }

  /**
   * http的put方法
   * @param url
   * @param {object} query, url的string parameter
   * @param {object} data, 请求的body内容
   * @param {object} h, 头部, 传对象
   * @param callback
   * @returns {*|Promise<ResResult>}
   */
  public put = ({ url, query, data, h }: { url: string, query?: object, data: object, h?: object }, callback?: (res: ResResult<T>) => any) => {
    url = query ? `${url}?${queryString.stringify(query)}` : url;
    return LoaderAxios.invokeAPI(url, 'PUT', data, h, callback);
  }

  /**
   * http的delete方法
   * @param url
   * @param {object} query, url的string parameter
   * @param {object} data, 请求的body内容
   * @param {object} h, 头部, 传对象
   * @param callback
   * @returns {*|Promise<ResResult>}
   */
  public delete = ({ url, query, data, h }: { url: string, query?: object, data?: object, h?: object }, callback?: (res: ResResult<T>) => any) => {
    url = query ? `${url}?${queryString.stringify(query)}` : url;
    return LoaderAxios.invokeAPI(url, 'DELETE', data, h, callback);
  }
}

export default new HttpClientHelper();
