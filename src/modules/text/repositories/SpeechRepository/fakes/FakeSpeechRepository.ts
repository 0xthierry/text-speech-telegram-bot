import { ISpeechRepository } from '../ISpeechRepository';

const fakeSpeechRepository: ISpeechRepository = async options =>
  Buffer.from(options.input.text);

export default fakeSpeechRepository;
