import { cp, mkdir } from 'node:fs/promises';
import { marpCli } from '@marp-team/marp-cli';

// 本編を HTML（既定）か PDF（--pdf）で生成する。原稿が相対パスで参照する画像を dist へ複製する。
const pdf = process.argv.includes('--pdf');
await mkdir('dist', { recursive: true });
await cp('slides/assets', 'dist/assets', { recursive: true });
for (const { suffix, lang } of [{ suffix: '', lang: 'ja' }, { suffix: '-en', lang: 'en' }]) {
  const output = pdf ? `dist/agent-dev-slide${suffix}.pdf` : `dist/index${suffix}.html`;
  const args = ['--no-stdin', `slides/index${suffix}.md`, '--lang', lang, '-o', output];
  if (pdf) args.push('--pdf', '--allow-local-files');
  const result = await marpCli(args);
  if (result !== 0) {
    process.exitCode = result;
    break;
  }
}
