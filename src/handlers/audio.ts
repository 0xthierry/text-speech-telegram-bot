/* eslint-disable camelcase */
import { ContextMessageUpdate } from 'telegraf';
import { fromSpeechToText, downloadAudio } from '../data/repositories';

function factory() {
	return async function handler(ctx: ContextMessageUpdate) {
		try {
			const file = await ctx.telegram.getFileLink(
				`${ctx.message?.voice?.file_id}`
			);
			const buffer = await downloadAudio(file);
			const transcription = await fromSpeechToText(buffer);
			await ctx.reply(transcription ?? '', {
				reply_to_message_id: ctx.message?.message_id,
			});
		} catch (error) {
			console.error(error);
			return ctx.reply('An error ocurrs when try to convert audio to text');
		}
	};
}

export default {
	factory,
};
