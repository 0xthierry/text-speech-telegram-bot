/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from 'path';
import AWS from 'aws-sdk';

if (process.env.NODE_ENV === 'development') {
  const dotenv = require('dotenv');
  dotenv.config();
}

const PORT = parseInt(process.env.PORT || '3333');

export type ApplicationConfig = {
  telegram: {
    token: string;
  };
  gcp: {
    projectId: string;
    credentialsPath: string;
  };
  aws: {
    accessKeyId: string;
    secretAccessKey: string;
    bucket: Record<string, string>;
  };
  server: {
    port: number;
    baseURL: string;
  };
  storagePath: string;
  env: string;
};

export const ApplicationConfig: ApplicationConfig = {
  telegram: {
    token: process.env.BOT_TOKEN ?? '',
  },
  gcp: {
    projectId: process.env.GOOGLE_PROJECT_ID ?? '',
    credentialsPath: process.env.GOOGLE_APPLICATION_CREDENTIALS ?? '',
  },
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY ?? '',
    secretAccessKey: process.env.AWS_SECRET_KEY ?? '',
    bucket: {
      name: process.env.AWS_BUCKET_NAME ?? '',
    },
  },
  server: {
    port: PORT,
    baseURL: process.env.SERVER_URL ?? `http://localhost:${PORT}`,
  },
  storagePath: resolve(__dirname, '..', '..', 'tmp'),
  env: process.env.NODE_ENV ?? 'development',
};

AWS.config.update({
  apiVersion: '2006-03-01',
  region: 'us-west-2',
  credentials: {
    accessKeyId: ApplicationConfig.aws.accessKeyId,
    secretAccessKey: ApplicationConfig.aws.secretAccessKey,
  },
});
