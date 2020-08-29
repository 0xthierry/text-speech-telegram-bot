import { googleSpeechRepository } from './GoogleSpeechRepository';
import fakeSpeechRepository from '../../../repositories/SpeechRepository/fakes/FakeSpeechRepository';
import { ApplicationConfig } from '../../../../../config';

export const speechRepository =
  ApplicationConfig.env === 'production'
    ? googleSpeechRepository
    : fakeSpeechRepository;
