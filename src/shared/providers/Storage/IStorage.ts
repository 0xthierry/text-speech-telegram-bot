type IStoreRepositoryRequest = {
  buffer: Buffer;
  filename: string;
  expiresIn?: Date;
  isPublic?: boolean;
};

export type IStoreRepository = (
  request: IStoreRepositoryRequest,
) => Promise<string>;

type IGetRepositoryRequest = {
  path: string;
};

export type IGetRepository = (
  request: IGetRepositoryRequest,
) => Promise<Buffer>;
