import { SpeechClient } from '@google-cloud/speech';
import { ApplicationConfig } from '../../config';

async function fromSpeechToText(buffer: Buffer): Promise<string | undefined> {
  const client = new SpeechClient({
    projectId: ApplicationConfig.gcp.projectId,
    keyFilename: ApplicationConfig.gcp.credentialsPath,
  });
  const request = {
    audio: {
      content: buffer,
    },
    config: {
      // OGG
      encoding: 6,
      languageCode: 'pt-br',
      sampleRateHertz: 16000,
    },
  };
  const [response] = await client.recognize(request);
  return response.results
    ?.map(result => {
      if (result?.alternatives?.length) {
        return result?.alternatives[0]?.transcript;
      }
      return [];
    })
    .join('\n');
}

export { fromSpeechToText };
