import { Article } from '../../interface/article.interface';
import { request } from './../axios.config';
import { ListResponse } from '../../interface/response/list.response';
import { GetArticle } from '.';

export default class Visitor {
  static getArticle(data: GetArticle): Promise<Article> {
    return request.get('/article/visitor/detail', {
      params: data,
    });
  }

  static getList(
    page: number,
    size: number,
    userId: number,
    categoryId?: number,
    tagId?: number,
    order?: string,
  ): Promise<ListResponse<Article>> {
    return request.get('/article/visitor/list', {
      params: {
        page,
        size,
        user_id: userId,
        tag_id: tagId,
        category_id: categoryId,
        order,
      },
    });
  }

  static search(
    title: string,
    page: number,
    size: number,
    userId: number,
  ): Promise<ListResponse<Article>> {
    return request.get('/article/visitor/search', {
      params: {
        page,
        size,
        title,
        user_id: userId,
      },
    });
  }
}
