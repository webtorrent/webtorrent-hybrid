const createTorrent = require('create-torrent')
const wrtc = require('wrtc')

globalThis.WEBTORRENT_ANNOUNCE = createTorrent.announceList
  .map(arr => arr[0])
  .filter(url => url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0)

globalThis.WRTC = wrtc
