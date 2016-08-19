# WebTorrent (with WebRTC support in Node.js)

[![Build Status][webtorrent-ti]][webtorrent-tu]
[![NPM Version][webtorrent-ni]][webtorrent-nu]
[![NPM Downloads][webtorrent-downloads-image]][webtorrent-downloads-url]

### Streaming torrent client for node environments

In node.js, the `webtorrent` package only connects to normal TCP/UDP peers, not WebRTC peers. If you want to connect to all types of peers, including WebRTC peers, from node.js, you need to use this package (`webtorrent-hybrid`).

Previous versions (0.x) of this package used [wrtc](https://github.com/js-platform/node-webrtc), a WebRTC implementation via native extensions, the current one is based on [electron-webrtc](https://github.com/mappum/electron-webrtc) (which in turn uses [electron-prebuilt](https://github.com/electron-userland/electron-prebuilt)) for better compatibility. It creates a hidden Electron process (which is based on Chromium, so WebRTC support is great!) and communicates with that process to enable WebRTC in Node.js. This adds a lot of overhead, so we are looking forward to using a pure JavaScript implementation, like perhaps [Node-RTCPeerConnection](https://github.com/nickdesaulniers/node-rtc-peer-connection) when it's ready.

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

### OS X

On OS X, this should Just Work™.

### Linux

The current version of `webtorrent-hybrid` requires a screen, since the headless Electron
instance expects one. If you're running in a screenless environment (like on a server),
you must use a virtual screen such as `xvfb`. You must install it before using
`webtorrent-hybrid`.

#### For Debian / Ubuntu:

```bash
sudo apt-get install xvfb
```

If you get an error about a missing .so file ("error while loading shared libraries"), use the search at the bottom of [packages.debian.org](https://packages.debian.org) to find out which packages in your release provide a given file.

On server editions, the following additional packages should be installed since Electron depends on them:

```bash
sudo apt-get install libgtk2.0-0 libxtst-dev libxss-dev libgconf2-dev libnss3 libasound2-dev
```

#### For CentOS / RHEL:

```bash
sudo yum install xorg-x11-server-Xvfb
```

## Usage

`webtorrent-hybrid` has the same command line interface (CLI) and module API as
[`webtorrent`](https://github.com/feross/webtorrent). Just `require('webtorrent-hybrid')`
instead of `require('webtorrent')`.

See the [WebTorrent docs](https://github.com/feross/webtorrent).

## License

MIT. Copyright (c) [WebTorrent, LLC](https://webtorrent.io).

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
