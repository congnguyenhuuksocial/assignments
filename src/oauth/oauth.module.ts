import { Module } from '@nestjs/common';
import { OAuthController } from './controllers/oauth.controller';
import { OAuthService } from './services/oauth.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://api.instagram.com/oauth',
    }),
  ],
  controllers: [OAuthController],
  providers: [OAuthService],
})
export class OAuthModule {}
