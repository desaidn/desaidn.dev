import type { TerminalCommand } from 'types';

export default [
  {
    name: 'echo "Coming Soon"',
    output: [
      <div key="coming-soon" className="text-2xl font-bold text-secondary mt-4">
        Coming Soon
      </div>,
    ],
  },
] satisfies TerminalCommand[];
