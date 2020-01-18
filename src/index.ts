/* eslint-disable no-console */
import Telegraf from 'telegraf';
import dotenv from 'dotenv';
import { ApplicationConfig } from './config';
import app from './app';

dotenv.config();

app(new Telegraf(ApplicationConfig.telegram.token))
	.then(bot => bot.launch())
	.then(() => console.log('Started'))
	.catch(console.error);
