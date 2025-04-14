import { Injectable, OnModuleInit } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class ProcessMessageService implements OnModuleInit {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  async onModuleInit() {
    await this.rabbitmqService.start();
    await this.rabbitmqService.consume('process_queue', (message) => {
      console.log(message.content.toString());

      // save on database
    });
  }
}
