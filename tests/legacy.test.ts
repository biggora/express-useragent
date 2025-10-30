import './legacy-modules.d.ts';
import { describe, it, expect } from 'vitest';
import androidPhoneSuite from './legacy/android_phone.test.js';
import androidTabletSuite from './legacy/android_tablet.test.js';
import botsSuite from './legacy/bots.test.js';
import browsersSuite from './legacy/browsers.test.js';
import electronSuite from './legacy/electron.test.js';
import geoipSuite from './legacy/geoip.test.js';
import mobileNativeSuite from './legacy/mobile_native.test.js';
import silkSuite from './legacy/silk.test.js';
import smartTvSuite from './legacy/smart_tv.test.js';
import wechatSuite from './legacy/wechat.test.js';

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
  { name: 'android_phone', module: androidPhoneSuite as NodeunitSuite },
  { name: 'android_tablet', module: androidTabletSuite as NodeunitSuite },
  { name: 'bots', module: botsSuite as NodeunitSuite },
  { name: 'browsers', module: browsersSuite as NodeunitSuite },
  { name: 'electron', module: electronSuite as NodeunitSuite },
  { name: 'geoip', module: geoipSuite as NodeunitSuite },
  { name: 'mobile_native', module: mobileNativeSuite as NodeunitSuite },
  { name: 'silk', module: silkSuite as NodeunitSuite },
  { name: 'smart_tv', module: smartTvSuite as NodeunitSuite },
  { name: 'wechat', module: wechatSuite as NodeunitSuite },
];

legacySuites.forEach(({ name, module }) => runNodeunitSuite(name, module));
