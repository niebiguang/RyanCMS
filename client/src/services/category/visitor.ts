import { request } from './../axios.config';
import { CategoryResponse } from '.';

export default class Visitor {
  static getList(
    page: number,
    size: number,
    userId: number,
  ): Promise<CategoryResponse> {
    return request.get('/category/visitor/list', {
      params: {
        page,
        size,
        user_id: userId,
      },
    });
  }
}
