#!/bin/bash

if [ -n "$MOOVEE_DEBUG" ]; then # check if MOOVEE_DEBUG is set
  uv run fastapi dev app.py
else
  uv run fastapi run app.py
fi
