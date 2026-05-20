(function () {
  'use strict';

  const FALLBACK_UA =
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';
  const UNKNOWN_SOURCE = 'unknown';

  const presets = {
    chromeWindows:
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    safariIphone:
      'Mozilla/5.0 (iPhone; CPU iPhone OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    androidChrome:
      'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
    ipadSafari:
      'Mozilla/5.0 (iPad; CPU OS 17_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.2 Mobile/15E148 Safari/604.1',
    googlebot:
      'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    duckDuckGoBot:
      'Mozilla/5.0 (compatible; DuckDuckGo-Favicons-Bot/1.0; +http://duckduckgo.com)',
    curl: 'curl/8.4.0',
  };

  const summaryFields = [
    'browser',
    'version',
    'os',
    'platform',
    'isMobile',
    'isDesktop',
    'isTablet',
    'isBot',
    'botName',
  ];

  const notableFlags = [
    'isChrome',
    'isSafari',
    'isFirefox',
    'isEdge',
    'isAndroid',
    'isiPhone',
    'isiPad',
    'isCurl',
    'isWechat',
    'isElectron',
    'isSmartTV',
    'isDuckDuckGo',
  ];

  const uaInput = document.getElementById('ua-input');
  const headersInput = document.getElementById('headers-input');
  const headersStatus = document.getElementById('headers-status');
  const parserStatus = document.getElementById('parser-status');
  const summaryGrid = document.getElementById('summary-grid');
  const flagList = document.getElementById('flag-list');
  const jsonOutput = document.getElementById('json-output');
  const copyButton = document.getElementById('copy-json');
  const copyStatus = document.getElementById('copy-status');
  const useCurrentButton = document.getElementById('use-current');

  function initialSource() {
    const url = new URL(window.location.href);
    const shared = url.searchParams.get('ua');
    if (shared !== null) {
      return shared;
    }
    if (window.navigator && window.navigator.userAgent) {
      return window.navigator.userAgent;
    }
    return FALLBACK_UA;
  }

  function getParserApi() {
    if (window.useragent && typeof window.useragent.parse === 'function') {
      return 'singleton';
    }
    if (typeof window.UserAgent === 'function') {
      return 'constructor';
    }
    return '';
  }

  function neutralAgent(source) {
    return {
      browser: 'unknown',
      version: 'unknown',
      os: 'unknown',
      platform: 'unknown',
      isMobile: false,
      isDesktop: false,
      isTablet: false,
      isBot: false,
      botName: '',
      source: source,
    };
  }

  function parseHeaders() {
    const raw = headersInput.value.trim();
    if (!raw) {
      headersStatus.textContent = 'No advanced headers applied.';
      headersStatus.classList.remove('is-error');
      return { ok: true, headers: null };
    }

    try {
      const parsed = JSON.parse(raw);
      if (!parsed || Array.isArray(parsed) || typeof parsed !== 'object') {
        throw new Error('Headers must be a JSON object.');
      }
      headersStatus.textContent = 'Headers JSON is valid and applied.';
      headersStatus.classList.remove('is-error');
      return { ok: true, headers: parsed };
    } catch (error) {
      headersStatus.textContent = 'Headers JSON is invalid. Keeping the last valid output.';
      headersStatus.classList.add('is-error');
      return { ok: false, headers: null };
    }
  }

  function parseAgent(source, headersResult) {
    const input = source.trim() || UNKNOWN_SOURCE;
    const api = getParserApi();

    if (!api) {
      parserStatus.textContent = 'Parser bundle is not loaded.';
      return neutralAgent(input);
    }

    if (headersResult.ok && headersResult.headers && typeof window.UserAgent === 'function') {
      parserStatus.textContent = 'Parsed with hydrateFromHeaders.';
      return new window.UserAgent().hydrateFromHeaders(input, headersResult.headers).Agent;
    }

    if (api === 'singleton') {
      parserStatus.textContent = headersResult.ok
        ? 'Parsed with window.useragent.parse.'
        : 'Parsed without invalid headers.';
      return window.useragent.parse(input);
    }

    parserStatus.textContent = 'Parsed with window.UserAgent.';
    return new window.UserAgent().parse(input);
  }

  function renderSummary(agent) {
    summaryGrid.innerHTML = summaryFields
      .map(function (field) {
        let value = agent[field];
        if (value === '' || value === undefined || value === null) {
          value = 'unknown';
        }
        return (
          '<div class="summary-item"><span class="summary-key">' +
          field +
          '</span><span class="summary-value">' +
          escapeHtml(String(value)) +
          '</span></div>'
        );
      })
      .join('');
  }

  function renderFlags(agent) {
    const active = notableFlags.filter(function (flag) {
      return agent[flag] === true;
    });

    if (!active.length) {
      flagList.innerHTML = '<span class="empty-flags">No notable true flags.</span>';
      return;
    }

    flagList.innerHTML = active
      .map(function (flag) {
        return '<span class="flag">' + flag + '</span>';
      })
      .join('');
  }

  function escapeHtml(value) {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function syncUrl(source) {
    const url = new URL(window.location.href);
    if (source) {
      url.searchParams.set('ua', source);
    } else {
      url.searchParams.delete('ua');
    }
    window.history.replaceState({}, '', url);
  }

  function render() {
    const source = uaInput.value;
    const headersResult = parseHeaders();
    syncUrl(source.trim());

    if (!headersResult.ok) {
      return;
    }

    const agent = parseAgent(source, headersResult);
    renderSummary(agent);
    renderFlags(agent);
    jsonOutput.textContent = JSON.stringify(agent, null, 2);
  }

  function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-1000px';
    document.body.appendChild(textarea);
    textarea.select();

    try {
      document.execCommand('copy');
      copyStatus.textContent = 'JSON copied.';
    } catch (error) {
      copyStatus.textContent = 'Copy failed.';
      copyStatus.classList.add('is-error');
    } finally {
      textarea.remove();
    }
  }

  function copyJson() {
    const text = jsonOutput.textContent;
    copyStatus.classList.remove('is-error');

    if (window.navigator.clipboard && typeof window.navigator.clipboard.writeText === 'function') {
      window.navigator.clipboard
        .writeText(text)
        .then(function () {
          copyStatus.textContent = 'JSON copied.';
        })
        .catch(function () {
          fallbackCopy(text);
        });
      return;
    }

    fallbackCopy(text);
  }

  uaInput.value = initialSource();

  uaInput.addEventListener('input', render);
  headersInput.addEventListener('input', render);
  copyButton.addEventListener('click', copyJson);
  useCurrentButton.addEventListener('click', function () {
    uaInput.value =
      window.navigator && window.navigator.userAgent ? window.navigator.userAgent : FALLBACK_UA;
    render();
    uaInput.focus();
  });

  document.querySelectorAll('[data-preset]').forEach(function (button) {
    button.addEventListener('click', function () {
      uaInput.value = presets[button.getAttribute('data-preset')] || FALLBACK_UA;
      render();
      uaInput.focus();
    });
  });

  render();
})();
