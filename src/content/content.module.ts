import { Module } from '@nestjs/common';
import { ContentController } from './controllers/content.controller';
import { ContentService } from './services/content.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://graph.facebook.com/v18.0',
    }),
  ],
  providers: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
