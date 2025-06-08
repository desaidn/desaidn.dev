import type { ReactElement } from 'react';
import AppLayout from './AppLayout';

export default function ComingSoon(): ReactElement {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto pt-10 md:pt-20 lg:pt-32">
        <h1 className="text-3xl lg:text-4xl text-gray-200 mb-2">Coming Soon</h1>
      </div>
    </AppLayout>
  );
}
