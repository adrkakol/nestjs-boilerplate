import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';

import { AppService } from './app.service';
import { NotesModule } from './notes/notes.module';
import { EnvVariablesValidation } from './config/env-variables/env-variables-validation';
import { TypeormConfigService } from './config/typeorm-config/typeorm-config.service';
import { EnvVariables } from './config/env-variables/env-variables';

@Module({
  imports: [
    // config with validation showcase
    ConfigModule.forRoot({
      isGlobal: true,
      validate: EnvVariablesValidation.getValidEnvs,
    }),
    EventEmitterModule.forRoot(),
    // notes domain module showcase
    NotesModule,
    // typeorm initialisation showcase
    TypeOrmModule.forRootAsync({
      // what is imported by "forRootAsync" module:
      imports: [ConfigModule],
      // what is injected from these imports:
      inject: [ConfigService],
      // what is the instance of config:
      useFactory: (configService: ConfigService<EnvVariables>) =>
        TypeormConfigService.getConfig(configService),
    }),
  ],
  providers: [AppService],
})
export class AppModule {}
