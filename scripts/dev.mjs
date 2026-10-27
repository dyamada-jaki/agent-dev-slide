import { marpCli } from '@marp-team/marp-cli';

// implement-issue が用意する worktree ごとの HOST_PORT を Marp に渡す。
process.env.PORT = process.env.HOST_PORT || '5273';
try {
  process.exitCode = await marpCli(['--server', 'slides']);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
