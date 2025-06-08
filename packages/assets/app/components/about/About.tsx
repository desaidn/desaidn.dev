import type { ReactElement } from 'react';
import AppLayout from '../AppLayout';
import CommandExecution from './CommandExecution';
import commands from './commands';

export default function About(): ReactElement {
  return (
    <AppLayout>
      <div className="max-w-4xl mx-auto pt-10 md:pt-20 lg:pt-32">
        <CommandExecution commands={commands} />
      </div>
    </AppLayout>
  );
}
