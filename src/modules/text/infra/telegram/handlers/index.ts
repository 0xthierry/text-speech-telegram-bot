/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { ContextMessageUpdate } from 'telegraf';
import { tryCatch } from 'rambda';
import { speechRepository } from '../../repositories/SpeechRepository';
import { logger } from 'shared/infra/providers/Logger';

import makeToSpeech from 'modules/text/services/toSpeechBuffer';

const toSpeech = makeToSpeech(speechRepository);

export const handler = tryCatch(
  async (ctx: ContextMessageUpdate) => {
    const source = await toSpeech(ctx.message?.text || '');
    await ctx.replyWithVoice(
      { source },
      {
        caption: 'From text to audio',
        reply_to_message_id: ctx.message?.message_id,
      },
    );
  },
  (ctx: ContextMessageUpdate) => {
    logger.error('request error - from text to speech', {
      function: 'textToSpeech',
      target: 'BOT',
      input: ctx.message?.text
    });
    ctx.reply('An error ocurrs when try to convert text to audio');
  }
);
