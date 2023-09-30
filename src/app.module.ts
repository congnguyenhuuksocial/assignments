import { Module } from '@nestjs/common';
import { MediaModule } from './media/media.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OAuthModule } from './oauth/oauth.module';
import { ContentModule } from './content/content.module';
import { InsightsModule } from './insights/insights.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  controllers: [],
  providers: [],
  imports: [
    MediaModule,
    AuthModule,
    OAuthModule,
    UserModule,
    ContentModule,
    InsightsModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 100,
      },
    ]),
  ],
})
export class AppModule {}
