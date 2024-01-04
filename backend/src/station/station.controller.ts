import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { StationService } from './station.service';
import { log } from 'console';

@Controller('station')
export class StationController {

    constructor(private readonly stationService: StationService) {}
    
    @Get('departure')
    async   departure():Promise <any> {
        return await this.stationService.getDepartureData(); 
    }

    @Get('arrival')
    async   arrival():Promise <any> {
        return await this.stationService.getArrivalData();
    } 
}
