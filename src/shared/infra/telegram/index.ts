/* eslint-disable no-console */
import Telegraf from 'telegraf';
import { ApplicationConfig } from '../../../config';
import app from './app';
import { logger } from '../providers/Logger';

const telegraf = new Telegraf(ApplicationConfig.telegram.token);
const bot = app(telegraf);

bot
  .launch()
  .then(() => logger.info('Bot started'))
  .catch(e => {
    logger.error(`Bot error`, e);
  });
