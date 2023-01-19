import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './env-variables';

export type AppConfigService = ConfigService<EnvVariables>;
