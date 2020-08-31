import { Request, Response } from 'express';
import makeToText from '@modules/audio/services/toText';
import { textRepository } from '../../repositories/TextRepository';
import { get as getFile } from '../../repositories/FileAudioRepository';

const toText = makeToText(textRepository, getFile);

export const store = async (req: Request, res: Response) => {
  const path = req.file.path;
  const response = await toText(path);
  return res.json({ transcription: response });
};
