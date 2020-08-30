import { googleTextRepository } from './GoogleTextRepository';
import fakeTextRepository from '@modules/audio/repositories/TextRepository/fakes/FakeTextRepository';
import { ApplicationConfig } from '@config/env';

export const textRepository =
  ApplicationConfig.env === 'production'
    ? googleTextRepository
    : fakeTextRepository;
