import { Controller, Get, Param } from '@nestjs/common';
import { DisasterService } from './disaster.service';

@Controller('disaster')
export class DisasterController {
    constructor(private readonly disasterService: DisasterService){}
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.disasterService.findOne(id);
    }

    @Get()
    findAll() {
        return '返回所有记录';
    }
}
