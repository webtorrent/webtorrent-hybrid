FROM node:slim

RUN apt-get update
RUN apt-get full-upgrade -y
RUN apt-get install -y libgtk2.0-0 libgconf-2-4 libasound2 libxtst6 libxss1 libnss3 xvfb git -y
RUN apt-get autoremove --purge -y
RUN rm -rf /var/lib/apt/lists/*
RUN npm i -g --unsafe webtorrent-hybrid
RUN mkdir -p /webtorrent


EXPOSE 8000
WORKDIR /webtorrent
ENTRYPOINT ["/usr/local/bin/webtorrent-hybrid"]
