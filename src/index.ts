/* eslint-disable no-console */
import Telegraf from 'telegraf';
import { ApplicationConfig } from './config';
import app from './app';

const telegraf = new Telegraf(ApplicationConfig.telegram.token);
const bot = app(telegraf);

bot
  .launch()
  .then(() => console.log('Running...'))
  .catch(e => {
    console.error(e);
    process.exit(1);
  });
