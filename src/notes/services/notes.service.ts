import { Injectable } from '@nestjs/common';
import { NotesRepositoryService } from './notes.repository.service';
import { CreateNoteDto } from '../dto/create-note.dto';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class NotesService {
  constructor(
    private readonly notesRepository: NotesRepositoryService,
    private eventEmitter: EventEmitter2,
  ) {}

  public getNoteById(noteId: string) {
    return this.notesRepository.getById(noteId);
  }

  public createNote(createNoteDto: CreateNoteDto) {
    this.eventEmitter.emit('NOTE_CREATED', {
      noteTitle: createNoteDto.title,
    });

    return createNoteDto;
  }

  @OnEvent('NOTE_CREATED')
  private handleNoteCreatedEvent(payload: { noteTitle: string }) {
    console.log('LOG: note creation', payload);
  }
}
