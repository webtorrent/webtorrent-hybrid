const createTorrent = require('create-torrent')
const ElectronWebRTC = require('electron-webrtc')

global.WEBTORRENT_ANNOUNCE = createTorrent.announceList
  .map(arr => arr[0])
  .filter(url => url.indexOf('wss://') === 0 || url.indexOf('ws://') === 0)

global.WRTC = () => {
  const wrtc = ElectronWebRTC()

  const ensureCloseElectron = () => {
    process.removeListener('SIGINT', ensureCloseElectron)
    process.removeListener('SIGTERM', ensureCloseElectron)
    wrtc.close()
  }

  process.on('SIGINT', ensureCloseElectron)
  process.on('SIGTERM', ensureCloseElectron)

  wrtc.on('error', (err, source) => {
    if (err.message !== 'Daemon already closed') {
      console.error(err, source)
    }
  })

  return wrtc
}
