import { cp, mkdir } from 'node:fs/promises';
import { marpCli } from '@marp-team/marp-cli';

// HTML と一緒に assets/ を配布すれば、原稿とは別の場所でも挿絵を読める。
await mkdir('dist', { recursive: true });
await cp('slides/assets', 'dist/assets', { recursive: true });
const pdf = process.argv[2] === 'pdf';
const output = pdf ? 'dist/agent-dev-slide.pdf' : 'dist/index.html';
const args = ['--no-stdin', 'slides/index.md', '-o', output];
if (pdf) args.push('--pdf', '--allow-local-files');
process.exitCode = await marpCli(args);
