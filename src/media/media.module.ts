import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MediaController } from './controllers/media.controller';
import { MediaService } from './services/media.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://graph.instagram.com/',
    }),
  ],
  controllers: [MediaController],
  providers: [MediaService],
})
export class MediaModule {}
