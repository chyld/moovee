#! /bin/bash

./scripts/stage-1.sh

if [ -n "$MOOVEE_DEBUG" ]; then # check if MOOVEE_DEBUG is set
    npx nodemon --watch src --ext js,html,css --exec "./scripts/stage-2.sh"
else
    ./scripts/stage-2.sh
fi
