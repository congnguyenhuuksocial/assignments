import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class InsService {
  private readonly logger = new Logger(InsService.name);
  constructor(private readonly httpService: HttpService) {}

  async getInsights(userId: string): Promise<any> {
    const response = await lastValueFrom(
      this.httpService.get(
        `${userId}/insights?period=day&metric=likes,comments,reach,impressions`,
      ),
    );
    return response.data;
  }
}
