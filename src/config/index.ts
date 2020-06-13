/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import axios from 'axios';

if (process.env.NODE_ENV === 'development') {
  const dotenv = require('dotenv');
  dotenv.config();
}

export type ApplicationConfig = {
  telegram: {
    token: string;
  };
  gcp: {
    projectId: string;
    credentialsPath: string;
  };
};

export const ApplicationConfig: ApplicationConfig = {
  telegram: {
    token: process.env.BOT_TOKEN ?? '',
  },
  gcp: {
    projectId: process.env.GOOGLE_PROJECT_ID ?? '',
    credentialsPath: process.env.GOOGLE_APPLICATION_CREDENTIALS ?? '',
  },
};

export const api = axios.create({
  baseURL: 'https://api.telegram.org',
});
