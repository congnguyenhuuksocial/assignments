import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { MediaDto } from '../dtos/media.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ContentService } from '../services/content.service';

@Controller('content')
@ApiTags('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  @Post(':userId/media')
  @ApiResponse({
    status: 200,
    description:
      'A JSON-formatted object containing an IG Container ID which you can use to publish the container.\n' +
      '\n' +
      'Video uploads are asynchronous, so receiving a container ID does not guarantee that the upload was successful. To verify that a video has been uploaded, request the status_code field on the IG Container. If its value is FINISHED, the video was uploaded successfully.',
  })
  uploadMedia(@Param() userId: string, @Body() mediaDto: MediaDto) {
    return this.contentService.uploadMedia(userId, mediaDto);
  }

  @Post(':userId/media-publish')
  @ApiResponse({
    status: 200,
    description:
      'A JSON-formatted object containing the media_id of the published IG Media object.',
  })
  publishMedia(@Param() userId: string, @Query() creationId: string) {
    return this.contentService.publishMedia(userId, creationId);
  }
}
