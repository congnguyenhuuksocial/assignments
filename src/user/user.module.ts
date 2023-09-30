import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { UserController } from './controllers/user.controller';
import { UserService } from './services/user.service';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
      baseURL: 'https://graph.instagram.com/',
    }),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
