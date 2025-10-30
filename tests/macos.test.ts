import { describe, it, expect } from 'vitest';
import useragent from '../src';

const macOsCases = [
  {
    name: 'macOS Catalina',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/14.1.2 Safari/605.1.15',
    expected: 'macOS Catalina',
  },
  {
    name: 'macOS Big Sur (10.16 style)',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_16_0) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/14.0 Safari/605.1.15',
    expected: 'macOS Big Sur',
  },
  {
    name: 'macOS Big Sur (11.x style)',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS 11_7_10) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/16.1 Safari/605.1.15',
    expected: 'macOS Big Sur',
  },
  {
    name: 'macOS Monterey',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 12_7_6) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/16.6 Safari/605.1.15',
    expected: 'macOS Monterey',
  },
  {
    name: 'macOS Ventura',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 13_7_8) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/17.6 Safari/605.1.15',
    expected: 'macOS Ventura',
  },
  {
    name: 'macOS Sonoma',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_8_1) AppleWebKit/605.1.15 ' +
      '(KHTML, like Gecko) Version/18.1 Safari/605.1.15',
    expected: 'macOS Sonoma',
  },
  {
    name: 'macOS Sequoia',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS 15_7_1) AppleWebKit/616.1.20 ' +
      '(KHTML, like Gecko) Version/19.0 Safari/616.1.20',
    expected: 'macOS Sequoia',
  },
  {
    name: 'macOS Tahoe',
    source:
      'Mozilla/5.0 (Macintosh; Intel Mac OS 26_0_1) AppleWebKit/626.1.2 ' +
      '(KHTML, like Gecko) Version/20.0 Safari/626.1.2',
    expected: 'macOS Tahoe',
  },
];

describe('macOS detection', () => {
  macOsCases.forEach(({ name, source, expected }) => {
    it(`detects ${name}`, () => {
      const agent = useragent.parse(source);

      expect(agent.isMac).toBe(true);
      expect(agent.os).toBe(expected);
    });
  });
});
