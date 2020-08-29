import makeToSpeech from './toSpeechBuffer';
import speechFakeRepository from '../repositories/SpeechRepository/fakes/FakeSpeechRepository';

describe('toSpeech', () => {
  it('should convert the text to audio in a buffer', async () => {
    const toSpeech = makeToSpeech(speechFakeRepository);
    const buffer = await toSpeech('name');
    expect(buffer instanceof Buffer).toBe(true);
  });
});
