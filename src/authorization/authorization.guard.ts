import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { EnvVariables } from '../config/env-variables/env-variables';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService<EnvVariables>) {}
  // must return truthy if accessible / false otherwise
  canActivate(context: ExecutionContext): boolean | Promise<boolean> {
    // example that env variables works here
    const API_KEY = this.configService.get('apiKey');
    const request = context.switchToHttp().getRequest();
    const authToken = request.headers['authorization'];

    return authToken === API_KEY;
  }
}
