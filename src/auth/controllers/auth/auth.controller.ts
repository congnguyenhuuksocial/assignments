import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { AuthService } from '../../services/auth.service';
import { AccessTokenDto } from '../../dtos/accessToken.dto';
import { RefreshAccessTokenDto } from '../../dtos/refreshAccessToken.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/access_token')
  @ApiResponse({ status: 200, description: 'Get access token' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Media not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  accessToken(
    @Query(ValidationPipe) accessTokenDto: AccessTokenDto,
  ): Promise<AxiosResponse> {
    return this.authService.accessToken(accessTokenDto);
  }

  @Get('/refresh_access_token')
  @ApiResponse({ status: 200, description: 'Get refresh access token' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Media not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  refreshAccessToken(
    @Query(ValidationPipe) refreshAccessTokenDto: RefreshAccessTokenDto,
  ): Promise<AxiosResponse> {
    return this.authService.refreshAccessToken(refreshAccessTokenDto);
  }

}
