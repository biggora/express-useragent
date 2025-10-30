import { expect } from 'vitest';
import type { AgentDetails } from '../src';

export function expectAgentFlags(agent: AgentDetails, expected: Record<string, unknown>): void {
  Object.entries(expected).forEach(([key, value]) => {
    expect((agent as Record<string, unknown>)[key]).toEqual(value);
  });
}
