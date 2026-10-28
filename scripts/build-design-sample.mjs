import { cp, mkdir } from 'node:fs/promises';
import { marpCli } from '@marp-team/marp-cli';

// 本編の build / build:pdf はそのままに、検討用見本を別の出力へ生成する。
await mkdir('dist/assets', { recursive: true });
await cp('slides/assets/issue-5-codex', 'dist/assets/issue-5-codex', { recursive: true });
for (const format of ['html', 'pdf']) {
  const args = ['--no-stdin', 'slides/design-codex.md', '-o', `dist/design-codex.${format}`];
  if (format === 'pdf') args.push('--pdf', '--allow-local-files');
  const code = await marpCli(args);
  if (code) {
    process.exitCode = code;
    break;
  }
}
