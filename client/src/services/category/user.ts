import { request } from './../axios.config';
import { CategoryResponse } from '.';
interface UpdateCategory {
  category_id: number;
  name?: string;
  picture?: string;
  desc?: string;
}
export default class User {
  static getList(page: number, size: number): Promise<CategoryResponse> {
    return request.get('/category/user/list', {
      params: {
        page,
        size,
      },
    });
  }

  static createCategory(name: string, picture: string, desc: string) {
    return request.post('/category/user/create-category', {
      name,
      picture,
      desc,
    });
  }

  static deleteCategory(categoryId: number) {
    return request.get('/category/user/delete-category', {
      params: {
        category_id: categoryId,
      },
    });
  }

  static updateCategory(data: UpdateCategory) {
    return request.post('/category/user/update-category', data);
  }
}
