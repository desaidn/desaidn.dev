import { memo, type ReactElement } from 'react';
import { useCommandExecution } from '~/hooks/useCommandExecution';
import type { TerminalCommand } from '~/types/terminal-command';

interface CommandExecutionProps {
  commands: TerminalCommand[];
  showPrompt?: boolean;
}

const CommandExecution = memo(
  ({ commands, showPrompt = true }: CommandExecutionProps): ReactElement => {
    const { state: execState } = useCommandExecution(commands);

    return (
      <div className="text-gray-400 space-y-4">
        {commands.map((command, index) => {
          const isCurrentCommand = command.name === execState.currentCommand;
          const isPastCommand =
            commands.findIndex(cmd => cmd.name === execState.currentCommand) >
            index;
          const shouldShow = isCurrentCommand || isPastCommand;

          if (!shouldShow) return null;

          const displayText = isCurrentCommand
            ? execState.displayText
            : command.name;
          const showOutput =
            isPastCommand || (isCurrentCommand && execState.showOutput);
          const showCursor = isCurrentCommand && execState.isTyping;

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
);

export default CommandExecution;
