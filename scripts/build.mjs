import { cp, mkdir } from 'node:fs/promises';
import { marpCli } from '@marp-team/marp-cli';

// 本編を HTML（既定）か PDF（--pdf）で生成する。原稿が相対パスで参照する画像を dist へ複製する。
const pdf = process.argv.includes('--pdf');
await mkdir('dist', { recursive: true });
await cp('slides/assets', 'dist/assets', { recursive: true });
const args = pdf
  ? ['--no-stdin', 'slides/index.md', '--pdf', '--allow-local-files', '-o', 'dist/agent-dev-slide.pdf']
  : ['--no-stdin', 'slides/index.md', '-o', 'dist/index.html'];
process.exitCode = await marpCli(args);
