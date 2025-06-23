import { useCallback, useEffect, useState } from 'react';
import type { TerminalCommand } from 'types';

const DEFAULT_TYPING_SPEED = 150;
const DEFAULT_WAIT_AFTER = 300;

export type CommandExecutionState = {
  currentCommand: string | null;
  displayText: string;
  showOutput: boolean;
  isTyping: boolean;
  currentStep: number;
};

/**
 * Hook for terminal command typing animation and sequence execution.
 * Simulates typewriter effect with configurable timing and automatic progression.
 * @example
 * const { state, getCurrentCommand } = useCommandExecution(commands);
 * <span>{state.displayText}</span>
 */
export function useCommandExecution(commands: TerminalCommand[]) {
  const [state, setState] = useState<CommandExecutionState>({
    currentCommand: null,
    displayText: '',
    showOutput: false,
    isTyping: false,
    currentStep: 0,
  });

  const displayCommandExecution = useCallback(
    (commandName: string, _commandOutput: React.ReactElement[]) => {
      const command = commands.find(cmd => cmd.name === commandName);
      if (!command) return;

      setState(prev => ({
        ...prev,
        currentCommand: commandName,
        displayText: '',
        showOutput: false,
        isTyping: true,
      }));

      let currentIndex = 0;
      const typingSpeed = command.typingSpeed ?? DEFAULT_TYPING_SPEED;

      const typingInterval = setInterval(() => {
        if (currentIndex < commandName.length) {
          setState(prev => ({
            ...prev,
            displayText: commandName.slice(0, currentIndex + 1),
          }));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setState(prev => ({
            ...prev,
            isTyping: false,
          }));

          const waitAfter = command.waitAfter ?? DEFAULT_WAIT_AFTER;
          setTimeout(() => {
            setState(prev => ({
              ...prev,
              showOutput: true,
            }));
          }, waitAfter);
        }
      }, typingSpeed);

      return () => clearInterval(typingInterval);
    },
    [commands]
  );

  const executeSequence = useCallback(() => {
    if (commands.length === 0) return;

    let currentStep = 0;

    const executeNext = () => {
      if (currentStep >= commands.length) return;

      const command = commands.at(currentStep);
      if (!command) return;

      displayCommandExecution(command.name, command.output);

      const totalWaitTime =
        (command.typingSpeed ?? DEFAULT_TYPING_SPEED) * command.name.length +
        (command.waitAfter ?? DEFAULT_WAIT_AFTER);

      setTimeout(() => {
        currentStep++;
        if (currentStep < commands.length) {
          setTimeout(executeNext, command.waitAfter ?? DEFAULT_WAIT_AFTER);
        }
      }, totalWaitTime);
    };

    executeNext();
  }, [commands, displayCommandExecution]);

  useEffect(() => {
    executeSequence();
  }, [executeSequence]);

  const getCurrentCommand = useCallback(() => {
    return commands.find(cmd => cmd.name === state.currentCommand);
  }, [commands, state.currentCommand]);

  return {
    state,
    displayCommandExecution,
    getCurrentCommand,
  };
}
