import { Browser } from './browser';
import logger from './utils/logger';
import tmpdata from './tmp/data';
import { Bot } from './bot';

logger.warn('We not ready yet!');
const bot = new Bot();
const browser = new Browser();

Promise.all([bot.init(), browser.init()]).then(() => {
  tmpdata.forEach(async config => {
    logger.info(`Grabbing a screenshot for ${config.name}`);
    const screenshot = await browser.capture(config);

    logger.info(`Sending screenshot to Discord`);
    bot.uploadAttachment(screenshot);
  });
});
