import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Instagram Integration API')
    .setDescription(
      "Develop a service that integrates with Instagram's Graph API to:\n" +
        '● Post media (image or video)\n' +
        '● Retrieve engagement statistics for the uploaded content.',
    )
    .setVersion('1.0')
    .addTag('Instagram Integration API')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
