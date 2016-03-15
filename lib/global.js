var wrtc = require('electron-webrtc')()

global.WRTC = wrtc

process.on('SIGINT', ensureCloseElectron)
process.on('SIGTERM', ensureCloseElectron)

var daemon = wrtc.electronDaemon

daemon.on('error', function (err) {
  if (err.message !== 'Daemon already closed') {
    console.error(err)
  }
})

function ensureCloseElectron () {
  process.removeListener('SIGINT', ensureCloseElectron)
  process.removeListener('SIGTERM', ensureCloseElectron)
  daemon.close()
}
