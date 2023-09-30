import { Controller, Param, Get, ParseIntPipe, Post } from "@nestjs/common";
import { AxiosResponse } from 'axios';
import { MediaService } from '../services/media.service';
import { ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('media')
@ApiTags('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Get('/:mediaId')
  @ApiResponse({ status: 200, description: 'Get media by id' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Media not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  getMediaById(
    @Param('mediaId', ParseIntPipe) mediaId: number,
  ): Promise<AxiosResponse> {
    return this.mediaService.getMediaById(mediaId);
  }

  @Get('/:mediaId/children')
  @ApiResponse({ status: 200, description: 'Get children of media by id' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 404, description: 'Media not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @ApiResponse({ status: 503, description: 'Service unavailable' })
  @ApiResponse({ status: 504, description: 'Gateway timeout' })
  getChildrenOfMediaById(
    @Param('mediaId', ParseIntPipe) mediaId: number,
  ): Promise<AxiosResponse> {
    return this.mediaService.getChildrenOfMediaById(mediaId);
  }
}
