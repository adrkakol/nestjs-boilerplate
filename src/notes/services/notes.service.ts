import { Injectable } from '@nestjs/common';
import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';

import { CreateNoteDto } from '../dto/create-note.dto';
import { UsersService } from '../../users/users.service';

import { NotesRepositoryService } from './notes.repository.service';

@Injectable()
export class NotesService {
  constructor(
    private readonly notesRepository: NotesRepositoryService,
    private readonly usersService: UsersService,
    private eventEmitter: EventEmitter2,
  ) {}

  public getNoteById(noteId: string) {
    const user = this.usersService.getUserById('1231231');
    console.log(user);

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
