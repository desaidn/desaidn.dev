import type { ReactElement } from 'react';
import AppLayout from '../common/AppLayout';
import CommandExecution from '../common/CommandExecution';
import ABOUT_PAGE_COMMANDS from './commands';

export default function AboutPage(): ReactElement {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto pt-10 md:pt-20 lg:pt-32">
        <CommandExecution commands={ABOUT_PAGE_COMMANDS} />
      </div>
    </AppLayout>
  );
}
