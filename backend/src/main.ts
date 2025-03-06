import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Permite que o NestJS processe JSON no corpo das requisições
  app.useGlobalPipes(new ValidationPipe());
  
  await app.listen(3010);
}
bootstrap();
