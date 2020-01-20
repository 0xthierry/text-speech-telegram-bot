/* eslint-disable no-console */
import Telegraf from 'telegraf';
import dotenv from 'dotenv';
import { ApplicationConfig } from './config';
import app from './app';

dotenv.config();
const bot = new Telegraf(ApplicationConfig.telegram.token);
app(bot)
	.then(() => bot.launch())
	.then(() => console.log('Running...'))
	.catch(e => {
		console.error(e);
		process.exit(1);
	});
