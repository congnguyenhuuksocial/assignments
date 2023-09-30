import { Injectable, HttpException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { HttpService } from '@nestjs/axios';
import { AccessTokenDto } from '../dtos/accessToken.dto';
import { RefreshAccessTokenDto } from '../dtos/refreshAccessToken.dto';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private httpService: HttpService) {}

  async accessToken(accessTokenDto: AccessTokenDto): Promise<AxiosResponse> {
    try {
      const response = await lastValueFrom(
        this.httpService.get('/access_token', {
          params: accessTokenDto,
        }),
      );
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }

  async refreshAccessToken(
    refreshAccessTokenDto: RefreshAccessTokenDto,
  ): Promise<AxiosResponse> {
    try {
      const response = await lastValueFrom(
        this.httpService.get('/refresh_access_token', {
          params: refreshAccessTokenDto,
        }),
      );
      return response.data;
    } catch (error) {
      const { status, statusText } = error.response;
      throw new HttpException(statusText, status);
    }
  }
}
