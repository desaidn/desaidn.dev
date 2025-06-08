import Link from '../../common/Link';

export default function Whoami() {
  return (
    <div className="ml-4 space-y-2 text-gray-300">
      <div className="text-white text-xl font-semibold">Dhairya Desai</div>
      <div>Software Engineer</div>
      <div className="text-sm">
        Programming Languages, Distributed Systems, User Interfaces
      </div>

      <div className="mt-2 space-y-1">
        <Link href="mailto:me@desaidn.dev">me@desaidn.dev</Link>
        <Link href="https://www.linkedin.com/in/dhairya-n-desai">
          linkedin.com/in/dhairya-n-desai
        </Link>
        <Link href="https://github.com/desaidn">github.com/desaidn</Link>
        <Link href="https://x.com/writessoftly">x.com/writessoftly</Link>
        <Link href="https://letterboxd.com/writessoftly/">
          letterboxd.com/writessoftly
        </Link>
      </div>
    </div>
  );
}
