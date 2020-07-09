import { action } from 'mobx';
import request from './../../bin/httpRequest';

class NavigationStore {
  @action getCategories() {
    const options = {
      method: 'GET',
      url: `${process.env.MONGO_API}${process.env.MERCHANT}/categories/`,
    };
    return request.genericHandler(options).then((res) => {
      let callback = { action: 'getCategories', success: false };
      if (!res.error) {
        callback = Object.assign({}, callback, { data: res.data, success: true });
      } else {
        callback = Object.assign({}, callback, { error: res.error });
      }
      return callback;
    });
  }
}

export default new NavigationStore();
