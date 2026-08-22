# Changelog

## 2.2.3 - 2026-08-22

- Detect headless Chrome. The list carried `chromeheadless`, which is the Karma
  launcher label; Chrome itself reports `HeadlessChrome/<version>`.
- Detect Scrapy.
- Stop flagging Play Store WebViews as bots. The bare `google` pattern matched any
  user-agent carrying `Channel/googleplay`, which is why TikTok needed a hard-coded
  exemption; the pattern is now the documented Google crawler tokens and the
  exemption is gone. `botName` for Googlebot is now `googlebot` rather than `google`.
- Distinguish the Pinterest crawler (`Pinterest/0.2`) from the Pinterest in-app
  browser (`[Pinterest/iOS]`), which was reported as a bot.

## 2.2.1 - 2026-06-30

- Updated dependency metadata and lockfile entries for recent transitive security advisories.
- Added GitHub Pages demo assets and public repository metadata updates.

## 2.2.0 - 2026-05-16

- Added Yandex Browser version matching for YaBrowser user-agent strings.
- Fixed SSR browser entry loading when `window` is unavailable.
- Hardened parser and workflow checks with additional security coverage.

## 2.1.1 - 2026-05-10

- Fixed user-agent detection for Samsung Internet typos, TikTok bot requests,
  Android Safari handling, and Yandex Browser on Chromium.
- Restored ESM default export compatibility for `express()` and `UserAgent`.
- Added client hints support and DuckDuckGo browser detection.
- Added public npm package metadata and OIDC trusted publishing workflow support.
- Updated dependency maintenance fixes for recent transitive advisories.
