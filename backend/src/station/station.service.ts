import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StationService {
    constructor (private prisma: PrismaService)
    {}

    async test () {
        this.prisma.train.findUnique({
            where: { id: 12 },
        })
    }
}
