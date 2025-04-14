import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { RmqProcessService } from './rmq-process.service';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

import { NotificationService } from './notification.service';
import { ProcessMessageService } from './process-message.service';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), RabbitmqModule],
  providers: [RmqProcessService, ProcessMessageService, NotificationService],
})
export class RmqProcessModule {}
