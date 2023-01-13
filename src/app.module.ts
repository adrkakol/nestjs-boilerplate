import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [ConfigModule.forRoot(), NotesModule],
  providers: [AppService],
})

export class AppModule {}
