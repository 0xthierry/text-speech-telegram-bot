import AWS from 'aws-sdk';
import { ApplicationConfig } from '@config/env';
import { IStoreRepository } from '@shared/providers/Storage/IStorage';

AWS.config.update({
  apiVersion: '2006-03-01',
  region: 'us-west-2',
  credentials: {
    accessKeyId: ApplicationConfig.aws.accessKeyId,
    secretAccessKey: ApplicationConfig.aws.secretAccessKey,
  },
});

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
