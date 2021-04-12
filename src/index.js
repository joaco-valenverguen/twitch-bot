const tmi = require("tmi.js");

const options = {
  identity: {
    options: { debug: true },
    username: "joaco_valenverguen",
    password: "oauth:mjolwkjg6z1qddvivbcxrje4w1b18q",
  },
  channels: ["joaco_valenverguen"],
};
const client = new tmi.client(options);

client.connect();

client.on("connected", (address, port) => {
  client.action(
    "joaco_valenverguen",
    `Hello gamers Conected to${address} ${port} `
  );
});
client.on("chat", (target, ctx, message, self) => {
  if (self) return;
  console.log("target: " + target);
  console.log(ctx);
  const commandName = message.trim();
  if (commandName === "hello") {
    client.say(target, `welcome ${ctx.username}`);
  }
  if (commandName === "!dice") {
    const num = rollDice();
    client.say(target, `you rolled ${num}`);
  }
});
function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}
