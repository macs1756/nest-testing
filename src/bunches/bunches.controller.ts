import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BunchesService } from './bunches.service';
import { CreateBunchDto } from './dto/create-bunch.dto';
import { UpdateBunchDto } from './dto/update-bunch.dto';

@Controller('bunches')
export class BunchesController {
  constructor(private readonly bunchesService: BunchesService) {}

  @Post()
  create(@Body() createBunchDto: CreateBunchDto) {
    return this.bunchesService.create(createBunchDto);
  }

  @Get()
  findAll() {
    return this.bunchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bunchesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBunchDto: UpdateBunchDto) {
    return this.bunchesService.update(+id, updateBunchDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bunchesService.remove(+id);
  }
}
