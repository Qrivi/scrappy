import * as dotenv from 'dotenv';
dotenv.config();

export class Config {
  public static readonly logDirectory = process.env.LOG_DIRECTORY
    ? process.env.LOG_DIRECTORY
    : './data/log';
  // Puppeteer
  public static readonly runChromiumHeadless = process.env.CHROMIUM_HEADLESS
        ? /^(true|yes)$/i.test(process.env.CHROMIUM_HEADLESS)
        : true;
  // discord.js
  public static readonly discordToken = process.env.DISCORD_TOKEN
        ? process.env.DISCORD_TOKEN
        : 'invalidtoken';
}
