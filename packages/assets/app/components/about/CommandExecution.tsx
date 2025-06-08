import type { ReactElement } from 'react';
import { useCommandExecution } from '~/hooks/useCommandExecution';
import type { TerminalCommand } from '~/types/terminal-command';

interface CommandExecutionProps {
  commands: TerminalCommand[];
  showPrompt?: boolean;
}

export default function CommandExecution({
  commands,
  showPrompt = true,
}: CommandExecutionProps): ReactElement {
  const { state } = useCommandExecution(commands);

  return (
    <div className="bg-black text-gray-400 font-mono space-y-4">
      {commands.map((command, index) => {
        const isCurrentCommand = command.name === state.currentCommand;
        const isPastCommand =
          commands.findIndex(cmd => cmd.name === state.currentCommand) > index;
        const shouldShow = isCurrentCommand || isPastCommand;

        if (!shouldShow) return null;

        const displayText = isCurrentCommand ? state.displayText : command.name;
        const showOutput =
          isPastCommand || (isCurrentCommand && state.showOutput);
        const showCursor = isCurrentCommand && state.isTyping;

        return (
          <div key={command.name}>
            <div className="flex items-center">
              {showPrompt && <span className="mr-2">λ</span>}
              <span>{displayText}</span>
              {showCursor && (
                <span className="w-2 h-5 bg-green-400 ml-1 animate-pulse" />
              )}
            </div>

            {showOutput && <div>{command.output}</div>}
          </div>
        );
      })}
    </div>
  );
}
