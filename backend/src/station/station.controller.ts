import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { StationService } from './station.service';

@Controller('station')
export class StationController {

    constructor(private readonly stationService: StationService) {}
    
    @Get('departure')
    async   departure():Promise <any> {
        /* there has to be a call to a database, but we're not there yet :))))  */
        return ['Paris', 'Berlin', 'Rome'];
    }

    @Get('arrival')
    async   arrival():Promise <any> {
        /* there has to be a call to a database, but we're not there yet :))))  */
        return [ "Berlin", "Frankfurt", "Wolfsburg"];
    } 
}
