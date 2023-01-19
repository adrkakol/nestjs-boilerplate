import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from '../env-variables/env-variables';

export class TypeormConfigService {
  public static getConfig(
    configService: ConfigService<EnvVariables>,
  ): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: configService.get('dbHost'),
      port: configService.get('dbPort'),
      username: configService.get('dbUser'),
      password: configService.get('dbPassword'),
      database: configService.get('dbName'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: [__dirname + '../../src/migrations/**/*{.ts,.js}'],
      migrationsRun: true,
      migrationsTransactionMode: 'each',
    };
  }
}
