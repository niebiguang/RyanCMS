import { request } from './../axios.config';
import { TagResponse } from '.';
import { Tag } from '../../interface/tag.interface';

export default class Visitor {
  static getList(
    page: number,
    size: number,
    userId: number,
  ): Promise<TagResponse> {
    return request.get('/tag/visitor/list', {
      params: {
        page,
        size,
        user_id: userId,
      },
    });
  }

  static getTag(userId: number, name: string): Promise<Tag> {
    return request.get('/tag/visitor/info', {
      params: {
        user_id: userId,
        name,
      },
    });
  }
}
