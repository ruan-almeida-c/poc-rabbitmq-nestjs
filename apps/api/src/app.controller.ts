import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SendMessageDto } from './dto/send-message.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('send-to-queue')
  async queue(@Body() body: SendMessageDto) {
    return this.appService.queue(body);
  }

  @Post('send-to-exchange')
  async exchange(@Body() body: SendMessageDto) {
    return this.appService.exchange(body);
  }
}
