import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const port = parseInt(process.env.APP_PORT, 10);
  const app = await NestFactory.create(AppModule);

  // here "class-validator" and "class-transformer" are being initialised
  app.useGlobalPipes(new ValidationPipe());

  console.log('App listens on port ', port, '🫖');
  await app.listen(port);
}
bootstrap();
