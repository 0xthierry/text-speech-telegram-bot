import AWS from 'aws-sdk';
import { ApplicationConfig } from '@config/env';
import {
  IStoreRepository,
  IGetRepository,
} from '@shared/providers/Storage/IStorage';

export const store: IStoreRepository = async ({
  buffer,
  filename,
  expiresIn,
  isPublic,
}) => {
  const s3 = new AWS.S3();

  const ACL = isPublic ? 'public-read' : undefined;

  const response = await s3
    .upload({
      Body: buffer,
      Key: filename,
      Bucket: ApplicationConfig.aws.bucket.name,
      Expires: expiresIn,
      ACL,
    })
    .promise();

  return response.Location;
};

export const get: IGetRepository = async ({ path }) => {
  const s3 = new AWS.S3();

  const response = await s3
    .getObject({
      Key: path,
      Bucket: ApplicationConfig.aws.bucket.name,
    })
    .promise();

  return response.Body as Buffer;
};
