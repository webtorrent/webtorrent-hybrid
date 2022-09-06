const WebTorrent = require('../index')
const fs = require('fs')

const client = new WebTorrent()

const torrentId = 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d'

console.log('torrentId:\t', torrentId)

client.add(torrentId, torrent => {
  const files = torrent.files
  let length = files.length
  // Stream each file to the disk
  files.forEach(file => {
    const source = file.createReadStream()
    const destination = fs.createWriteStream(file.name)
    source.on('end', () => {
      console.log('file:\t\t', file.name)
      // close after all files are saved
      length -= 1
      if (!length) process.exit()
    }).pipe(destination)
  })
})
