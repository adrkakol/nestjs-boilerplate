import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesService } from './services/notes.service';
import { NotesRepositoryService } from './services/notes.repository.service';
import { NotesController } from './controllers/notes.controller';
import { NoteEntity } from './entities/note.entity';

@Module({
  // which other modules we need (that exports providers)
  imports: [TypeOrmModule.forFeature([NoteEntity])],
  // what kind of dependencies does controller / service have:
  providers: [NotesService, NotesRepositoryService],
  controllers: [NotesController],
})
export class NotesModule {}
