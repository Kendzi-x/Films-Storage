import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [FilmsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
