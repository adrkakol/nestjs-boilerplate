import { IsString, Length } from 'class-validator';

export class CreateNoteDto {
  @IsString()
  @Length(10, 100)
  title: string;

  @IsString()
  @Length(20, 500)
  message: string;
}
