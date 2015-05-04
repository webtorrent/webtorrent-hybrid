# WebTorrent Hybrid Client (Node.js)

[![Build Status][webtorrent-ti]][webtorrent-tu]
[![NPM Version][webtorrent-ni]][webtorrent-nu]
[![NPM Downloads][webtorrent-downloads-image]][webtorrent-downloads-url]


### Streaming torrent client for node & the browser

In node.js, `webtorrent` no longer connects to WebRTC peers, just normal TCP/UDP peers. If you want to connect to all types of peers, including WebRTC peers, from node.js, you need to use this package (`webtorrent-hybrid`).

The `wrtc` dependency (which provides WebRTC support in node.js) can be a bit difficult/slow to install and lacks Windows support, so we didn't want to burden all users of `webtorrent` with that process. If you just want to use WebTorrent in the browser, or in node.js to connect to normal TCP/UDP peers, then you can depend on [`webtorrent`](https://github.com/feross/webtorrent), which will be faster to install.

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
[webtorrent-ti]: https://img.shields.io/travis/feross/webtorrent-hybrid.svg?style=flat
[webtorrent-tu]: https://travis-ci.org/feross/webtorrent-hybrid
[webtorrent-ni]: https://img.shields.io/npm/v/webtorrent-hybrid.svg?style=flat
[webtorrent-nu]: https://npmjs.org/package/webtorrent-hybrid
[webtorrent-downloads-image]: https://img.shields.io/npm/dm/webtorrent-hybrid.svg?style=flat
[webtorrent-downloads-url]: https://npmjs.org/package/webtorrent-hybrid
[webtorrent-gratipay-image]: https://img.shields.io/gratipay/feross.svg?style=flat
[webtorrent-gratipay-url]: https://gratipay.com/feross/
[webtorrent-sauce-image]: https://saucelabs.com/browser-matrix/webtorrent-hybrid.svg
[webtorrent-sauce-url]: https://saucelabs.com/u/webtorrent-hybrid
