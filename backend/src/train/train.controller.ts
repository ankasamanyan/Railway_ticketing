import { Controller, Get, Param } from '@nestjs/common';
import { TrainService } from './train.service';

@Controller('train')
export class TrainController {

    constructor(private readonly trainService: TrainService){}

    @Get('searchTicket')
    async   searchTicket(
        @Param('departure') departure: any,
        @Param('arrival') arrival: any,
    ):Promise <any> {
        return await this.trainService.searchTicket( departure, arrival);
    }
}
