import { request } from "../axios.config";

export const visitor = {
  register(
    nickname: string,
    phone: string,
    password: string,
  ): Promise<any> {
    return request.post('/user/visitor/register', { nickname, phone, password });
  },
  login(phone: string, password: string): Promise<any> {
    return request.post('/user/visitor/login', {
      phone,
      password,
    });
  },
  getDomainList(): Promise<any[]> {
    return request.get('/domain-list');
  },
  getBaseUser(params: {
    nickname?: string;
    domain?: string;
  }): Promise<any> {
    return request.get('/user/visitor/base_info', {
      params,
    });
  },
  getResume(userId: number): Promise<any> {
    return request.get('/user/visitor/resume', {
      params: {
        user_id: userId,
      },
    });
  }
}
