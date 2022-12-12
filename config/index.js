require('dotenv').config();

const { env } = process;

module.exports = {
  PORT: env.PORT || 3000,
  DISCORD_BOT_TOKEN: env.DISCORD_BOT_TOKEN,
  DISCORD_FORUM_ID: env.DISCORD_FORUM_ID,
  DISCORD_CHANNEL_ID: env.DISCORD_CHANNEL_ID,
  OPEN_AI_API_KEY: env.OPEN_AI_API_KEY,
  OPEN_AI_GPT_MODEL: env.OPEN_AI_GPT_MODEL || 'text-curie-001',
  OPEN_AI_MAX_TOKENS: env.OPEN_AI_MAX_TOKENS || 100,
  MAX_TEXT_LENGTH: env.MAX_TEXT_LENGTH || 1000,
};
