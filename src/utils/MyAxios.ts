'use strict';
import axios from 'axios';
import {Message} from 'element-ui';
import _ from 'lodash';
import loaderJson from './loaderJson';
import Tools from './Tools';

class MyAxios {
  public invokeAPI(url: string | IArguments | [string | undefined, any, any, any, { (arg0: any): void; (arg0: any): void; }], method: string, data: object | undefined, header: object | undefined, callback: any) {
    // 使用参数顺序：url, method, data = {}, headers = {}
    // const _arguments = c;
    return new Promise((resolve, reject) => {
      this.checkOutToken(url, method, data, header, callback, resolve, reject);
    });
  }

  // tslint:disable-next-line:variable-name max-line-length
  public checkOutToken(url: string | IArguments | [string | undefined, any, any, any, { (arg0: any): void; (arg0: any): void; }], method: string, data: object | undefined, header: object | undefined, callback: any, resolve: { (value?: unknown): void; (arg0: unknown): void; }, reject: { (reason?: any): void; (arg0: any): void; }) {
    this.core(url, method, data, header, callback).then((res: unknown) => resolve(res), (res: any) => reject(res));
  }

  // tslint:disable-next-line:max-line-length
  public core(url: string | IArguments | [string | undefined, any, any, any, { (arg0: any): void; (arg0: any): void; }] | undefined, method: string, data: object | undefined, header: object | undefined, callback: any) {
    // @ts-ignore
    const isJson = _.endsWith(url, '.json');
    if (isJson) {
      return loaderJson.loadUrl(url);
    }
    const fetchOpt = {
      method,
      headers: Object.assign(
        Tools.getHeader(localStorage.getItem('access_token'), undefined),
        header,
      ), url: undefined,

    };
    const selfParams = data ? Tools.queryParams(data, true) : '';
    if (/^get$/i.test(fetchOpt.method)) {
      url += selfParams;
    }
    // @ts-ignore
    fetchOpt.url = url;
    // 创建实例
    const instance = axios.create({
      headers: fetchOpt.headers,
    });
    // @ts-ignore
    return instance({
      url: fetchOpt.url,
      method: fetchOpt.method.toLowerCase(),
      data,
    }).then((res: {
      isExecuteCallback: boolean;
      data: { code: any; msg: any; };
    }) => {
      if (this.isFailed(res)) {
        // e.response = res;
        throw new Error(`Request failed status code ${res.data.code}, reason: ${res.data.msg}'`);
      } else if (res && !res.isExecuteCallback && callback) {
        const result = callback(res);
        return result || Promise.resolve(res);
      } else {
        return res.data;
      }
    }).catch((resp: any) => {
      const {response} = resp;
      let errorMessage = '';
      if (response && response.status && (response.status === 401 || response.status === 403)) {
        errorMessage = `error：用户验证失败，将退出重新登录！`;
        Message({
          message: errorMessage,
          type: 'error',
          duration: 2 * 1000,
          onClose: () => {
            Tools.backupLogin();
          },
        });
        // 无权限跳出登录
        Tools.backupLogin();
        return Promise.reject(resp);
      } else if (callback) {
        return {
          isExecuteCallback: true,
          result: callback || Promise.resolve(response),
        };
      } else {
        return Promise.reject(resp);
      }
    })
      .catch((res: any) => {
        const {response} = res;
        if (response) {
          Message.error({
            showClose: true,
            message: response.data.msg || '系统错误！',
            type: 'error',
          });
        } else {
          Message({
            message: res.message,
            type: 'error',
            duration: 5 * 1000,
          });
        }
        return Promise.reject(res);
      });
  }

  public isFailed(resp: { data: any; }) {
    // res.data.code 不存在，说明是edsp以外的响应数据，应当为正常
    // tslint:disable-next-line:radix
    return resp.data && resp.data.code && resp.data.code !== parseInt('200');
  }
}

export default new MyAxios();
