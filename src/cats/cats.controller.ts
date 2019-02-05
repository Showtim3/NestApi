import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ParseIntPipeCreated } from './parse-int.pipe';

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
  async findOne(@Param('id', new ParseIntPipeCreated()) id) {
    return this.catService.findOne(id);
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
