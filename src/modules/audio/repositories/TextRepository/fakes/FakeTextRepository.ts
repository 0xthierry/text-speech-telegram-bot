import { ITextRepository } from '../ITextRepository';

const fakeTextRepository: ITextRepository = async options =>
  options.audio.content.toString();

export default fakeTextRepository;
