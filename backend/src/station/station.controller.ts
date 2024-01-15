import { Controller, Get } from '@nestjs/common';
import { StationService } from './station.service';

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
