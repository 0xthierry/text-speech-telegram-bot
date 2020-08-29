import { googleSpeechRepository } from './GoogleSpeechRepository';
import fakeSpeechRepository from 'modules/text/repositories/SpeechRepository/fakes/FakeSpeechRepository';
import { ApplicationConfig } from 'config';

export const speechRepository =
  ApplicationConfig.env === 'production'
    ? googleSpeechRepository
    : fakeSpeechRepository;
