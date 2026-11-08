import puppeteer from 'puppeteer-core';
import { fileURLToPath } from 'node:url';
const directory = new URL('./', import.meta.url);
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1000, deviceScaleFactor: 1 });
  await page.goto(new URL('index.html', directory).href, { waitUntil: 'networkidle0' });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map(image => image.decode()));
  });
  await page.pdf({
    path: fileURLToPath(new URL('cover-study.pdf', directory)),
    preferCSSPageSize: true,
    printBackground: true,
  });
} finally {
  await browser.close();
}
