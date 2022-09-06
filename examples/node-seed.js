import WebTorrent from '../index.js'
import { fileURLToPath } from 'url'

const client = new WebTorrent()
const filePath = fileURLToPath(import.meta.url)

console.log('filePath:', filePath)

client.seed(filePath, torrent => {
  console.log('torrentId (info hash):', torrent.infoHash)
  // console.log('torrentId (magnet link):', torrent.magnetURI)
})
