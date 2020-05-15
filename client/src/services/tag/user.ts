import { request } from './../axios.config';
import { TagResponse } from '.';

interface UpdateTag {
  tag_id: number;
  name?: string;
  picture?: string;
  desc?: string;
}

export default class User {
  static createTag(name: string, picture: string, desc: string) {
    return request.post('/tag/user/create-tag', {
      name,
      picture,
      desc,
    });
  }

  static updateTag(data: UpdateTag) {
    return request.post('/tag/user/update-tag', data);
  }

  static deleteTag(tagId: number) {
    return request.get('/tag/user/delete-tag', {
      params: {
        tag_id: tagId,
      },
    });
  }

  static getList(page: number, size: number): Promise<TagResponse> {
    return request.get('/tag/user/list', {
      params: {
        page,
        size,
      },
    });
  }
}
