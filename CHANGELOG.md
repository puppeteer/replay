# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.2](https://github.com/puppeteer/replay/compare/v1.1.1...v1.1.2) (2022-09-05)


### Bug Fixes

* **waitForFunction:** clearing timeout when callback function returns a truthy value ([#283](https://github.com/puppeteer/replay/issues/283)) ([2d86fbf](https://github.com/puppeteer/replay/commit/2d86fbfc481af108bd5d013427f96b8205528d76))

## [1.1.1](https://github.com/puppeteer/replay/compare/v1.1.0...v1.1.1) (2022-08-30)


### Bug Fixes

* expose Lighthouse stringify extension ([#279](https://github.com/puppeteer/replay/issues/279)) ([eddad51](https://github.com/puppeteer/replay/commit/eddad5155ba619225767b96b7c4bcda6e2814d33))

## [1.1.0](https://github.com/puppeteer/replay/compare/v1.0.0...v1.1.0) (2022-08-29)


### Features

* Lighthouse stringify extension ([#272](https://github.com/puppeteer/replay/issues/272)) ([4ce0267](https://github.com/puppeteer/replay/commit/4ce026752cbecc712e2f83b8c06eb3999d8a97de))

## [1.0.0](https://github.com/puppeteer/replay/compare/v0.6.2...v1.0.0) (2022-08-22)


### ⚠ BREAKING CHANGES

* this version is compatible with Puppeteer >= v16.2.0

### Features

* update Puppeteer to v16.2.0 ([#269](https://github.com/puppeteer/replay/issues/269)) ([347b5fb](https://github.com/puppeteer/replay/commit/347b5fbaa3a559689420131fd0af57be64a4bf18))

## [0.6.2](https://github.com/puppeteer/replay/compare/v0.6.1...v0.6.2) (2022-08-22)


### Bug Fixes

* Puppeteer stringified button click type ([#261](https://github.com/puppeteer/replay/issues/261)) ([9a2b1b8](https://github.com/puppeteer/replay/commit/9a2b1b8eb0ccc8ab6bc64bc662cb691b883cb5f8))

## [0.6.1](https://github.com/puppeteer/replay/compare/v0.6.0...v0.6.1) (2022-08-03)


### Bug Fixes

* check for visibility of the last selected element only ([#241](https://github.com/puppeteer/replay/issues/241)) ([7034ff1](https://github.com/puppeteer/replay/commit/7034ff188ac9f940f394c24f4b5e8b341e5171a1))

## [0.6.0](https://github.com/puppeteer/replay/compare/v0.5.1...v0.6.0) (2022-07-29)


### Features

* implement status report ([#224](https://github.com/puppeteer/replay/issues/224)) ([d9c368f](https://github.com/puppeteer/replay/commit/d9c368fc6c2328d9c111f0708fd2ba180525d38d))

## [0.5.1](https://github.com/puppeteer/replay/compare/v0.5.0...v0.5.1) (2022-07-06)


### Bug Fixes

* close browser after run and throw errors ([#211](https://github.com/puppeteer/replay/issues/211)) ([95a1575](https://github.com/puppeteer/replay/commit/95a1575b897ed87ceef39574911ddcc35bd339be))

## [0.5.0](https://github.com/puppeteer/replay/compare/v0.4.0...v0.5.0) (2022-06-22)


### Features

* run all recording files in directory with cli ([#184](https://github.com/puppeteer/replay/issues/184)) ([5261098](https://github.com/puppeteer/replay/commit/526109832b8a7ec375b6f53a39680f00d4f847b4))


### Bug Fixes

* make cjs the main package entrypoint ([#203](https://github.com/puppeteer/replay/issues/203)) ([4d10066](https://github.com/puppeteer/replay/commit/4d100669237fda6664901b4cb09414b00e73779a))

## [0.4.0](https://github.com/puppeteer/replay/compare/v0.3.1...v0.4.0) (2022-06-20)


### Features

* allow custom line writers ([#197](https://github.com/puppeteer/replay/issues/197)) ([4c945b5](https://github.com/puppeteer/replay/commit/4c945b56636ab1fc74698b76120518783abc1377))

### [0.3.1](https://github.com/puppeteer/replay/compare/v0.3.0...v0.3.1) (2022-06-13)

### Bug Fixes

- add `cjs` files to package.json files ([#177](https://github.com/puppeteer/replay/issues/177)) ([da90137](https://github.com/puppeteer/replay/commit/da901376f4a164a2567e8e966a6599053b679e36))
- add hover to schema parser ([#182](https://github.com/puppeteer/replay/issues/182)) ([5f3e390](https://github.com/puppeteer/replay/commit/5f3e3901f2a2cfb3bb2e4e25106faed6ab735541))

## [0.3.0](https://github.com/puppeteer/replay/compare/v0.2.0...v0.3.0) (2022-06-09)

### ⚠ BREAKING CHANGES

- add `abort` function to `Runner` and remove `stepIdx` from `run` (#175)

### Features

- add `abort` function to `Runner` and remove `stepIdx` from `run` ([#175](https://github.com/puppeteer/replay/issues/175)) ([087d9ce](https://github.com/puppeteer/replay/commit/087d9ce99c52ed295681d3f9667c7d98488e95a3))
- bundle types ([#172](https://github.com/puppeteer/replay/issues/172)) ([adb3fd0](https://github.com/puppeteer/replay/commit/adb3fd01fe1c4bf7a6b1b3a5314971b091d6b066))

## [0.2.0](https://github.com/puppeteer/replay/compare/v0.1.3...v0.2.0) (2022-06-01)

### ⚠ BREAKING CHANGES

- flow parameter is now optional in before/after/step hooks.

### Features

- expose stringifyStep ([#163](https://github.com/puppeteer/replay/issues/163)) ([50f595d](https://github.com/puppeteer/replay/commit/50f595dfbe1d9f412cc1aeacca928b17cc1c88e0))
- publish CJS modules alongside ESM ([#165](https://github.com/puppeteer/replay/issues/165)) ([c40df05](https://github.com/puppeteer/replay/commit/c40df059969ca6722c7e3b6d10919226ed4e41c2))
- support runner extensions via CLI ([#162](https://github.com/puppeteer/replay/issues/162)) ([22ae2c9](https://github.com/puppeteer/replay/commit/22ae2c9634c446567ce59b38e3a88ab53685f095))

### Bug Fixes

- remove extra console.log ([#151](https://github.com/puppeteer/replay/issues/151)) ([242fe16](https://github.com/puppeteer/replay/commit/242fe1607c1cec4dfd740c5c17b396c36894ef00))

### [0.1.3](https://github.com/puppeteer/replay/compare/v0.1.2...v0.1.3) (2022-05-18)

### Features

- add `hover` step ([#127](https://github.com/puppeteer/replay/issues/127)) ([d2ceac5](https://github.com/puppeteer/replay/commit/d2ceac5100158bb79f11a18153aa87a3c13ee1f2))
- support PUPPETEER_HEADLESS variable ([#130](https://github.com/puppeteer/replay/issues/130)) ([041d257](https://github.com/puppeteer/replay/commit/041d257030bb9afe97524e13ad131567a3659300))

### [0.1.2](https://github.com/puppeteer/replay/compare/v0.1.1...v0.1.2) (2022-04-28)

### Features

- improved pointer events ([e76d828](https://github.com/puppeteer/replay/commit/e76d8283cdd09b494c41d7b0cdf8a2b386cfbf92))
- use Puppeteer's select to change select elements ([#72](https://github.com/puppeteer/replay/issues/72)) ([0b4e052](https://github.com/puppeteer/replay/commit/0b4e0527cc70b992fd24608c976fde0ba1b60f39))

### [0.1.1](https://github.com/puppeteer/replay/compare/v0.1.0...v0.1.1) (2022-03-24)

### Features

- implement a CLI to run multiple JSON files ([#66](https://github.com/puppeteer/replay/issues/66)) ([eedd349](https://github.com/puppeteer/replay/commit/eedd349453256ad533b8c04273dd2181559b46fa))

## [0.1.0](https://github.com/puppeteer/replay/compare/v0.0.5...v0.1.0) (2022-03-23)

### Bug Fixes

- expose Key to make sure it's included in types ([#64](https://github.com/puppeteer/replay/issues/64)) ([4693f7d](https://github.com/puppeteer/replay/commit/4693f7d24084eb4eb93f6c2da540571a891cb360)), closes [#63](https://github.com/puppeteer/replay/issues/63)

### [0.0.5](https://github.com/puppeteer/replay/compare/v0.0.4...v0.0.5) (2022-03-17)

### Bug Fixes

- waiting for events should start right before the main step action ([#57](https://github.com/puppeteer/replay/issues/57)) ([9f33e61](https://github.com/puppeteer/replay/commit/9f33e6153464729772be392cabb7b12c00bab330))

### [0.0.4](https://github.com/puppeteer/replay/compare/v0.0.3...v0.0.4) (2022-03-10)

### Features

- **PuppeteerRunnerExtension:** improve handling of SVG elements ([#41](https://github.com/puppeteer/replay/issues/41)) ([d709140](https://github.com/puppeteer/replay/commit/d7091409b2d86cbaaacb3b952d6686cc3fcdd4ec))

### Bug Fixes

- assert events for iframe navigations ([#44](https://github.com/puppeteer/replay/issues/44)) ([7817792](https://github.com/puppeteer/replay/commit/781779219e92efa17a125ddacdb9e81b57584645))

### [0.0.3](https://github.com/puppeteer/replay/compare/v0.0.2...v0.0.3) (2022-03-07)

### Features

- expose parseStep ([#37](https://github.com/puppeteer/replay/issues/37)) ([54e8561](https://github.com/puppeteer/replay/commit/54e8561bf6acbcae1df0062ab31dad3c20d5d00d))

### [0.0.2](https://github.com/puppeteer/replay/compare/v0.0.1...v0.0.2) (2022-03-01)

### Features

- emulate automation mode ([#35](https://github.com/puppeteer/replay/issues/35)) ([6caa57a](https://github.com/puppeteer/replay/commit/6caa57a2d71a7fdcec7c0406c6e808ccd95376ad))

### 0.0.1 (2022-02-22)

### Features

- implement runner API with extension points ([#4](https://github.com/puppeteer/replay/issues/4)) ([4bcb431](https://github.com/puppeteer/replay/commit/4bcb431a36b93dcf5bfddd42323b9d03e0fb64f2))
- implement stringify API with extension points ([#3](https://github.com/puppeteer/replay/issues/3)) ([961e79f](https://github.com/puppeteer/replay/commit/961e79f9d7c6eb1767f1266d0385c62f56f4eeec))
- sync various improvements ([#25](https://github.com/puppeteer/replay/issues/25)) ([3d68273](https://github.com/puppeteer/replay/commit/3d6827317fd06dad6efbfb74b0079e9880dee18f))

### Bug Fixes

- dynamic puppeteer import and runner iteration over steps ([#7](https://github.com/puppeteer/replay/issues/7)) ([103cf2d](https://github.com/puppeteer/replay/commit/103cf2d206241b99ce95bdf39a75ddb67c7c3fa6))
- improve code in runner ([#28](https://github.com/puppeteer/replay/issues/28)) ([da5521e](https://github.com/puppeteer/replay/commit/da5521e3fcffc6519300ae35c73d2c3f7f643b94))
- minor typos ([#21](https://github.com/puppeteer/replay/issues/21)) ([9b8cc01](https://github.com/puppeteer/replay/commit/9b8cc0174a0d0e9d33737d9b74ad6cacdf62a68d))
- rename to PuppeteerRunnerOwningBrowserExtension ([#10](https://github.com/puppeteer/replay/issues/10)) ([34579ab](https://github.com/puppeteer/replay/commit/34579abd353448d1e9fe123d4277717e3d313c06))
