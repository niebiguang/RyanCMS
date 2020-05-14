import {
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { UserEntity } from '../../user/entities/user.entity';


@Injectable()
export class UserAuthorizeMiddleware implements NestMiddleware {

  use(req: Request, res: Response, next: Function) {
    const authorization = req.headers['authorization'];
    if (authorization) {
      const token = authorization.replace('Ryan ', '');
      try {
        req.headers['auth'] = UserEntity.verify(token);
      } catch (error) { }
    }
    next();
  }

}
