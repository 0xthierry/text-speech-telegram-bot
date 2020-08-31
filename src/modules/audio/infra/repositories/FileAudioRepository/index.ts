import fs from 'fs';
import { IGetRepository } from '@shared/providers/Storage/IStorage';
import { get as getFileFromDisk } from '@shared/infra/providers/Storage/DiskStorage';

export const get: IGetRepository = async ({ path }) => {
  const file = await getFileFromDisk({ path });
  await fs.promises.unlink(path);
  return file;
};
