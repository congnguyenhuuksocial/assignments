import { Controller, Get, Param } from '@nestjs/common';
import { InsService } from '../services/ins.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('insights')
@ApiTags('insights')
export class InsController {
  constructor(private readonly insService: InsService) {}

  @Get('/:userId')
  @ApiResponse({ status: 200, description: 'Get insights by user id' })
  async getInsights(@Param() userId: string): Promise<any> {
    return this.insService.getInsights(userId);
  }
}
