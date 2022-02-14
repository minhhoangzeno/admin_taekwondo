import { Controller, Get, Param, Response } from '@nestjs/common';
import { join } from 'path';
import { of } from 'rxjs';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('send-mail')
  getHello() {
    return this.appService.sendEmail();
  }

  @Get('image/:imagename')
  getImage(@Param('imagename') imagename, @Response() res) {
    return of(res.sendFile(join(__dirname, '../../uploads/', imagename)))
  }

}
