import { Get, Controller } from '@nestjs/common';

const beginTime = new Date().toString();
@Controller('')
export class AppController {

  @Get()
  root() {
    return beginTime;
  }
}
