type IStoreRepositoryRequest = {
  buffer: Buffer;
  filename: string;
  expiresIn?: Date;
  isPublic?: boolean;
};

export type IStoreRepository = (
  request: IStoreRepositoryRequest,
) => Promise<string>;
