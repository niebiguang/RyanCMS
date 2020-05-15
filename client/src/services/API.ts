import { UserService } from './user';
import { TagService } from './tag';
import { CategoryService } from './category';
import { ArticleService } from './article';
import { CommentService } from './comment';
import { UploadService } from './upload';
import { ToolsService } from './tools';

export const API = {
  user: UserService,
  tag: TagService,
  category: CategoryService,
  article: ArticleService,
  comment: CommentService,
  upload: UploadService,
  tools: ToolsService,
};
