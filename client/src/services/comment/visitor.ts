import { request } from './../axios.config';
import { CommentResponse } from '.';
import { Comment } from '../../interface/comment.interface';

export default class Visitor {
  static getComment(data: {
    blogger_id?: number;
    article_id?: number;
  }): Promise<Comment> {
    return request.get('/message/visitor/info', {
      params: data,
    });
  }

  static getList(
    page: number,
    size: number,
    commentId: number,
  ): Promise<CommentResponse> {
    return request.get('/message/visitor/list', {
      params: {
        page,
        size,
        comment_id: commentId,
      },
    });
  }
}
