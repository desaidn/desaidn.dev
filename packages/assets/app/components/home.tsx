import { useEffect, useState, type ReactNode } from "react";
import type { ReactElement } from "react";
import MENU_ITEMS from "~/constants/menu-items";

export default function Home(): ReactElement {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [commandHistory, setCommandHistory] = useState<
    Array<{ command: string; result: ReactNode }>
  >([]);

  useEffect(() => {
    let currentIndex = 0;
    let currentStep = 0;
    const steps = [
      { command: "whoami", result: "desaidn" },
      {
        command: "ls",
        result: (
          <div>
            {MENU_ITEMS.map((item) => (
              <div key={item.name} className="flex items-center text-green-400">
                <a href={item.path} className="hover:text-white">
                  {item.name}/
                </a>
              </div>
            ))}
          </div>
        ),
      },
    ];

    const typingInterval = setInterval(() => {
      if (currentStep < steps.length) {
        const step = steps[currentStep];

        if (currentIndex < step.command.length) {
          setDisplayText(step.command.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          setCommandHistory((prev) => [
            ...prev,
            { command: step.command, result: step.result },
          ]);
          currentStep++;
          currentIndex = 0;
          setDisplayText("");

          if (currentStep === steps.length) {
            clearInterval(typingInterval);
            setIsTyping(false);
          }
        }
      }
    }, 500);

    return () => {
      clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
      <header className="flex flex-col items-start">
        <h1 className="text-gray-200 text-3xl lg:text-4xl font-bold mb-2">
          Hi, I'm Dhairya
        </h1>
        <h2 className="text-gray-200 text-3xl lg:text-4xl font-bold mb-6 whitespace-nowrap">
          Software Engineer
        </h2>
        <div className="mt-6 flex space-x-4 justify-center w-full">
          <a
            href="https://www.linkedin.com/in/dhairya-n-desai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-emerald-500/30 rounded-md shadow-sm text-sm font-medium text-white bg-gray-900/50 hover:bg-emerald-900/50 transition-colors duration-200"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/desaidn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-emerald-500/30 rounded-md shadow-sm text-sm font-medium text-white bg-gray-900/50 hover:bg-emerald-900/50 transition-colors duration-200"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </header>

      <div className="w-full max-w-2xl h-[300px] bg-black/80 backdrop-blur-sm text-green-400 p-6 rounded-lg shadow-lg border border-gray-700/50 overflow-hidden flex flex-col">
        <div className="flex-1 overflow-y-auto">
          {commandHistory.map((item, index) => (
            <div key={index} className="mb-1">
              <div className="flex items-center">
                <span className="mr-2">$</span>
                <span>{item.command}</span>
              </div>
              {item.result && <div className="ml-4">{item.result}</div>}
            </div>
          ))}
          {isTyping && (
            <div className="flex items-center">
              <span className="mr-2">$</span>
              <div className="flex-1 flex items-center relative">
                <input
                  type="text"
                  value={displayText}
                  className="bg-transparent border-none outline-none flex-1 text-green-400 caret-transparent"
                  autoFocus
                  readOnly={isTyping}
                />
                <span
                  className="absolute h-5 w-2 bg-green-400 ml-0.5"
                  style={{
                    left: `${displayText.length * 0.6}rem`,
                  }}
                ></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
