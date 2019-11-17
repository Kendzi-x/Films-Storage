// import { IsInt, IsString } from 'class-validator';

export class CreateFilmDto {
  readonly author: string;
  readonly description: string;
  readonly id: number;
  readonly title: string;
}
