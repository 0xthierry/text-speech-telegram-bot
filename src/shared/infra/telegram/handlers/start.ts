/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
import { ContextMessageUpdate } from 'telegraf';

export const handler = (ctx: ContextMessageUpdate) =>
  ctx.replyWithMarkdown(
    "Hi friend\nSend me a text and I'll reply with a audio or send me a audio and I'll reply with a text",
  );
