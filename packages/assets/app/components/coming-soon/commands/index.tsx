import type { TerminalCommand } from 'types';

export default [
  {
    name: 'echo "Coming Soon"',
    output: [
      <div key="coming-soon" className="text-2xl font-bold text-gray-300 mt-4">
        Coming Soon
      </div>,
    ],
  },
] satisfies TerminalCommand[];
