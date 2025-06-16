import type { TerminalCommand } from 'types';
import Ls from './Ls';
import Whoami from './Whoami';

export default [
  {
    name: 'whoami',
    output: [<Whoami key="whoami-output" />],
    typingSpeed: 150,
    waitAfter: 300,
  },
  {
    name: 'ls',
    output: [<Ls key="ls-output" />],
    typingSpeed: 150,
    waitAfter: 300,
  },
] satisfies TerminalCommand[];
