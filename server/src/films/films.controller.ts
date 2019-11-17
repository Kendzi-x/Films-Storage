import { Controller, Get, Param, Post } from '@nestjs/common';
import { FilmsService } from './films.service';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get('*films')
  findSmth() {
    return 'This route uses a wildcard';
  }

  @Post()
  create(): string {
    return 'This action adds nothing';
  }

  @Get(':id')
  findOne(@Param('id', new ParseIntPipe()) filmId) {
    console.log('findOne', filmId);
    return this.filmsService.getFilm(filmId);
  }

  @Get()
  findAll() {
    return this.filmsService.getFilms();
  }
}
