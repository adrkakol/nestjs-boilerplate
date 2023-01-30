import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  public getUserById(id: string): { id: string } {
    return { id };
  }
}
