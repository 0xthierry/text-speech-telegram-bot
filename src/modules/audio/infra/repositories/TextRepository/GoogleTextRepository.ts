import { SpeechClient } from '@google-cloud/speech';
import { ApplicationConfig } from '@config/env';
import { ITextRepository } from '@modules/audio/repositories/TextRepository/ITextRepository';

export const googleTextRepository: ITextRepository = async options => {
  const client = new SpeechClient({
    projectId: ApplicationConfig.gcp.projectId,
    keyFilename: ApplicationConfig.gcp.credentialsPath,
  });

  const [response] = await client.recognize(options);

  const transcription = response.results
  ?.map(result => {
    if (result?.alternatives?.length) {
      return result?.alternatives[0]?.transcript;
    }
    return [];
  })
  .join('\n')

  return transcription || "We can't transcript your audio";
};

