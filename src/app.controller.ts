import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class AppController {
  @Get('hello')
  getHello(): string {
    return 'Hello from Nest.js backend running in another container!';
  }
}