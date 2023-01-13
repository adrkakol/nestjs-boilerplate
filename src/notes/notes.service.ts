import { Injectable } from '@nestjs/common';
import {NotesRepositoryService} from "./notes.repository.service";

@Injectable()
export class NotesService {
    constructor(private readonly notesRepository: NotesRepositoryService) {
    }

    public getNoteById(noteId: string) {
        return this.notesRepository.getNote(noteId);
    }
}
