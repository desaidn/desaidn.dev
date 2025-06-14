import type { TerminalCommand } from '../../../types/terminal-command';

export default [
  {
    name: 'pwd',
    output: [
      <div key="pwd" className="text-2xl font-bold text-gray-300 mt-4">
        Experience
      </div>,
    ],
  },
] satisfies TerminalCommand[];
