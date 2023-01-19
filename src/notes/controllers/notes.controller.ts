import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { NotesService } from '../services/notes.service';
import { AuthGuard } from '../../authorization/authorization.guard';
import { CreateNoteDto } from '../dto/create-note.dto';

@Controller('notes') // in express: new Router('/notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @UseGuards(AuthGuard)
  @Post() // in express: router.post('/')
  public createNote(@Body() createNoteDto: CreateNoteDto) {
    return this.notesService.createNote(createNoteDto);
  }

  @Get('/:noteId') // in express: router.get('/:noteId')
  public getNoteById(@Param('noteId') noteId: string) {
    return this.notesService.getNoteById(noteId);
  }
}
