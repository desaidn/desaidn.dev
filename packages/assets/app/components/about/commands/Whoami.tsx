export default function Whoami() {
  return (
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
}
