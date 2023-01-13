import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {TypeOrmModule} from "@nestjs/typeorm";

import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import {TypeormConfigService} from "./config/typeorm-config.service";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    NotesModule,
    TypeOrmModule.forRoot(TypeormConfigService.getConfig())
  ],
  providers: [AppService],
})

export class AppModule {}
