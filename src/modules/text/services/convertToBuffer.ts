import { ifElse, is } from 'rambda';
import { ISpeechRepositoryResponse } from '../repositories/SpeechRepository/ISpeechRepository';
import AppError from 'shared/errors/AppError';

const convertToABuffer = ifElse<ISpeechRepositoryResponse, Buffer>(
  audio => is(String, audio) || is(Uint8Array, audio),
  audio => Buffer.from(audio as string),
  () => {
    throw new AppError(`Can't convert text to audio`);
  },
);

export default convertToABuffer;
