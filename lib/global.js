var createTorrent = require('create-torrent')
var ElectronWebRTC = require('electron-webrtc')

global.WEBTORRENT_ANNOUNCE = createTorrent.announceList
  .map(function (arr) {
    return arr[0]
  })
  .filter(function (url) {
    return url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0
  })

global.WRTC = function () {
  var wrtc = ElectronWebRTC()

  process.on('SIGINT', ensureCloseElectron)
  process.on('SIGTERM', ensureCloseElectron)

  wrtc.on('error', function (err, source) {
    if (err.message !== 'Daemon already closed') {
      console.error(err, source)
    }
  })

  function ensureCloseElectron () {
    process.removeListener('SIGINT', ensureCloseElectron)
    process.removeListener('SIGTERM', ensureCloseElectron)
    wrtc.close()
  }

  return wrtc
}
