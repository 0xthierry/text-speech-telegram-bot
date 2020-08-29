/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { Telegraf, ContextMessageUpdate } from 'telegraf';
import { handler as handlerText } from 'modules/text/infra/telegram/handlers';
import { handler as handlerStart } from './handlers/start';

export default function app(
  bot: Telegraf<ContextMessageUpdate>,
): Telegraf<ContextMessageUpdate> {
  /**
   * Handlers
   */
  bot.start(handlerStart);
  bot.on('text', handlerText);

  return bot;
}
