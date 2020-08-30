import { googleSpeechRepository } from './GoogleSpeechRepository';
import fakeSpeechRepository from '@modules/text/repositories/SpeechRepository/fakes/FakeSpeechRepository';
import { ApplicationConfig } from '@config/env';

export const speechRepository =
  ApplicationConfig.env === 'production'
    ? googleSpeechRepository
    : fakeSpeechRepository;
