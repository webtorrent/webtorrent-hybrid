import { announceList } from 'create-torrent'

globalThis.WEBTORRENT_ANNOUNCE = announceList
  .map(arr => arr[0])
  .filter(url => url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0)

console.warn('webtorrent-hybrid: This package is deprecated as of WebTorrent >= 2.3.0 as native WebRTC support has been added to WebTorrent. Please switch to using the "webtorrent" package.')
