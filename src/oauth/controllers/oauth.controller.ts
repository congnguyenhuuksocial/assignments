import {
  Controller,
  Get,
  Query,
  ValidationPipe,
  Post,
  UsePipes,
  Body,
  Logger,
} from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { OAuthService } from '../services/oauth.service';
import { AuthorizeDto } from '../dtos/authorize.dto';
import { AccessTokenDto } from '../dtos/accessToken.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('oauth')
@ApiTags('oauth')
export class OAuthController {
  private readonly logger = new Logger(OAuthController.name);
  constructor(private oauthService: OAuthService) {}

  @Get('/authorize')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  authorize(
    @Query(ValidationPipe) authorizeDto: AuthorizeDto,
  ): Promise<AxiosResponse> {
    return this.oauthService.authorize(authorizeDto);
  }

  @Post('/access_token')
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  @UsePipes(ValidationPipe)
  accessToken(@Body() accessTokenDto: AccessTokenDto): Promise<AxiosResponse> {
    return this.oauthService.accessToken(accessTokenDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  saveCode(@Query() code: string): string {
    this.logger.log(code);
    return code;
  }
}
