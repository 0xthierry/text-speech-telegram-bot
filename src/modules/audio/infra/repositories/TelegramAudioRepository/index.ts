import { api } from '@config/api';
import { IGetRepository } from '@shared/providers/Storage/IStorage';

export const get: IGetRepository = async ({ path }) => {
  const response = await api.get(path, {
    responseType: 'arraybuffer',
    headers: {
      'Content-Type': 'audio/ogg;codecs=opus',
    },
  });
  return Buffer.from(response.data);
};
