// var WebTorrent = require('webtorrent-hybrid')
var WebTorrent = require('../index')

var client = new WebTorrent()

var filePath = './node-seed.js'

console.log('filePath:', filePath)

client.seed(filePath, function (torrent) {
  console.log('torrentId (info hash):', torrent.infoHash)
  // console.log('torrentId (magnet link):', torrent.magnetURI)
})
