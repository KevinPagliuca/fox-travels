/* eslint-disable @typescript-eslint/naming-convention */
declare namespace NodeJS {
  export interface ProcessEnv {
    VERCEL: string;
    VERCEL_ENV: string;
    VERCEL_URL: string;
    VERCEL_GIT_PROVIDER: string;
    VERCEL_GIT_PREVIOUS_SHA: string;
    VERCEL_GIT_REPO_SLUG: string;
    VERCEL_GIT_REPO_OWNER: string;
    VERCEL_GIT_REPO_ID: string;
    VERCEL_GIT_COMMIT_REF: string;
    VERCEL_GIT_COMMIT_SHA: string;
    VERCEL_GIT_COMMIT_MESSAGE: string;
    VERCEL_GIT_COMMIT_AUTHOR_LOGIN: string;
    VERCEL_GIT_COMMIT_AUTHOR_NAME: string;

    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_MAPBOX_API_URL: string;
    NEXT_PUBLIC_MAPBOX_API_KEY: string;
  }
}
