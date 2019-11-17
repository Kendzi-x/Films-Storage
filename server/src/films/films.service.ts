import { Injectable } from '@nestjs/common';
import { FILMS } from '../shared/mock/films.mock';
import { FilmI } from './interfaces/films.interface';

@Injectable()
export class FilmsService {
  private _films = FILMS;

  get films(): FilmI[] {
    return this._films;
  }

  getFilms(): FilmI[] {
    return this.films;
  }

  getFilm(filmID: number): FilmI | null  {
    console.log(typeof filmID);
    console.log(typeof this.films[0].id);
    return this.films.find(film => film.id === filmID);
  }

  addFilm(film: FilmI): FilmI[] {
    this.films.push(film);
    return this.films;
  }

  deleteFilm(filmID: number): FilmI[] | null {
    const filmIndex = this.films.findIndex(f => f.id === filmID);
    if (~filmIndex) {
      return null;
    }
    return this.films.splice(filmIndex, 1);
  }
}
