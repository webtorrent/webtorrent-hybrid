#!/bin/sh
# Detect running X server, load Xvfb on headless systems and starts a virtual buffer

if [ -z $(pidof X) ]; then

  if [ ! $(which "Xvfb") ]; then
    # TODO:
    # - check alternative package support
    sudo apt-get install xvfb
  fi

  running=$(pidof Xvfb)
  if [ -z "$running" ]; then
    kill running
  fi

  export DISPLAY="0:99"
  Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
fi
