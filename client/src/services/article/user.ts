import { Article } from '../../interface/article.interface';
import { request } from './../axios.config';
import { ListResponse } from '../../interface/response/list.response';
import { CreateArticle, UpdateArticle, GetArticle } from '.';

export default class User {
  static createArticle(data: CreateArticle): Promise<Article> {
    return request.post('/article/user/create-article', data);
  }

  static updateArticle(data: UpdateArticle): Promise<Article> {
    return request.post('/article/user/update-article', data);
  }

  static deleteArticle(articleId: number) {
    return request.get('/article/user/delete', {
      params: {
        article_id: articleId,
      },
    });
  }

  static getArticle(data: GetArticle): Promise<Article> {
    return request.get('/article/user/detail', {
      params: data,
    });
  }

  static getList(
    page: number,
    size: number,
    categoryId?: number,
    tagId?: number,
    order?: string,
  ): Promise<ListResponse<User>> {
    return request.get('/article/user/list', {
      params: {
        page,
        size,
        category_id: categoryId,
        tag_id: tagId,
        order,
      },
    });
  }

  static search(
    title: string,
    page: number,
    size: number,
  ): Promise<ListResponse<User>> {
    return request.get('/article/user/search', {
      params: {
        page,
        size,
        title,
      },
    });
  }
}
