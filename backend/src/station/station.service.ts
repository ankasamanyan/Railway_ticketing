import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StationService {
    constructor (private prisma: PrismaService) {}

    async getDepartureData () {
        // console.log("*******************************\nNOT HEHE")
        return await this.prisma.station.findMany({
            where: {
                departures: {
                    some: {},
                },
            },
        })
    }
    
    async getArrivalData () {
        // console.log("*******************************\nNOT HEHE")
        return await this.prisma.station.findMany({
            where: {
                arrivals: {
                    some: {},
                },
            },
        })
    }

    // async getPossibleConnections(departure:any, arrival:any)
    // {
    //     return await this.prisma.train.findMany({
    //         where: {
    //             departure: departure,
    //             arrival: arrival,
    //         }
    //     })
    // }
}
