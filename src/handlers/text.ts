/* eslint-disable camelcase */
import { ContextMessageUpdate } from 'telegraf';
import { FromTextToSpeech } from '../data/repositories/types';

function factory(fromTextToSpeech: FromTextToSpeech) {
  return async function handler(ctx: ContextMessageUpdate): Promise<void> {
    try {
      const source = await fromTextToSpeech(ctx.message?.text || '');
      await ctx.replyWithVoice(
        { source },
        {
          caption: 'From text to audio',
          reply_to_message_id: ctx.message?.message_id,
        },
      );
    } catch (error) {
      ctx.reply('An error ocurrs when try to convert text to audio');
    }
  };
}

export default { factory };
