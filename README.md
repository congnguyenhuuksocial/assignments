# Technical stack
- NodeJs v18
- NestJs v10
- Axios client
- Instagram graph API

# API documentation
- Swagger: http://localhost:3000/api

# Project structure
- src
  - auth
    - controllers
    - services
    - dtos
    - auth.module.ts
  - content: Media Upload Endpoint - Provide an API endpoint where users can upload an image or
    video. This media should then be posted to the user's Instagram account.
    - controllers
    - dtos
    - services
    - content.module.ts
  - insights: Data Retrieval Endpoint - After uploading, provide an endpoint to fetch the engagement
    stats (likes, comments, reach, impressions) for that specific post after a certain duration
    (e.g., 24 hours).
    - controllers
    - dtos
    - services
    - insights.module.ts
  - media: get media
    - controllers
    - dtos
    - services
    - media.module.ts
  - oauth: Implement Instagram's OAuth 2.0 user authentication to allow
    your service to act on behalf of a user.
    - controllers
    - dtos
    - services
    - oauth.module.ts
  - user
    - controllers
    - dtos
    - services
    - user.module.ts
  - media
    - controllers
    - dtos
    - services
    - media.module.ts
  - main.ts
  - app.module.ts
  - app.e2e-spec.ts
  - jest.config.js
  - tsconfig.build.json
  - tsconfig.json
  - tsconfig.spec.json
  - package.json
  - README.md

# How to run
- Install dependencies
```bash
npm install
```

- Run
```bash
npm run start
```
