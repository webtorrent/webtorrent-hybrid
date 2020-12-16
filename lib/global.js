const createTorrent = require('create-torrent')
const nodeDataChannel = require('node-datachannel')

global.WEBTORRENT_ANNOUNCE = createTorrent.announceList
  .map(arr => arr[0])
  .filter(url => url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0)

global.WRTC = nodeDataChannel
