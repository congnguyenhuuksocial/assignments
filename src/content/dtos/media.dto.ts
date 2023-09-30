import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class MediaDto {
  @ApiProperty({
    type: 'string',
    description:
      'For images only and required for images. The path to the image. We will cURL the image using the URL that you specify so the image must be on a public server.',
  })
  imageUrl?: string;
  @ApiProperty({
    type: 'string',
    description: "Required. App user's User access token.",
  })
  @IsNotEmpty()
  accessToken: string;
  @ApiProperty({
    type: 'string',
    description:
      'For Reels only. Name of the audio of your Reels media. You can only rename once, either while creating a reel or after from the audio page.',
  })
  audio_name?: string;
  @ApiProperty({
    type: 'boolean',
    description:
      'Applies only to images and video. Set to true. Indicates image or video appears in a carousel.',
  })
  isCarousel?: boolean;
  @ApiProperty({
    type: 'string',
    description:
      'A caption for the image, video, or carousel. Can include hashtags (example: #crazywildebeest) and usernames of Instagram users (example: @natgeo). @Mentioned Instagram users receive a notification when the container is published. Maximum 2200 characters, 30 hashtags, and 20 @ tags.\n' +
      '\n' +
      '\n' +
      'Not supported on images or videos in carousels.',
  })
  caption?: string;
  @ApiProperty({
    type: 'string',
    description:
      'Required for carousels. Applies only to carousels. An array of up to 10 container IDs of each image and video that should appear in the published carousel. Carousels can have up to 10 total images, vidoes, or a mix of the two.',
  })
  children?: string[];
  @ApiProperty({
    type: 'string',
    description:
      'For Reels only. The path to an image to use as the cover image for the Reels tab. We will cURL the image using the URL that you specify so the image must be on a public server. If you specify both cover_url and thumb_offset, we use cover_url and ignore thumb_offset. The image must conform to the specifications for a Reels cover photo.',
  })
  coverUrl?: string;
  @ApiProperty({
    type: 'string',
    description:
      'The ID of a Page associated with a location that you want to tag the image or video with.\n' +
      '\n' +
      '\n' +
      'Use the Pages Search API to search for Pages whose names match a search string, then parse the results to identify any Pages that have been created for a physical location. Include the location field in your query and verify that the Page you want to use has location data. Attempting to create a container using a Page that has no location data will fail with coded exception INSTAGRAM_PLATFORM_API__INVALID_LOCATION_ID.\n' +
      '\n' +
      '\n' +
      'Not supported on images or videos in carousels.',
  })
  locationId?: string;
  @ApiProperty({
    type: 'string',
    description:
      'Required for product tagging. Applies only to images and videos. An array of objects specifying which product tags to tag the image or video with (maximum of 5; tags and product IDs must be unique). Each object should have the following information:\n' +
      '\n' +
      '\n' +
      'product_id — Required. Product ID.\n' +
      'x — Images only. An optional float that indicates percentage distance from left edge of the published media image. Value must be within 0.0–1.0 range.\n' +
      'y — Images only. An optional float that indicates percentage distance from top edge of the published media image. Value must be within 0.0–1.0 range.\n' +
      'For example:\n' +
      '\n' +
      '\n' +
      "[{product_id:'3231775643511089',x: 0.5,y: 0.8}]",
  })
  productTags?: string[];
  @ApiProperty({
    type: 'string',
    description:
      'Required for videos, carousels, stories, and reels. Applies only to videos, carousels, stories, and reels. Set to VIDEO for videos, CAROUSEL for carousels, STORIES for stories, or REELS for reels. Indicates container is for a video, carousel, story or reel.',
  })
  mediaType?: string;
  @ApiProperty({
    type: 'number',
    description:
      'For videos and reels. Location, in milliseconds, of the video or reel frame to be used as the cover thumbnail image. The default value is 0, which is the first frame of the video or reel. For reels, if you specify both cover_url and thumb_offset, we use cover_url and ignore thumb_offset.',
  })
  thumbOffset?: number;
  @ApiProperty({
    type: 'string',
    description:
      'Required for videos and reels. Applies only to videos and reels. Path to the video. We cURL the video using the passed-in URL, so it must be on a public server.',
  })
  videoUrl?: string;
  @ApiProperty({
    type: 'boolean',
    description:
      'For Reels only. When true, indicates that the reel can appear in both the Feed and Reels tabs. When false, indicates the reel can only appear in the Reels tab.',
  })
  shareToFeed?: boolean;
  @ApiProperty({
    type: 'string',
    description:
      'Required for user tagging. Applies to images and videos. An array of public usernames and x/y coordinates for any public Instagram users who you want to tag in the image. Each object should have the following information:\n' +
      '\n' +
      'usernames — Required. Public usernames.\n' +
      'x — Images only. An optional float that indicates percentage distance from left edge of the published media image. Value must be within 0.0–1.0 range.\n' +
      'y — Images only. An optional float that indicates percentage distance from top edge of the published media image. Value must be within 0.0–1.0 range.',
  })
  userTags?: any;
}
