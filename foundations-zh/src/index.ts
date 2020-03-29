import { extractStack } from "./utils";

export interface ErrorMessage {
  message: string;
  stack?: {
    line: number;
    column: number;
    filename: string;
  }[];
}

export function parseError(err: Error): ErrorMessage {
  const message = err.message;
  const stack = extractStack(err);
  return {
    message,
    stack,
  };
}
