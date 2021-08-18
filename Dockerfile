FROM node:slim

RUN apt-get update && \
	apt-get full-upgrade -y && \
	apt-get install -y libgtk2.0-0 libgconf-2-4 libasound2 libxtst6 libxss1 libnss3 xvfb git -y && \
	apt-get autoremove --purge -y && \
	rm -rf /var/lib/apt/lists/* && \
	npm i -g node-pre-gyp

RUN npm i -g webtorrent-hybrid && \
	mkdir -p /webtorrent

EXPOSE 8000
WORKDIR /webtorrent
ENTRYPOINT ["/usr/local/bin/webtorrent-hybrid"]
