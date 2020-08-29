import makeToSpeechLink from './toSpeechLink';
import speechFakeRepository from '../repositories/SpeechRepository/fakes/FakeSpeechRepository';
import { store } from 'shared/providers/Storage/fakes/FakeStorageProvider';

describe('toSpeechLink', () => {
  it('should convert the text to audio and return the link path', async () => {
    const toSpeechLink = makeToSpeechLink(speechFakeRepository, store);
    const link = await toSpeechLink('name');
    expect(typeof link === 'string').toBe(true);
  });
});
