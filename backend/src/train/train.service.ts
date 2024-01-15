import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TrainService {
    constructor (private prisma: PrismaService) {}

    async searchTicket(departure: string, arrival: string) {
        return await this.prisma.train.findMany({
          where: {
            departureCity: departure,
            arrivalCity: arrival,
          },
        });
      }

}
