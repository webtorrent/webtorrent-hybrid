#!/bin/sh
# Detect running X server, load Xvfb on headless systems and starts a virtual buffer

if [ -z $(pidof X) ]; then

  if [ ! $(which "Xvfb") ]; then
    # TODO:
    # - check alternative package support
    if VERB="$( which apt-get )" 2> /dev/null; then
      sudo apt-get install xvfb
    elif VERB="$( which yum )" 2> /dev/null; then
      sudo yum install xorg-x11-server-Xvfb
    else
      echo "Could not determine your package manager. Please, check the instructions to install Xvfb in your enviroment"
      exit 2
    fi
  fi

  #Check if Xvfb was installed
  if [ $(which "Xvfb") ]; then
    running=$(pidof Xvfb)
    if [ -z "$running" ]; then
      kill running
    fi
    
    export DISPLAY="0:99"
    Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &
    echo "Xvfb runing"
  else
    echo "Xvfb is not installed in your system"
  fi
fi
