import { User as IUer, Resume } from '../../interface/user.interface';
import { request } from './../axios.config';

export default class Visitor {
  static register(
    nickname: string,
    phone: string,
    password: string,
  ): Promise<IUer> {
    return request.post('/user/visitor/register', {
      nickname,
      phone,
      password,
    });
  }

  static login(phone: string, password: string): Promise<IUer> {
    return request.post('/user/visitor/login', {
      phone,
      password,
    });
  }

  static getDomainList(): Promise<IUer[]> {
    return request.get('/domain-list');
  }

  static getBaseUser(params: {
    nickname?: string;
    domain?: string;
  }): Promise<IUer> {
    return request.get('/user/visitor/base_info', {
      params,
    });
  }

  static getResume(userId: number): Promise<Resume> {
    return request.get('/user/visitor/resume', {
      params: {
        user_id: userId,
      },
    });
  }
}
