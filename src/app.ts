import { Telegraf, ContextMessageUpdate } from 'telegraf';
import * as repositories from './data/repositories';
import * as handlers from './handlers';

export default function app(
  bot: Telegraf<ContextMessageUpdate>,
): Telegraf<ContextMessageUpdate> {
  /**
   * Handlers
   */
  bot.start(handlers.start.factory());
  bot.on('text', handlers.text.factory(repositories.fromTextToSpeech));
  bot.on(
    'voice',
    handlers.audio.factory(
      repositories.fromSpeechToText,
      repositories.downloadAudio,
    ),
  );

  return bot;
}
