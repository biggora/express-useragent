import { describe, expect, it } from 'vitest';
import useragent from '../src/index';

describe('CodeQL ReDoS and regex injection hardening', () => {
  it('parses generic product tokens without constructing a regex from the product name', () => {
    const agent = useragent.parse('My.App/1.2.3 OtherProduct/9.9');

    expect(agent.browser).toBe('My.App');
    expect(agent.version).toBe('1.2.3');
    expect(agent.isAuthoritative).toBe(false);
  });

  it('rejects malformed generic product names instead of treating them as regex fragments', () => {
    const agent = useragent.parse('(a+)+/1.0');

    expect(agent.browser).toBe('unknown');
    expect(agent.version).toBe('unknown');
  });

  it('handles long non-product prefixes without regex backtracking', () => {
    const agent = useragent.parse('-'.repeat(5000));

    expect(agent.browser).toBe('unknown');
    expect(agent.version).toBe('unknown');
  });

  it('handles long known-browser version fragments without regex backtracking', () => {
    const agent = useragent.parse(
      `Mozilla/5.0 AppleWebKit/537.36 Chrome/${'-'.repeat(5000)} Safari/537.36`,
    );

    expect(agent.browser).toBe('Chrome');
    expect(agent.version).toBe('-'.repeat(5000));
  });

  it('keeps IE compatibility mode detection after replacing the Trident version regex', () => {
    const source = 'Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko';

    const agent = useragent.parse(source);

    expect(agent.browser).toBe('IE');
    expect(agent.version).toBe('11.0');
  });

  it('handles repeated iPad-like input without regex backtracking', () => {
    const agent = useragent.parse(`Mozilla/5.0 (${'iPad'.repeat(2000)}`);

    expect(agent.os).toBe('unknown');
    expect(agent.isiPad).toBe(true);
  });

  it('handles repeated iPhone-like input without regex backtracking', () => {
    const agent = useragent.parse(`Mozilla/5.0 (${'iPhone'.repeat(2000)}`);

    expect(agent.os).toBe('unknown');
    expect(agent.isiPhone).toBe(true);
  });

  it('preserves iPad OS detection for normal user agents', () => {
    const agent = useragent.parse(
      'Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15',
    );

    expect(agent.isiPad).toBe(true);
    expect(agent.os).toBe('OS X');
  });

  it('preserves iPhone OS detection for native-style user agents', () => {
    const agent = useragent.parse('MyApp/1.0 (iPhone; iOS 15.0; Scale/3.00)');

    expect(agent.isiPhone).toBe(true);
    expect(agent.os).toBe('(iPhone; iOS 15.0');
  });
});
