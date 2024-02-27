import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ทำให้ field ที่ไม่ต้องการไม่ต้อง match กัน // that it's stripping out the elements that are not defined into our DTO.
    }),
  ); // validation pipe is a built in pipe by nestjs for that same purpose
  await app.listen(3000);
}
bootstrap();
