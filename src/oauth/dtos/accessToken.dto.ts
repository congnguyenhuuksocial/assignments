import { IsNotEmpty, IsNumberString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AccessTokenDto {
  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({
    example: '990602627938098',
    description:
      'Your Instagram App ID displayed in App Dashboard > Products > Instagram > Basic Display.',
  })
  client_id: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'a1b2C3D4',
    description:
      'Your Instagram App Secret displayed in App Dashboard > Products > Instagram > Basic Display.',
    required: true,
    type: String,
  })
  client_secret: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'AQBx-hBsH3...',
    description:
      'The Authorization Code you want to exchange for an Instagram User Access Token.',
    required: true,
    type: String,
  })
  code: string;

  @IsNotEmpty()
  @ApiProperty({
    example: 'authorization_code',
    description: 'Set this value to authorization_code.',
  })
  grant_type: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    example: 'https://socialsizzle. heroku.com/auth/instagram/callback',
    description:
      'The redirect URI you used when constructing the Authorization Window URL. This must be the same URI or we will reject the request.',
  })
  redirect_uri: string;
}
