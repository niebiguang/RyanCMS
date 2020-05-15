import { User as IUer, Resume } from '@/interface/user.interface';
import { SuccessResponse } from '@/interface/response/success.response';
import { request } from './../axios.config';
import { UpdateUser } from '.';

export default class User {
  static update(data: UpdateUser): Promise<IUer> {
    return request.post('/user/user/update', data);
  }

  static getInfo(): Promise<IUer> {
    return request.get('/user/user/info');
  }

  static getResume(): Promise<Resume> {
    return request.get('/user/user/resume');
  }

  static updateResume(content: string): Promise<Resume> {
    return request.post('/user/user/update-resume', { content });
  }
  static updateTheme(data: {
    color?: string;
    music?: string;
  }): Promise<SuccessResponse> {
    return request.post('/user/user/update-theme', data);
  }
}
