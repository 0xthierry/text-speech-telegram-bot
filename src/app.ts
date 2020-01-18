import { ContextMessageUpdate, Telegraf } from 'telegraf';
import * as commands from './commands';
import * as handlers from './handlers';

export default async function app(bot: Telegraf<ContextMessageUpdate>) {
	/**
	 * Commands
	 */
	bot.start(commands.start);
	/**
	 * Handlers
	 */
	bot.on('text', handlers.text.factory());

	return bot;
}
