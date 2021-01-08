let WebTorrent = require("webtorrent-hybrid/index");
let fs = require("fs");
const path = require("path");

let client = new WebTorrent();
let file;
const torrentUrl =
  "magnet:?xt=urn:btih:6a9759bffd5c0af65319979fb7832189f4f3c35d";
const createDirectoryPro = (directory) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(directory, { recursive: true }, (err) => {
      if (err) {
        console.log("Error is happend in creation of directory");
        reject("Could not make directory");
      }
      resolve("Successfully created directory");
    });
  });
};

const checkDirectoryPro = (directory) => {
  return new Promise((resolve, reject) => {
    fs.access(directory, async (err) => {
      if (err) {
        console.log("Creating directory because directory is not exist");
        //directory doesn't exist so create it and then start downloading
        try {
          let dirmsg = await createDirectoryPro(directory);
          resolve(dirmsg);
        } catch (err) {
          console.log(err);
        }
      }
      resolve("Dirctory already exist.");
    });
  });
};

let videoTorrent = client.add(
  torrentUrl,
  { announce: ["wss://tracker.openwebtorrent.com"] },
  (torrent) => {
    try {
      // Stream each file to the disk
      const files = torrent.files;
      let length = files.length;
      files.forEach(async (file) => {
        let directory = file.path.replace(file.name, "");
        try {
          let directoryMsg = await checkDirectoryPro(directory);
          console.log(directoryMsg);
        } catch (err) {
          console.log(err);
        }
        console.log("file:\t\t" + file.name);
        const source = file.createReadStream();
        const destination = fs.createWriteStream(file.path);

        source
          .on("end", () => {
            console.log("file:\t\t", file.name);
            // close after all files are saved
            length -= 1;
            console.log("download remining = " + length);
            if (!length) process.exit();
          })
          .pipe(destination);
      });
    } catch (err) {
      console.log(err);
    }
  }
);
//for catching errors
videoTorrent.on("error", (err) => {
  if (err) {
    console.log("torrent error-", err);
  }
});
