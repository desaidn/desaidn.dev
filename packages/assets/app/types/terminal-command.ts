import type { ReactElement } from 'react';

export interface TerminalCommand {
  name: string;
  output: ReactElement[];
  typingSpeed?: number;
  waitAfter?: number;
}

export interface CommandExecutionState {
  currentCommand: string | null;
  displayText: string;
  showOutput: boolean;
  isTyping: boolean;
  currentStep: number;
}
