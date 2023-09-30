import { IsNotEmpty, IsNumberString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthorizeDto {
  @IsNotEmpty()
  @IsNumberString()
  @ApiProperty({
    type: String,
    description:
      'Your Instagram App ID displayed in App Dashboard > Products > Instagram > Basic Display.\n',
    example: '990602627938098',
    required: true,
  })
  client_id: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description:
      'A URI where we will redirect users after they authenticate. Make sure this exactly matches one of the base URIs in your list of valid oAuth URIs. Keep in mind that the App Dashboard may have added a trailing slash to your URIs, so we recommend that you verify by checking the list.',
    example: 'https://socialsizzle.herokuapp.com/auth/instagram/callback',
  })
  redirect_uri: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Set this value to code.',
    example: 'code',
  })
  response_type: string;

  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description:
      'A comma-separated list, or URL-encoded space-separated list, of permissions to request from the app user. user_profile is required.',
    example: 'user_profile,user_media',
  })
  scope: string;

  @ApiProperty({
    type: String,
    description:
      'An optional value indicating a server-specific state. For example, you can use this to protect against CSRF issues. We will include this parameter and value when redirecting the user back to you.',
    example: '1',
  })
  state: string;
}
