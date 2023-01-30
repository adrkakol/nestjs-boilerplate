import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class EnvVariables {
  constructor(envs: Record<string, any>) {
    this.apiKey = envs.API_KEY;
    this.appPort = parseInt(envs.APP_PORT || '');
    this.dbHost = envs.DB_HOST;
    this.dbPort = parseInt(envs.DB_PORT || '');
    this.dbUser = envs.DB_USER;
    this.dbPassword = envs.DB_PASSWORD;
    this.dbName = envs.DB_NAME;
    this.foo = { foo: 'ad' };
  }

  @IsString()
  @IsNotEmpty()
  apiKey: string;

  @IsInt()
  appPort: number;

  @IsString()
  @IsNotEmpty()
  dbHost: string;

  @IsInt()
  dbPort: number;

  @IsString()
  @IsNotEmpty()
  dbUser: string;

  @IsString()
  @IsNotEmpty()
  dbPassword: string;

  @IsString()
  @IsNotEmpty()
  dbName: string;

  @IsString()
  public foo: {
    foo: string;
  };
}
