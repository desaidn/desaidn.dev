import type { ReactElement } from 'react';
import AppLayout from '../common/AppLayout';
import BackButton from '../common/BackButton';
import CommandExecution from '../common/CommandExecution';
import COMING_SOON_COMMANDS from './commands';

export default function ComingSoonPage(): ReactElement {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto pt-10 md:pt-20 lg:pt-32">
        <div className="mb-6">
          <BackButton to="/" ariaLabel="Go back to about page" />
        </div>
        <CommandExecution commands={COMING_SOON_COMMANDS} />
      </div>
    </AppLayout>
  );
}
