import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { DisasterService } from './disaster.service';
import { CreateDisasterDto } from './dto/create-disaster.dto/create-disaster.dto';
import { Code } from 'typeorm';

@Controller('disaster')
export class DisasterController {
    constructor(private readonly disasterService: DisasterService){}
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.disasterService.findOne(id);
    }

    @Get()
    findAll(@Query() paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery ;
        return this.disasterService.findAll(paginationQuery);
        // http://localhost:3000/disaster?limit=5&offset=1
    }

    @Post()
    create(@Body() body) {
        return this.disasterService.create(body.code);
    }
}
