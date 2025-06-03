import { useEffect, useState, type ReactElement } from "react";

// Mock menu items - replace with your actual MENU_ITEMS import
const MENU_ITEMS = [
  { name: "experience", path: "/experience" },
  { name: "projects", path: "/projects" },
  { name: "blog", path: "/blog" },
];

export default function About(): ReactElement {
  const [displayText, setDisplayText] = useState("");
  const [showInfo, setShowInfo] = useState(false);
  const [showLsCommand, setShowLsCommand] = useState(false);
  const [lsDisplayText, setLsDisplayText] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const whoamiCommand = "whoami";
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
            const lsCommand = "ls";
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
              <span className="w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
            )}
          </div>

          {showInfo && (
            <div className="mt-4 ml-3 space-y-2 text-gray-300">
              <div className="text-white text-xl font-semibold">
                Dhairya Desai
              </div>
              <div className="text-green-400">Software Engineer</div>
              <div className="text-sm">
                Programming Languages, Distributed Systems, User Interfaces
              </div>

              <div className="mt-4 space-y-1">
                <a
                  href="mailto:me@desaidn.dev"
                  className="block hover:text-green-400 transition-colors"
                >
                  me@desaidn.dev
                </a>
                <a
                  href="https://github.com/desaidn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-green-400 transition-colors"
                >
                  github.com/desaidn
                </a>
                <a
                  href="https://www.linkedin.com/in/dhairya-n-desai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:text-green-400 transition-colors"
                >
                  linkedin.com/in/dhairya-n-desai
                </a>
              </div>
            </div>
          )}

          {showLsCommand && (
            <div className="mt-8">
              <div className="flex items-center text-green-400 mb-2">
                <span className="mr-2">$</span>
                <span>{lsDisplayText}</span>
                {!showMenu && (
                  <span className="w-2 h-5 bg-green-400 ml-1 animate-pulse"></span>
                )}
              </div>
              {showMenu && (
                <div className="-ml-2 space-y-1">
                  {MENU_ITEMS.map((item) => (
                    <div key={item.name} className="group">
                      <a
                        href={item.path}
                        className="relative flex items-center text-green-400 transition-all duration-300 ease-out hover:text-white hover:translate-x-2 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-black rounded-sm py-1 px-2"
                      >
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2 text-white font-mono">
                          &gt;
                        </span>
                        <span className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 transition-all duration-300 rounded-sm transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
                        <span className="relative z-10 font-mono tracking-wide group-hover:font-semibold transition-all duration-300">
                          {item.name}/
                        </span>
                        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-green-400/10 blur-sm rounded-sm"></span>
                        <span className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-8px] group-hover:translate-x-0 text-green-400/70">
                          →
                        </span>
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
