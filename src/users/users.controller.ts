import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get('/:userId')
  public getUserById(@Param('userId') id: number) {
    return {
      id,
      name: 'John',
      lastname: 'Doe',
    };
  }
}
