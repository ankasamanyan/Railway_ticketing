import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class TrainService {
    constructor (private prisma: PrismaService) {}

    async searchTicket() {
        return await this.prisma.train.findMany({});
      }

}
