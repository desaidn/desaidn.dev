import type { TerminalCommand } from '~/types/terminal-command';
import menuItems from './menu-items';

const WhoamiOutput = () => (
  <div className="ml-4 space-y-2 text-gray-300">
    <div className="text-white text-xl font-semibold">Dhairya Desai</div>
    <div>Software Engineer</div>
    <div className="text-sm">
      Programming Languages, Distributed Systems, User Interfaces
    </div>

    <div className="mt-2 space-y-1">
      <a
        href="mailto:me@desaidn.dev"
        className="block text-green-400 hover:text-gray-300 transition-colors underline underline-offset-4"
      >
        me@desaidn.dev
      </a>
      <a
        href="https://github.com/desaidn"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-green-400 hover:text-gray-300 transition-colors underline underline-offset-4"
      >
        github.com/desaidn
      </a>
      <a
        href="https://x.com/writessoftly"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-green-400 hover:text-gray-300 transition-colors underline underline-offset-4"
      >
        x.com/writessoftly
      </a>
      <a
        href="https://www.linkedin.com/in/dhairya-n-desai"
        target="_blank"
        rel="noopener noreferrer"
        className="block text-green-400 hover:text-gray-300 transition-colors underline underline-offset-4"
      >
        linkedin.com/in/dhairya-n-desai
      </a>
    </div>
  </div>
);

const LsOutput = () => (
  <div className="-ml-2">
    {menuItems.map(item => (
      <div key={item.name} className="group">
        <a
          href={item.path}
          className="relative flex items-center text-green-400 transition-all duration-300 ease-out hover:text-white hover:translate-x-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm py-1 px-2"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2 text-white font-mono">
            &gt;
          </span>
          <span className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 transition-all duration-300 rounded-sm transform scale-x-0 group-hover:scale-x-100 origin-left" />
          <span className="relative z-10 font-mono tracking-wide transition-all duration-300 underline underline-offset-4">
            {item.name}
          </span>
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-green-400/10 blur-sm rounded-sm" />
        </a>
      </div>
    ))}
  </div>
);

export const terminalCommands: TerminalCommand[] = [
  {
    name: 'whoami',
    output: [<WhoamiOutput key="whoami-output" />],
    typingSpeed: 150,
    waitAfter: 300,
  },
  {
    name: 'ls',
    output: [<LsOutput key="ls-output" />],
    typingSpeed: 150,
    waitAfter: 300,
  },
];
