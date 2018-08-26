// var WebTorrent = require('webtorrent-hybrid')
var WebTorrent = require('../index')
var fs = require('fs')

var client = new WebTorrent()

var torrentId = 'magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d'

console.log('torrentId:\t', torrentId)

client.add(torrentId, torrent => {
  var files = torrent.files
  var length = files.length
  // Stream each file to the disk
  files.forEach(file => {
    var source = file.createReadStream()
    var destination = fs.createWriteStream(file.name)
    source.on('end', () => {
      console.log('file:\t\t', file.name)
      // close after all files are saved
      if (!--length) process.exit()
    }).pipe(destination)
  })
})
