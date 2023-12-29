import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { StationService } from './station.service';

@Controller('station')
export class StationController {

    constructor(private readonly stationService: StationService) {
        
    }


    @Get('departure')
    async   departure():Promise <String> {
        // return ['Paris', 'Berlin', 'Rome'];
        return "helloworld";
    }

    @Get('arrival')
    async   arrival():Promise <any> {
        return [
        {id: 1, value:'Bremen'},
        {id: 2, value: 'Frankfurt'},
        {id: 3, value: 'Hamburg'}
    ];
    } 
}
