import { Controller, Get, Param, Req } from '@nestjs/common';
import { TrainService } from './train.service';

@Controller('train')
export class TrainController {

    constructor(private readonly trainService: TrainService){}

    @Get('searchTicket')
    async   searchTicket():Promise <any> {
        return await this.trainService.searchTicket();
    }
}
