import { Injectable, HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { AuthorizeDto } from '../dtos/authorize.dto';
import { AccessTokenDto } from '../dtos/accessToken.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class OAuthService {
  constructor(private httpService: HttpService) {}

  async authorize(authorizeDto: AuthorizeDto): Promise<AxiosResponse> {
    try {
      const response = await lastValueFrom(
        this.httpService.get('/authorize', {
          params: authorizeDto,
        }),
      );
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async accessToken(accessTokenDto: AccessTokenDto): Promise<AxiosResponse> {
    try {
      const response = await lastValueFrom(
        this.httpService.post('/access_token', {
          data: accessTokenDto,
        }),
      );
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }
}
