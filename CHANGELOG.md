# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [3.1.0](https://github.com/puppeteer/replay/compare/v3.0.0...v3.1.0) (2024-08-07)


### Features

* support stringifying flows for Firefox ([#845](https://github.com/puppeteer/replay/issues/845)) ([94319cd](https://github.com/puppeteer/replay/commit/94319cd1f98511de2bf85fe62674152a5e227371))


### Bug Fixes

* remove isOOPFrame check ([#850](https://github.com/puppeteer/replay/issues/850)) ([fd9f974](https://github.com/puppeteer/replay/commit/fd9f974d6e7dc59f92e3dea0c5f7b087cbc8135f))

## [3.0.0](https://github.com/puppeteer/replay/compare/v2.13.4...v3.0.0) (2024-02-05)


### ⚠ BREAKING CHANGES

* make replay compatible with Puppeteer v22 ([#758](https://github.com/puppeteer/replay/issues/758))
* update min version to Node 18 ([#755](https://github.com/puppeteer/replay/issues/755))

### Features

* update min version to Node 18 ([#755](https://github.com/puppeteer/replay/issues/755)) ([41c3d10](https://github.com/puppeteer/replay/commit/41c3d1060ed35a47f790c6c35dd7251fb763fe37))


### Bug Fixes

* remove deprecated waitForTimeout ([#747](https://github.com/puppeteer/replay/issues/747)) ([23613b8](https://github.com/puppeteer/replay/commit/23613b87b171087ee9efbf8bbcd6e178e0dd1cac))


### Code Refactoring

* make replay compatible with Puppeteer v22 ([#758](https://github.com/puppeteer/replay/issues/758)) ([e594f50](https://github.com/puppeteer/replay/commit/e594f50174507c03dfd2e04fe70b2bc04f69773d))

## [2.13.4](https://github.com/puppeteer/replay/compare/v2.13.3...v2.13.4) (2023-09-19)


### Bug Fixes

* update dependencies ([#662](https://github.com/puppeteer/replay/issues/662)) ([e29ffc7](https://github.com/puppeteer/replay/commit/e29ffc7c6242170f8550d78e7feb1328bacfd4f6))

## [2.13.3](https://github.com/puppeteer/replay/compare/v2.13.2...v2.13.3) (2023-08-03)


### Bug Fixes

* update puppeteer ([#627](https://github.com/puppeteer/replay/issues/627)) ([6be7a6a](https://github.com/puppeteer/replay/commit/6be7a6a307c560b5c0f214c93759ab96def6204a))

## [2.13.2](https://github.com/puppeteer/replay/compare/v2.13.1...v2.13.2) (2023-07-18)


### Bug Fixes

* pierce selectors should be generated using :scope ([#613](https://github.com/puppeteer/replay/issues/613)) ([e8abd93](https://github.com/puppeteer/replay/commit/e8abd93634e17469282a3f108c55512bea1a292a))
* use correct frame target ([#618](https://github.com/puppeteer/replay/issues/618)) ([9a998e4](https://github.com/puppeteer/replay/commit/9a998e40379ef3bebda36f4abfc429756835dc8d))

## [2.13.1](https://github.com/puppeteer/replay/compare/v2.13.0...v2.13.1) (2023-07-12)


### Bug Fixes

* bumps version for Node and TS target ([#607](https://github.com/puppeteer/replay/issues/607)) ([3d243e4](https://github.com/puppeteer/replay/commit/3d243e43d0ac93f1583a808bc6c05fb924e05efb))

## [2.13.0](https://github.com/puppeteer/replay/compare/v2.12.3...v2.13.0) (2023-07-10)


### Features

* stringify helpers only if used ([#602](https://github.com/puppeteer/replay/issues/602)) ([b7d8cdd](https://github.com/puppeteer/replay/commit/b7d8cdd534e72f5959bb5d8d97f7cab07750a704))

## [2.12.3](https://github.com/puppeteer/replay/compare/v2.12.2...v2.12.3) (2023-07-07)


### Bug Fixes

* remove overescaping ([#598](https://github.com/puppeteer/replay/issues/598)) ([f3a96ac](https://github.com/puppeteer/replay/commit/f3a96ac3fed0300778cc39885b6fc87728921261))

## [2.12.2](https://github.com/puppeteer/replay/compare/v2.12.1...v2.12.2) (2023-07-07)


### Bug Fixes

* access locators via a shortcut ([#595](https://github.com/puppeteer/replay/issues/595)) ([1dacd34](https://github.com/puppeteer/replay/commit/1dacd34f0dd7f04527ad25e807fd33a006666591))

## [2.12.1](https://github.com/puppeteer/replay/compare/v2.12.0...v2.12.1) (2023-07-04)


### Bug Fixes

* bundle cssesc to be used in the browser ([#590](https://github.com/puppeteer/replay/issues/590)) ([1d79942](https://github.com/puppeteer/replay/commit/1d7994219f3bd967b5e71c1dceff2beb120bc10b))

## [2.12.0](https://github.com/puppeteer/replay/compare/v2.11.2...v2.12.0) (2023-07-04)


### Features

* use locators in Puppeteer extensions ([#569](https://github.com/puppeteer/replay/issues/569)) ([92d7666](https://github.com/puppeteer/replay/commit/92d76666abf73de3cb3d1bc0ffc3b7276f4ed376))

## [2.11.2](https://github.com/puppeteer/replay/compare/v2.11.1...v2.11.2) (2023-06-12)


### Bug Fixes

* update the spec for hover ([#570](https://github.com/puppeteer/replay/issues/570)) ([a11bb27](https://github.com/puppeteer/replay/commit/a11bb27c9cde24734bbbaea0ae70be5728a697c7))

## [2.11.1](https://github.com/puppeteer/replay/compare/v2.11.0...v2.11.1) (2023-05-16)


### Bug Fixes

* use `count` for double click ([#524](https://github.com/puppeteer/replay/issues/524)) ([f64a501](https://github.com/puppeteer/replay/commit/f64a501b1f9a2d6236a15c6426049449396490dd))

## [2.11.0](https://github.com/puppeteer/replay/compare/v2.10.2...v2.11.0) (2023-04-20)


### Features

* move `duration` to click attributes ([#507](https://github.com/puppeteer/replay/issues/507)) ([a87dbdd](https://github.com/puppeteer/replay/commit/a87dbdd1502e6c4196341fd38da86c38d25177b5))

## [2.10.2](https://github.com/puppeteer/replay/compare/v2.10.1...v2.10.2) (2023-03-07)


### Bug Fixes

* check selector length ([#481](https://github.com/puppeteer/replay/issues/481)) ([188d198](https://github.com/puppeteer/replay/commit/188d1981917d51c17d1936631c8e9575cd7c8b04))

## [2.10.1](https://github.com/puppeteer/replay/compare/v2.10.0...v2.10.1) (2023-02-17)


### Bug Fixes

* find the svg owner element ([#473](https://github.com/puppeteer/replay/issues/473)) ([f84617a](https://github.com/puppeteer/replay/commit/f84617ad3ebdb3f0f4f7da5f139e904b35a0577f))

## [2.10.0](https://github.com/puppeteer/replay/compare/v2.9.0...v2.10.0) (2023-02-13)


### Features

* Lighthouse extension ([#467](https://github.com/puppeteer/replay/issues/467)) ([c2f3ce8](https://github.com/puppeteer/replay/commit/c2f3ce851b8da76e1a65ca9ca895b822890993d1))

## [2.9.0](https://github.com/puppeteer/replay/compare/v2.8.0...v2.9.0) (2023-02-01)


### Features

* add `pierce` selector support ([#451](https://github.com/puppeteer/replay/issues/451)) ([c6356b6](https://github.com/puppeteer/replay/commit/c6356b6877d4ff5cc6200d83a0f86c6e4b1d599a))

## [2.8.0](https://github.com/puppeteer/replay/compare/v2.7.1...v2.8.0) (2023-01-31)


### Features

* CLI to test extension implementations ([#435](https://github.com/puppeteer/replay/issues/435)) ([edd9628](https://github.com/puppeteer/replay/commit/edd962835efa930621be9b1311245334b327e72c))

## [2.7.1](https://github.com/puppeteer/replay/compare/v2.7.0...v2.7.1) (2022-12-22)


### Bug Fixes

* add parsing for `visible`, `attributes`, and `properties` ([#419](https://github.com/puppeteer/replay/issues/419)) ([856d6dd](https://github.com/puppeteer/replay/commit/856d6dd20a550dbaa3aa59cb2b15da0ba5c9f289))

## [2.7.0](https://github.com/puppeteer/replay/compare/v2.6.1...v2.7.0) (2022-12-16)


### Features

* add `visible`, `properties`, and `attributes` to `waitForElement` ([#412](https://github.com/puppeteer/replay/issues/412)) ([95ac621](https://github.com/puppeteer/replay/commit/95ac6217e373bb7f03845cfa30b1f61aac581ab0))

## [2.6.1](https://github.com/puppeteer/replay/compare/v2.6.0...v2.6.1) (2022-12-06)


### Bug Fixes

* support typescript commonjs modules using moduleresolution nodenext  ([#401](https://github.com/puppeteer/replay/issues/401)) ([67c5b23](https://github.com/puppeteer/replay/commit/67c5b234ac2a50568a2611bb321e961e8e3e6894))

## [2.6.0](https://github.com/puppeteer/replay/compare/v2.5.0...v2.6.0) (2022-11-23)


### Features

* add JSONStringifyExtension with source map support ([#393](https://github.com/puppeteer/replay/issues/393)) ([92cf062](https://github.com/puppeteer/replay/commit/92cf06233f97f57ad0e29f2dd69e27dd1267e544))
* format JSON as JS ([#395](https://github.com/puppeteer/replay/issues/395)) ([d74e793](https://github.com/puppeteer/replay/commit/d74e793abeaf1aecdb124ee4451a183eefe4b5b9))

## [2.5.0](https://github.com/puppeteer/replay/compare/v2.4.0...v2.5.0) (2022-11-22)


### Features

* add utility to strip source maps ([#391](https://github.com/puppeteer/replay/issues/391)) ([179d8f4](https://github.com/puppeteer/replay/commit/179d8f49ab33d8eba28277d257479022c5e8f796))


### Bug Fixes

* change vlq encoding to encode only positive ints ([#389](https://github.com/puppeteer/replay/issues/389)) ([3237408](https://github.com/puppeteer/replay/commit/32374086156fd29474304517a0b3a7f98347ff2a))

## [2.4.0](https://github.com/puppeteer/replay/compare/v2.3.0...v2.4.0) (2022-11-18)


### Features

* generate recorder sourcemaps ([#384](https://github.com/puppeteer/replay/issues/384)) ([ac253a4](https://github.com/puppeteer/replay/commit/ac253a4984586d5e532d8b5bce552816c41bd6e5))
* parse source map ([#386](https://github.com/puppeteer/replay/issues/386)) ([78c4b98](https://github.com/puppeteer/replay/commit/78c4b98ffab0915f8d457572509de3ea465a0269))

## [2.3.0](https://github.com/puppeteer/replay/compare/v2.2.0...v2.3.0) (2022-11-16)


### Features

* add PuppeteerReplayStringifyExtension ([#381](https://github.com/puppeteer/replay/issues/381)) ([f1abc72](https://github.com/puppeteer/replay/commit/f1abc72e9ee7d95bc35d07c59ea79626ee9366a6))

## [2.2.0](https://github.com/puppeteer/replay/compare/v2.1.0...v2.2.0) (2022-11-09)


### Features

* expose getSelectorType ([#376](https://github.com/puppeteer/replay/issues/376)) ([11eec45](https://github.com/puppeteer/replay/commit/11eec4524c134cc19bc074c14080d738dcafb1ac))

## [2.1.0](https://github.com/puppeteer/replay/compare/v2.0.2...v2.1.0) (2022-11-02)


### Features

* allow the runner to run beforeAll/afterAll hooks ([#360](https://github.com/puppeteer/replay/issues/360)) ([3c4ece0](https://github.com/puppeteer/replay/commit/3c4ece03079a0dbc4f6f44f74e3b25fbff1e2034))

## [2.0.2](https://github.com/puppeteer/replay/compare/v2.0.1...v2.0.2) (2022-10-27)


### Bug Fixes

* fix files published via npm ([#358](https://github.com/puppeteer/replay/issues/358)) ([4600162](https://github.com/puppeteer/replay/commit/4600162f0357177fd60e89088591da16186721ec))

## [2.0.1](https://github.com/puppeteer/replay/compare/v2.0.0...v2.0.1) (2022-10-27)


### Bug Fixes

* remove misc. files from pack ([#356](https://github.com/puppeteer/replay/issues/356)) ([792f3ef](https://github.com/puppeteer/replay/commit/792f3efa746daedfa97a2a63050e4525ab5c2172))

## [2.0.0](https://github.com/puppeteer/replay/compare/v1.3.2...v2.0.0) (2022-10-27)


### ⚠ BREAKING CHANGES

* the user flow parameter in the runner extensions is now optional

### Features

* expose runner APIs for running individual steps ([#215](https://github.com/puppeteer/replay/issues/215)) ([4ef380d](https://github.com/puppeteer/replay/commit/4ef380d2553552b4021d922dae65fc6a278c1220))


### Bug Fixes

* align typing behaviour between runner and stringifier ([#342](https://github.com/puppeteer/replay/issues/342)) ([50aae4a](https://github.com/puppeteer/replay/commit/50aae4a00e873bbb84e4abdc510fa890636b73f1))
* allow specifying no flow when creating a runner ([#354](https://github.com/puppeteer/replay/issues/354)) ([d920654](https://github.com/puppeteer/replay/commit/d920654620da3f5984c41e709016b5fa641b8f20))

## [1.3.2](https://github.com/puppeteer/replay/compare/v1.3.1...v1.3.2) (2022-10-21)


### Bug Fixes

* prevent bundling Lighthouse ([#337](https://github.com/puppeteer/replay/issues/337)) ([6a447ee](https://github.com/puppeteer/replay/commit/6a447ee5f3372bf9105a34337f75cf308ce84d82))

## [1.3.1](https://github.com/puppeteer/replay/compare/v1.3.0...v1.3.1) (2022-10-05)


### Bug Fixes

* using the correct ('navigate') step type within the parseNavigateStep method ([#317](https://github.com/puppeteer/replay/issues/317)) ([1131dac](https://github.com/puppeteer/replay/commit/1131dac5f04dcac5a3026f28935c3195b1d3289a))

## [1.3.0](https://github.com/puppeteer/replay/compare/v1.2.2...v1.3.0) (2022-09-21)


### Features

* XPath and Text selector types are now supported ([#309](https://github.com/puppeteer/replay/issues/309)) ([bc066e5](https://github.com/puppeteer/replay/commit/bc066e5c110d19550bd83f56ec4a5b9a60eeb4cc))

## [1.2.2](https://github.com/puppeteer/replay/compare/v1.2.1...v1.2.2) (2022-09-20)


### Bug Fixes

* remove Lighthouse types ([#307](https://github.com/puppeteer/replay/issues/307)) ([017ae48](https://github.com/puppeteer/replay/commit/017ae4812b5eccf2e4437c38d2f8f7aefa207c7a))

## [1.2.1](https://github.com/puppeteer/replay/compare/v1.2.0...v1.2.1) (2022-09-20)


### Bug Fixes

* ensure the right order of waitForSelector and scrollIntoView ([#303](https://github.com/puppeteer/replay/issues/303)) ([dd35372](https://github.com/puppeteer/replay/commit/dd35372c92c7e798e0f01f03230023e78cea2d04))

## [1.2.0](https://github.com/puppeteer/replay/compare/v1.1.2...v1.2.0) (2022-09-14)


### Features

* add Lighthouse runner extension ([#281](https://github.com/puppeteer/replay/issues/281)) ([e3ace90](https://github.com/puppeteer/replay/commit/e3ace909b9400c460abc6738099fb025083a105e))

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
