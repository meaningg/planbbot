import { Telegraf } from "telegraf";
import dotenv from "dotenv";

import { regUserHandler } from "./handlers/startHandlers.js";

dotenv.config();
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  const startPayload = ctx.payload;

  console.log(startPayload);
  //   Логика синхронизации пользователя с бэком при переходе по ссылке
  regUserHandler(ctx, startPayload);

  //   Логика трекинга переходов пользователя по ссылкам
  //   тут
});

bot.on("my_chat_member", async (ctx) => {
  // console.log(ctx);
  // console.log(ctx.my_chat_member?.old_chat_member);
  // console.log(ctx.old_chat_member);
});

bot.launch();

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
