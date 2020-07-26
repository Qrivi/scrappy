import Discord from 'discord.js';

import logger from './utils/logger';
import { Config } from './config';

export class Bot {
  private client: Discord.Client;
  constructor () {
    this.client = new Discord.Client();

    this.client.once('ready', () => {
      logger.info('Connected to Discord');
      this.client.user!.setActivity('Pokémon FireRed', { type: 'PLAYING' });
    });
  }

  async init () {
    await this.client.login(Config.discordToken);
    logger.info('Bot is ready');
  }

  async uploadAttachment (buffer: Buffer) {
    // tmp
    const guild = await this.client.guilds.cache.first()!.fetch(); // This will be Intix during test
    const channel = await guild!.channels.cache.find(c => c.name === 'admin-zone') as Discord.TextChannel;

    const attachment = new Discord.MessageAttachment(buffer);
    channel!.send(`Look at what I just scraped! uwu`, attachment);
  }
}
