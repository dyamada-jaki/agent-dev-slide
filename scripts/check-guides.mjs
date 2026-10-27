import { readFile } from 'node:fs/promises';

const claude = await readFile(new URL('../CLAUDE.md', import.meta.url), 'utf8');
const codex = await readFile(new URL('../AGENTS.md', import.meta.url), 'utf8');

if (claude !== codex) {
  console.error('CLAUDE.md と AGENTS.md が一致していません。両方をそろえてください。');
  process.exitCode = 1;
} else {
  console.log('CLAUDE.md と AGENTS.md は一致しています。');
}
