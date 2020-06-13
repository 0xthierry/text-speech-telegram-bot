import { ContextMessageUpdate } from 'telegraf';

function factory() {
	return function handler(ctx: ContextMessageUpdate) {
		return ctx.replyWithMarkdown(
			"Hi friend\nSend me a text and I'll reply with a audio or send me a audio and I'll reply with a text"
		);
	};
}

export default { factory };
