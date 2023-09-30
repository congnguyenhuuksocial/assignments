import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RefreshAccessTokenDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'grant_type', description: 'Grant type' })
  grant_type: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'access_token', description: 'Access token' })
  access_token: string;
}
