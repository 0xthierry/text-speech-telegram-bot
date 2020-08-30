import { Request, Response } from 'express';
import makeToSpeech from '@modules/text/services/toSpeechLink';
import { speechRepository } from '../../repositories/SpeechRepository';
import { store as storeAudio } from '@shared/infra/providers/Storage';

const toSpeech = makeToSpeech(speechRepository, storeAudio);

export const store = async (req: Request, res: Response) => {
  const text = req.body.text as string;
  const response = await toSpeech(text);
  return res.json({ file: response });
};
