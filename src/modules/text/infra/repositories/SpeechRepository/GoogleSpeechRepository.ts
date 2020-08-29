import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { ApplicationConfig } from 'config';
import { ISpeechRepository } from 'modules/text/repositories/SpeechRepository/ISpeechRepository';

export const googleSpeechRepository: ISpeechRepository = async options => {
  const client = new TextToSpeechClient({
    projectId: ApplicationConfig.gcp.projectId,
    keyFilename: ApplicationConfig.gcp.credentialsPath,
  });

  const [response] = await client.synthesizeSpeech(options);

  return response.audioContent;
};

