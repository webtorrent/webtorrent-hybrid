# [6.0.0](https://github.com/webtorrent/webtorrent-hybrid/compare/v5.0.2...v6.0.0) (2024-06-02)


* BREAKING CHANGE: Deprecate webtorrent-hybrid (#195) ([fe511bf](https://github.com/webtorrent/webtorrent-hybrid/commit/fe511bf98a109b5bc7967a2853345a0b23da7b11)), closes [#195](https://github.com/webtorrent/webtorrent-hybrid/issues/195)


### BREAKING CHANGES

* Deprecate webtorrent-hybrid

This package is deprecated as of WebTorrent >= 2.3.0 as native WebRTC support has been added to WebTorrent. Please switch to using the "webtorrent" package.

* fix: Update ci to use NodeJS 16 to match package.json

* Update README.md

Update `Deprecated Warning` to `Deprecation Warning`

Co-authored-by: Cas_ <6506529+ThaUnknown@users.noreply.github.com>

* fix: re-add WEBTORRENT_ANNOUNCE which is used for adding websocket trackers to magnetURIs which do not already have them.

* feat: update webtorrent-cli to v5

## [5.0.2](https://github.com/webtorrent/webtorrent-hybrid/compare/v5.0.1...v5.0.2) (2022-02-01)


### Bug Fixes

* **deps:** update dependency webtorrent-cli to v4 ([#145](https://github.com/webtorrent/webtorrent-hybrid/issues/145)) ([7da7ddf](https://github.com/webtorrent/webtorrent-hybrid/commit/7da7ddfcb1f163b331f248395319e5fd8ff48752))

## [5.0.1](https://github.com/webtorrent/webtorrent-hybrid/compare/v5.0.0...v5.0.1) (2021-09-14)


### Bug Fixes

* webrtc import ([#143](https://github.com/webtorrent/webtorrent-hybrid/issues/143)) ([3b5d9bb](https://github.com/webtorrent/webtorrent-hybrid/commit/3b5d9bb0a21fceef76f25a113ebede40fce73338))

# [5.0.0](https://github.com/webtorrent/webtorrent-hybrid/compare/v4.1.3...v5.0.0) (2021-08-26)


### chore

* switch to ESM ([#141](https://github.com/webtorrent/webtorrent-hybrid/issues/141)) ([cbe8c3b](https://github.com/webtorrent/webtorrent-hybrid/commit/cbe8c3b8fff52a6fe9c86e531967566c5a889b12))


### BREAKING CHANGES

* switch to ESM

## [4.1.3](https://github.com/webtorrent/webtorrent-hybrid/compare/v4.1.2...v4.1.3) (2021-08-18)


### Bug Fixes

* dockerfile missing dependency ([#137](https://github.com/webtorrent/webtorrent-hybrid/issues/137)) ([2523b48](https://github.com/webtorrent/webtorrent-hybrid/commit/2523b48e1efd580139f27951edb130f96111d8a0))

## [4.1.2](https://github.com/webtorrent/webtorrent-hybrid/compare/v4.1.1...v4.1.2) (2021-08-06)


### Bug Fixes

* **deps:** update dependency create-torrent to v5 ([#134](https://github.com/webtorrent/webtorrent-hybrid/issues/134)) ([012f3fd](https://github.com/webtorrent/webtorrent-hybrid/commit/012f3fd702f6cfd70bb6cc29762412f78010daf7))

## [4.1.1](https://github.com/webtorrent/webtorrent-hybrid/compare/v4.1.0...v4.1.1) (2021-07-23)


### Bug Fixes

* add semantic release, switch CI ([f48c8ca](https://github.com/webtorrent/webtorrent-hybrid/commit/f48c8ca1ae4daa7ebdf5f86e2a59ba29ee3c05e6))

# [4.1.0](https://github.com/webtorrent/webtorrent-hybrid/compare/v4.0.3...v4.1.0) (2021-05-31)


### Features

* renovate and semantic-release, webtorrent@1 ([f175996](https://github.com/webtorrent/webtorrent-hybrid/commit/f175996e4528d57f4c762046291eaf19aee29965))
