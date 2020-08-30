/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { ContextMessageUpdate } from 'telegraf';
import { tryCatch } from 'rambda';
import { textRepository } from '../../repositories/TextRepository';
import { get as getAudio } from '../../repositories/TelegramAudioRepository';
import { logger } from '@shared/infra/providers/Logger';

import makeToText from '@modules/audio/services/toText';

const toSpeech = makeToText(textRepository, getAudio);

export const handler = tryCatch(
  async (ctx: ContextMessageUpdate) => {
    const file = await ctx.telegram.getFileLink(
      `${ctx.message?.voice?.file_id}`,
    );
    const transcription = await toSpeech(file);
    await ctx.reply(transcription, {
      reply_to_message_id: ctx.message?.message_id,
    });
  },
  (ctx: ContextMessageUpdate) => {
    logger.error('request error - from speech to text', {
      function: 'speechToText',
      target: 'BOT',
      input: ctx.message?.text
    });
    ctx.reply('An error ocurrs when try to convert audio to text');
  }
);
