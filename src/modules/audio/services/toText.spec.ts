import makeToText from './toText';
import fakeTextRepository from '../repositories/TextRepository/fakes/FakeTextRepository';
import { get as getFile } from '@shared/providers/Storage/fakes/FakeStorageProvider';

const toText = makeToText(fakeTextRepository, getFile);

describe('toText', () => {
  it('should receive audio file path and return the transcription', async () => {
    const response = await toText('myFilePath');
    expect(response).toBe('myFilePath');
  });
});
