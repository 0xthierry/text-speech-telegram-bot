import { ISpeechRepository } from '../repositories/SpeechRepository/ISpeechRepository';
import convertToABuffer from './convertToBuffer';

const toSpeech = (speechRepository: ISpeechRepository) => async (
  text: string,
) => {
  const response = await speechRepository({
    audioConfig: { audioEncoding: 3 },
    input: {
      text,
    },
    voice: {
      languageCode: 'pt-BR',
      name: 'pt-BR-Standard-A',
    },
  });

  return convertToABuffer(response);
};

export default toSpeech;
