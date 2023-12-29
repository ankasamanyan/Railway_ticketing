import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: "*",
    credentials: true
  });  
  await app.listen(3000);
  // await app.listen(3000, '0.0.0.0', () => {
  //   console.log('NestJS application is listening on port 5500');
  // });
}
bootstrap();
