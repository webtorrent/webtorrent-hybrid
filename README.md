# webtorrent-hybrid [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]

[travis-image]: https://img.shields.io/travis/webtorrent/webtorrent-hybrid/master.svg
[travis-url]: https://travis-ci.org/webtorrent/webtorrent-hybrid
[npm-image]: https://img.shields.io/npm/v/webtorrent-hybrid.svg
[npm-url]: https://npmjs.org/package/webtorrent-hybrid
[downloads-image]: https://img.shields.io/npm/dm/webtorrent-hybrid.svg
[downloads-url]: https://npmjs.org/package/webtorrent-hybrid
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com

### Streaming torrent client (with WebRTC support in Node.js)

In node.js, the `webtorrent` package only connects to normal TCP/UDP peers, not WebRTC peers. If you want to connect to all types of peers, including WebRTC peers, from node.js, you need to use this package (`webtorrent-hybrid`).

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
[`webtorrent`](https://github.com/webtorrent/webtorrent). Just `require('webtorrent-hybrid')`
instead of `require('webtorrent')`.

See the [WebTorrent docs](https://webtorrent.io/docs).

## License

MIT. Copyright (c) [Feross Aboukhadijeh](https://feross.org) and [WebTorrent, LLC](https://webtorrent.io).
