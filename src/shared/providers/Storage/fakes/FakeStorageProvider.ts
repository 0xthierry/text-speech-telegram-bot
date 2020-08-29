import { ApplicationConfig } from 'config';
import { IStoreRepository } from '../IStorage';

export const store: IStoreRepository = async ({ filename }) =>
  `${ApplicationConfig.server.baseURL}/files/${filename}`;
