import type { ReactElement } from 'react';
import AppLayout from './AppLayout';
import CommandExecution from './CommandExecution';
import { terminalCommands } from '~/constants/terminal-commands';

export default function About(): ReactElement {
  return (
    <AppLayout>
      <div className="p-6">
        <div className="w-full max-w-2xl mx-auto pt-32">
          <CommandExecution commands={terminalCommands} />
        </div>
      </div>
    </AppLayout>
  );
}
