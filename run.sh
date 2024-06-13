#!/bin/bash

# Install dependencies
npm install --save @google/clasp

# Run the code
npx clasp login
npx clasp push --force
npx clasp run createEventsFromSheet
