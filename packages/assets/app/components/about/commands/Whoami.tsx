import { memo } from 'react';
import Link from '../../common/Link';

const Whoami = memo(() => {
  return (
    <div className="ml-4 space-y-2 text-gray-300">
      <div className="text-2xl font-bold">Dhairya Desai</div>
      <div className="text-xl font-semibold">Software Engineer</div>
      <div className="text-md">
        Programming Languages, Distributed Systems, User Interfaces
      </div>

      <div className="mt-2 space-y-1">
        <Link href="mailto:me@desaidn.dev">me@desaidn.dev</Link>
        <Link href="https://github.com/desaidn">github.com/desaidn</Link>
        <Link href="https://www.linkedin.com/in/dhairya-n-desai">
          linkedin.com/in/dhairya-n-desai
        </Link>
      </div>
    </div>
  );
});

export default Whoami;
