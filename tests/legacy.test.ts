import { describe, it, expect } from 'vitest';

type NodeunitFn = (test: {
  ok: (value: unknown, message?: string) => void;
  equal: (actual: unknown, expected: unknown, message?: string) => void;
  done: () => void;
}) => void;

type NodeunitSuite = Record<string, NodeunitFn>;

function runNodeunitSuite(suiteName: string, suite: NodeunitSuite): void {
  describe(suiteName, () => {
    Object.entries(suite).forEach(([testName, fn]) => {
      it(testName, () => {
        let doneCalled = false;

        const assertions = {
          ok(value: unknown, message?: string) {
            expect(Boolean(value), message).toBe(true);
          },
          equal(actual: unknown, expected: unknown, message?: string) {
            expect(actual, message).toEqual(expected);
          },
          done() {
            doneCalled = true;
          },
        };

        fn(assertions);

        expect(doneCalled).toBe(true);
      });
    });
  });
}

const legacySuites: Array<{ name: string; module: NodeunitSuite }> = [
  { name: 'android_phone', module: require('./legacy/android_phone.test.js') },
  { name: 'android_tablet', module: require('./legacy/android_tablet.test.js') },
  { name: 'bots', module: require('./legacy/bots.test.js') },
  { name: 'browsers', module: require('./legacy/browsers.test.js') },
  { name: 'electron', module: require('./legacy/electron.test.js') },
  { name: 'geoip', module: require('./legacy/geoip.test.js') },
  { name: 'mobile_native', module: require('./legacy/mobile_native.test.js') },
  { name: 'silk', module: require('./legacy/silk.test.js') },
  { name: 'smart_tv', module: require('./legacy/smart_tv.test.js') },
  { name: 'wechat', module: require('./legacy/wechat.test.js') },
];

legacySuites.forEach(({ name, module }) => runNodeunitSuite(name, module));
