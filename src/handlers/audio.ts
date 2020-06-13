/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { ContextMessageUpdate } from 'telegraf';
import { DownloadAudio, FromSpeechToText } from '../data/repositories/types';

function factory(
  fromSpeechToText: FromSpeechToText,
  downloadAudio: DownloadAudio,
) {
  return async function handler(ctx: ContextMessageUpdate): Promise<void> {
    try {
      const file = await ctx.telegram.getFileLink(
        `${ctx.message?.voice?.file_id}`,
      );
      const buffer = await downloadAudio(file);
      const transcription = await fromSpeechToText(buffer);
      await ctx.reply(transcription ?? '', {
        reply_to_message_id: ctx.message?.message_id,
      });
    } catch (error) {
      ctx.reply('An error ocurrs when try to convert audio to text');
    }
  };
}

export default {
  factory,
};
