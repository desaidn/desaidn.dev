import { useEffect, useState, type ReactElement } from 'react';

const MENU_ITEMS = [
  { name: 'experience', path: '/experience' },
  { name: 'projects', path: '/projects' },
  { name: 'blog', path: '/blog' },
];

export default function About(): ReactElement {
  const [displayText, setDisplayText] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [showLsCommand, setShowLsCommand] = useState(false);
  const [lsDisplayText, setLsDisplayText] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const whoamiCommand = 'whoami';
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < whoamiCommand.length) {
        setDisplayText(whoamiCommand.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowInfo(true);
          setTimeout(() => {
            setShowLsCommand(true);

            // Start typing ls command
            const lsCommand = 'ls';
            let lsIndex = 0;
            const lsTypingInterval = setInterval(() => {
              if (lsIndex < lsCommand.length) {
                setLsDisplayText(lsCommand.slice(0, lsIndex + 1));
                lsIndex++;
              } else {
                clearInterval(lsTypingInterval);
                setTimeout(() => setShowMenu(true), 500);
              }
            }, 150);
          }, 1000);
        }, 500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="p-6">
      <div className="w-full max-w-2xl mx-auto pt-32">
        <div className="bg-black text-green-400 font-mono">
          <div className="flex items-center h-6">
            <span className="mr-2">$</span>
            <span>{displayText}</span>
            {!showInfo && (
              <span className="w-2 h-5 bg-green-400 ml-1 animate-pulse" />
            )}
          </div>

          {showInfo && (
            <div className="mt-2 ml-4 space-y-2 text-gray-300">
              <div className="text-white text-xl font-semibold">
                Dhairya Desai
              </div>
              <div>Software Engineer</div>
              <div className="text-sm">
                Programming Languages, Distributed Systems, User Interfaces
              </div>

              <div className="mt-2 space-y-1">
                <a
                  href="mailto:me@desaidn.dev"
                  className="block text-green-400 transition-colors underline underline-offset-4"
                >
                  me@desaidn.dev
                </a>
                <a
                  href="https://github.com/desaidn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-400 transition-colors underline underline-offset-4"
                >
                  github.com/desaidn
                </a>
                <a
                  href="https://www.linkedin.com/in/dhairya-n-desai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-green-400 transition-colors underline underline-offset-4"
                >
                  linkedin.com/in/dhairya-n-desai
                </a>
              </div>
            </div>
          )}

          {showLsCommand && (
            <div className="mt-4">
              <div className="flex items-center text-green-400">
                <span className="mr-2">$</span>
                <span>{lsDisplayText}</span>
                {!showMenu && (
                  <span className="w-2 h-5 bg-green-400 ml-1 animate-pulse" />
                )}
              </div>
              {showMenu && (
                <div className="-ml-2 space-y-1">
                  {MENU_ITEMS.map(item => (
                    <div key={item.name} className="group">
                      <a
                        href={item.path}
                        className="relative flex items-center text-green-400 transition-all duration-300 ease-out hover:text-white hover:translate-x-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm py-1 px-2"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2 text-white font-mono">
                          &gt;
                        </span>
                        <span className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 transition-all duration-300 rounded-sm transform scale-x-0 group-hover:scale-x-100 origin-left" />
                        <span className="relative z-10 font-mono tracking-wide group-hover:font-semibold transition-all duration-300 underline underline-offset-4">
                          {item.name}
                        </span>
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-green-400/10 blur-sm rounded-sm" />
                      </a>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
