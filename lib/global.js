var createTorrent = require('create-torrent')
var wrtc = require('wrtc')

global.WRTC = wrtc

global.WEBTORRENT_ANNOUNCE = createTorrent.announceList
  .map(function (arr) {
    return arr[0]
  })
  .filter(function (url) {
    return url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0
  })

console.log(global.WEBTORRENT_ANNOUNCE)
