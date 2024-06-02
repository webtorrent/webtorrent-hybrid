import WebTorrent from '../index.js'

const client = new WebTorrent()
const filePath = __filename

console.log('filePath:', filePath)

client.seed(filePath, torrent => {
  console.log('torrentId (info hash):', torrent.infoHash)
  // console.log('torrentId (magnet link):', torrent.magnetURI)
})
