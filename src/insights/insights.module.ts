import { Module } from '@nestjs/common';
import { InsService } from './services/ins.service';
import { InsController } from './controller/ins.controller';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://graph.facebook.com/v18.0',
    }),
  ],
  providers: [InsService],
  controllers: [InsController],
})
export class InsightsModule {}
