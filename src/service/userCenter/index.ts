import API from '@/service/userCenter/API';
import { HttpClientHelper } from '@/utils';

export class UserService {
  public login = (data?: any, query?: any, h?: any, callback?: any) => {
    return HttpClientHelper.post({ url: `${API.login}`, query, data, h }, callback);
  };
  public loginOut = (data?: any, query?: any, h?: any, callback?: any) => HttpClientHelper.post({
    url: `${API.loginOut}`,
    query,
    data,
    h,
  }, callback);

}

export default new UserService();
