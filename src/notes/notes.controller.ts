import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {NotesService} from "./notes.service";

interface NoteI {
    title: string;
    message: string;
    userId: string;
}

@Controller('notes')
export class NotesController {
    constructor (private readonly notesService: NotesService) {}

    @Post()
    public createNote(
        @Body() body: NoteI
    ) {

    }

    @Get('/:noteId')
    public getNoteById(
        @Param('noteId') noteId: string,
    ) {
        return this.notesService.getNoteById(noteId);
    }
}