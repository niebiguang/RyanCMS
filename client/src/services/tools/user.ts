import { request } from '../axios.config';

export default class User {
  static getJsonToInterface(data: string) {
    return request.post('/tools/user/get-json-to-ts', {
      data,
    });
  }
}
