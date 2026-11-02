import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import puppeteer from 'puppeteer-core';

// 再計画の図案だけを出力する。本編の原稿・ビルドには組み込まない。
const source = 'slides/samples/issue-4-overview/index.html';
const target = 'dist/issue-4-overview';
await mkdir(target, { recursive: true });
let html = await readFile(source, 'utf8');
const assets = [...new Set([...html.matchAll(/src="(\.\.\/\.\.\/assets\/[^\"]+)"/g)].map(match => match[1]))];
for (const asset of assets) {
  const data = await readFile(resolve('slides/samples/issue-4-overview', asset));
  html = html.replaceAll(asset, `data:image/png;base64,${data.toString('base64')}`);
}
await writeFile(`${target}/index.html`, html);
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(resolve(`${target}/index.html`)).href, { waitUntil: 'networkidle0' });
  await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode())); });
  await page.pdf({ path: `${target}/overview.pdf`, preferCSSPageSize: true, printBackground: true });
  await page.screenshot({ path: `${target}/overview.png` });
  console.log(`HTML / PDF / PNG: ${target}`);
} finally {
  await browser.close();
}
