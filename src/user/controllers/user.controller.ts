import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { UserService } from '../services/user.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/me')
  @ApiResponse({ status: 200, description: 'Get user profile' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  getMe(): Promise<AxiosResponse> {
    return this.userService.getMe();
  }

  @Get('/:userId')
  @ApiResponse({ status: 200, description: 'Get user by id' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  getUserById(@Param('userId') userId: string): Promise<AxiosResponse> {
    return this.userService.getUserById(userId);
  }

  @Get('/:userId/media')
  @ApiResponse({ status: 200, description: 'Get media by user id' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @ApiResponse({ status: 404, description: 'Not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  getMediaByUserId(@Param('userId') userId: string): Promise<AxiosResponse> {
    return this.userService.getMediaByUserId(userId);
  }
}
