import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesRepositoryService {
  public getById(id: string) {
    return {
      id,
      title: 'Note from repository',
      message: 'Some message',
    };
  }
}
