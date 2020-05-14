import { Module, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './module/user/user.module';
import { TagModule } from './module/tag/tag.module';
import { ArticleModule } from './module/article/article.module';
import { CategoryModule } from './module/category/category.module';
import { UploadModule } from './module/upload/upload.module';
import { CommentModule } from './module/comment/comment.module';
import { CommonModule } from './module/common/common.module';
import { UserAuthorizeMiddleware } from './module/common/middlewares/user.authorize.middleware';
import { AlbumModule } from './module/album/album.module';
import { NoticeModule } from './module/notice/notice.module';
import { MapModule } from './module/map/map.module';
import { ToolsModule } from './module/tools/index.module';

const file = process.cwd() + '/config/ormconfig.json';
const ormConfig = require(file);

@Module({
	imports: [
		TypeOrmModule.forRoot(ormConfig as any),
		CommonModule,
		UserModule,
		TagModule,
		ArticleModule,
		CategoryModule,
		UploadModule,
		AlbumModule,
		NoticeModule,
		MapModule,
		CommentModule,
		ToolsModule
	]
})
export class AppModule {
	configure(consumer: MiddlewareConsumer) {
		consumer.apply(UserAuthorizeMiddleware).forRoutes('');
	}
}
