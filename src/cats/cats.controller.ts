import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('/cats')
export class  CatsController {

  constructor(private readonly catService: CatsService) {}

   @Get()
  async findAll(): Promise<string[]> {
    return this.catService.findAll();
  }

  @Post()
  add(@Body() body) {
  this.catService.add(body.name);
  }

   @Get(':id')
  async findOne(@Param() params) {
    return this.catService.findOne(params.id);
  }

  @Put(':id')
  update(@Param() params, @Body() body) {
    this.catService.update(params.id, body.name);
  }

  @Delete(':id')
  remove(@Param() params){
    this.catService.remove(params.id);
  }
}
