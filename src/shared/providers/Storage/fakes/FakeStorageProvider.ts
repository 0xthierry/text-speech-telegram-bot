import { ApplicationConfig } from '@config/env';
import { IStoreRepository, IGetRepository } from '../IStorage';

export const store: IStoreRepository = async ({ filename }) =>
  `${ApplicationConfig.server.baseURL}/files/${filename}`;

export const get: IGetRepository = async ({ path }) => Buffer.from(path);
