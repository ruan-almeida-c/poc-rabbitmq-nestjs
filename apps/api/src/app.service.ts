import { Injectable } from '@nestjs/common';
import { RabbitmqService } from './rabbitmq/rabbitmq.service';

@Injectable()
export class AppService {
  constructor(private readonly rabbitmqService: RabbitmqService) {}

  async queue(body) {
    await this.rabbitmqService.start();
    await this.rabbitmqService.publishInQueue(
      'process_queue',
      JSON.stringify({ message: body.message }),
    );
  }

  async exchange(body) {
    await this.rabbitmqService.start();
    await this.rabbitmqService.publishInExchange(
      'amq.direct',
      'mq-process',
      JSON.stringify({ message: body.message }),
    );
  }
}
