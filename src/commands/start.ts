import { ContextMessageUpdate } from 'telegraf';

export default async function start(ctx: ContextMessageUpdate) {
	return ctx.replyWithMarkdown(
		"Hi friend\nSend me a text and I'll reply with a audio or send me a audio and I'll reply with a text"
	);
}
