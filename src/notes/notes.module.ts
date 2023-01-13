import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import {NotesRepositoryService} from "./notes.repository.service";

@Module({
  providers: [NotesService, NotesRepositoryService],
  controllers: [NotesController]
})
export class NotesModule {}
