import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StationModule } from './station/station.module';

@Module({
  imports: [PrismaModule, StationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
