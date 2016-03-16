# WebTorrent Hybrid Client (Node.js)

[![Build Status][webtorrent-ti]][webtorrent-tu]
[![NPM Version][webtorrent-ni]][webtorrent-nu]
[![NPM Downloads][webtorrent-downloads-image]][webtorrent-downloads-url]


### Streaming torrent client for node environments

In node.js, `webtorrent` no longer connects to WebRTC peers, just normal TCP/UDP peers. If you want to connect to all types of peers, including WebRTC peers, from node.js, you need to use this package (`webtorrent-hybrid`).

While previous versions were using [wrtc](https://github.com/js-platform/node-webrtc), a WebRTC implementation via native extensions, for better compatibility the current one is based on [electron-webrtc](https://github.com/mappum/electron-webrtc). Its creating a hidden electron process which communicates with the Chromium API in the background. Since it comes with the overhead of [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt) we are looking further  for a seamless integration through other implementations like [Node-RTCPeerConnection](https://github.com/nickdesaulniers/node-rtc-peer-connection).

To run this package on a headless server execute [the provided script](bin/prepareHeadless.sh) or follow [these instructions](https://github.com/mappum/electron-webrtc#running-on-a-headless-server).

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

## Install

To install WebTorrent:

```bash
npm install webtorrent-hybrid
```

To install a `webtorrent-hybrid` command line program, run:

```bash
npm install webtorrent-hybrid -g
```

## Usage

`webtorrent-hybrid` has the same command line interface (CLI) and module API as
[`webtorrent`](https://github.com/feross/webtorrent). Just `require('webtorrent-hybrid')`
instead of `require('webtorrent')`.

See the [WebTorrent docs](https://github.com/feross/webtorrent).

## License

MIT. Copyright (c) [Feross Aboukhadijeh](http://feross.org).

[webtorrent]: https://github.com/feross/webtorrent-hybrid
[webtorrent-ti]: https://img.shields.io/travis/feross/webtorrent-hybrid/master.svg
[webtorrent-tu]: https://travis-ci.org/feross/webtorrent-hybrid
[webtorrent-ni]: https://img.shields.io/npm/v/webtorrent-hybrid.svg
[webtorrent-nu]: https://npmjs.org/package/webtorrent-hybrid
[webtorrent-downloads-image]: https://img.shields.io/npm/dm/webtorrent-hybrid.svg
[webtorrent-downloads-url]: https://npmjs.org/package/webtorrent-hybrid
[webtorrent-gratipay-image]: https://img.shields.io/gratipay/feross.svg
[webtorrent-gratipay-url]: https://gratipay.com/feross/
[webtorrent-sauce-image]: https://saucelabs.com/browser-matrix/webtorrent-hybrid.svg
[webtorrent-sauce-url]: https://saucelabs.com/u/webtorrent-hybrid
