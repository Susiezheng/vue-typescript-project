/***
 **工具类
 */
'use strict';

class Tools {

  // 返回到登录
  public backupLogin() {
    // 返回
    const hash = window.location.hash;
    if (hash.indexOf('login') === -1) {
      localStorage.clear();
      location.href = '/#/login';
    }
  }

  /**
   *
   * @param data
   * @param isPrefix
   */
  public queryParams(data: { [x: string]: any; }, isPrefix = false) {
    const prefix = isPrefix ? '?' : '';
    const _result = [];
    for (const key in data) {
      const value = data[key];
      // 去掉为空的参数
      if (['', undefined, null].includes(value)) {
        continue;
      }
      if (value.constructor === Array) {
        // 数组类型参数通常默认'[]='拼接目前项目有其他处理改为'='
        value.forEach((value: any) => {
          _result.push(
            encodeURIComponent(key) + '=' + encodeURIComponent(value),
          );
        });
      } else {
        _result.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
      }
    }

    return _result.length ? prefix + _result.join('&') : '';
  }

  public getHeader(token: string | null, isFile: undefined) {
    // isFile是否文件类型
    const header: { 'If-Modified-Since': number; token: string | null; Accept: string } = {
      'If-Modified-Since': 0,
      'Accept': '*/*',
      token,
    };
    if (!isFile) {
      Object.assign(header, {
        'Content-Type': 'application/json',
      });
    }
    return header;
  }
}

export default new Tools();
