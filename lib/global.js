var createTorrent = require('create-torrent')
var wrtc = require('electron-webrtc')()

global.WRTC = wrtc

global.WEBTORRENT_ANNOUNCE = createTorrent.announceList
  .map(function (arr) {
    return arr[0]
  })
  .filter(function (url) {
    return url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0
  })

process.on('SIGINT', ensureCloseElectron)
process.on('SIGTERM', ensureCloseElectron)

wrtc.on('error', (err, source) => {
  if (err.message !== 'Daemon already closed') {
    console.error(err, source)
  }
})

function ensureCloseElectron () {
  process.removeListener('SIGINT', ensureCloseElectron)
  process.removeListener('SIGTERM', ensureCloseElectron)
  wrtc.close()
}
