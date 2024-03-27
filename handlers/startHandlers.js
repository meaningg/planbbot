import { uuidRegex } from "../regex.js";
import { sendUserId } from "../api/get.js";

export function regUserHandler(ctx, startPayload) {
  const sessionIdMatch = startPayload.match(uuidRegex);

  if (!sessionIdMatch) {
    return;
  }

  ctx.replyWithHTML("Сообщение об успехе");
  sendUserId(ctx.from.id, sessionIdMatch[0])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}
