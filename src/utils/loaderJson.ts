/**
 * 根据url动态加载json
 */

class DynaLoadeJson {
  public loadUrl(url?: string | IArguments | [(string | undefined), any, any, any, { (arg0: any): void; (arg0: any): void }] | undefined) {
    let start;
    let result;
    let splitUrl = url;
    if (!url) {
      return '';
    } else {
      if (typeof url !== 'string' || url.substr(0, 1) === '/') {
        if (typeof url === 'string') {
          splitUrl = url.slice(1);
        }
      }
      if (typeof splitUrl === 'string') {
        start = splitUrl.indexOf('.json');
      }
      // @ts-ignore
      if (start > -1) {
        if (typeof splitUrl === 'string') {
          result = splitUrl.substring(0, start);
        }
        return import(`@/${result}.json`);
      }
      return '';
    }
  }
}

export default new DynaLoadeJson();
