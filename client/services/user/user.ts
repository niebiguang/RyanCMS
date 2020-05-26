import { request } from '../axios.config';
import { User, Resume } from '@/client/types/user.interface';
import { SuccessResponse } from '@/client/types/response/success.response';

export const user = {
  update(data: Partial<User>): Promise<User> {
    return request.post('/user/user/update', data);
  },

  getInfo(): Promise<User> {
    return request.get('/user/user/info');
  },

  getResume(): Promise<Resume> {
    return request.get('/user/user/resume');
  },

  updateResume(content: string): Promise<Resume> {
    return request.post('/user/user/update-resume', { content });
  }, updateTheme(data: {
    color?: string;
    music?: string;
  }): Promise<SuccessResponse> {
    return request.post('/user/user/update-theme', data);
  }
};
