import puppeteer from 'puppeteer';

import { Config } from './config';
import { CaptureConfig } from './models/captureconfig.model';
import logger from './utils/logger';

export class Browser {
  private browser!: puppeteer.Browser;

  async init () {
    // Create a Chrome instance
    this.browser = await puppeteer.launch({
      headless: Config.runChromiumHeadless,
      defaultViewport: null
    });

    // Close default empty tab
    (await this.browser.pages()).forEach(async page => page.close());

    logger.info('Browser is ready');
  }

  async capture (config: CaptureConfig) {
    // Create a tab and load page
    const page = await this.browser.newPage();
    await page.goto(config.url);
    await page.setViewport({ width: config.width, height: config.height });
    if (config.css) {
      await page.addStyleTag({ content: config.css });
    }

    // Make screenshot
    const screenshot = await page.screenshot({ encoding: 'binary' });
    // await page.screenshot({ path: './data/latestscreenshot.png' });
    await page.close();

    return screenshot;
  }
}
