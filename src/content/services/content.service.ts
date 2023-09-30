import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { MediaDto } from '../dtos/media.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ContentService {
  private readonly logger = new Logger(ContentService.name);

  constructor(private readonly httpService: HttpService) {}

  async uploadMedia(userId: string, mediaDto: MediaDto): Promise<string> {
    const uploadId = await lastValueFrom(
      this.httpService.post(`${userId}/media`, mediaDto),
    );
    const { status, data } = uploadId;
    if (status === HttpStatus.OK) {
      return data;
    }

    return '';
  }

  async publishMedia(userId: string, createdId: string): Promise<string> {
    const publishId = await lastValueFrom(
      this.httpService.post(
        `/${userId}/media-publish?creation_id=${createdId}`,
      ),
    );

    return publishId.data;
  }
}
