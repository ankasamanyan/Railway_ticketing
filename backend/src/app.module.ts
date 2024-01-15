import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StationModule } from './station/station.module';
import { TrainService } from './train/train.service';
import { TrainController } from './train/train.controller';
import { TrainModule } from './train/train.module';

@Module({
  imports: [PrismaModule, StationModule, TrainModule],
  controllers: [AppController, TrainController],
  providers: [AppService, TrainService],
})
export class AppModule {}
