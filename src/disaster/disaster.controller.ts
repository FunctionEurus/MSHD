import { Controller, Get, Param, Query } from '@nestjs/common';
import { DisasterService } from './disaster.service';

@Controller('disaster')
export class DisasterController {
    constructor(private readonly disasterService: DisasterService){}
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.disasterService.findOne(id);
    }

    @Get()
    findAll(@Query() paginationQuery) {
        const { limit, offset } = paginationQuery ;
        return this.disasterService.findAll();
        // http://localhost:3000/disaster?limit=5&offset=1
    }
}
