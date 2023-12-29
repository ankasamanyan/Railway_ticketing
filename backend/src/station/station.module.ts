import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationController } from './station.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [StationService, PrismaService],
  controllers: [StationController],
})
export class StationModule {}
