import { ApplicationConfig } from '@config/env';
import * as DiskStorage from './DiskStorage';
import * as S3Storage from './S3Storage';

export const store =
  ApplicationConfig.env === 'production' ? S3Storage.store : DiskStorage.store;
