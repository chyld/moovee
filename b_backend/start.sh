#!/bin/bash

rm -rf __pycache__
rm -rf .venv
rm -rf uv.lock

if [ -n "$MOOVEE_DEBUG" ]; then # check if MOOVEE_DEBUG is set
  uv run fastapi dev app.py
else
  uv run fastapi run app.py
fi
