# Sensor Panel

![Sensor panel app high-level concept diagram](https://docs.google.com/drawings/d/e/2PACX-1vROmTEvFREVsHD1WEePCfTvLpxR4lVtNDJuhdq-pQKTOXSTf0dN4S2qTg2E35JbWs68IjrzibMs_kGH/pub?w=849&h=223)

Sensor Panel web app (https://sensor-panel.web.app) is a proof of concept app to monitor data sent by a network of Internet of Things (IoT) sensors (currently simulated with a Google Cloud scheduled function that runs every 3 minutes).

## System architectural concept

- simple cloud deployment pipelines (Firebase)
  - single repository for backend and frontend
- shared Typescript models between backend and frontend to simplify iterative changes and API changes
  - backend as lambda function
- cloud data store, not database
  - self-maintaining with scheduled functions

[My considerations for choosing this platform](https://gist.github.com/apata/520226140e6067cb5fe770afc166befe)

## Technologies

### Front-end

- Typescript
- React single page app (bootstrapped with create-react-app)
- D3.js data visualisation library

### Back-end

- Typescript
- Express "server" as Firebase Cloud Function https endpoint

### Data persistence

- Firebase Firestore

## Running locally

There are two options to run the project locally.

### Option 1: Start the development Docker container

The development environment is containerised for convenience (see [Dockerfile](./firebase-tools/Dockerfile) and [docker-compose](./docker-compose.yml)). Dockerfile is based on https://github.com/AndreySenov/firebase-tools-docker image, but with non-alpine Linux so the shell commands would execute faster in the container.

Start the development container with these commands:

- `docker-compose up -d`
- `docker-compose exec emulators bash`
- In the opened bash terminal, continue with the development mode or production mode commands.

### Option 2: Install the dependencies manually (Linux / MacOS)

- Install Node (version 12, specifically needed for Cloud Functions)
- Install NPM package `firebase-tools` globally (for version, please see VERSION build argument in [docker-compose](./docker-compose.yml) file)
- Install a Java Runtime Environment (for version, see [Dockerfile](./firebase-tools/Dockerfile))
- Run `firebase setup:emulators:firestore` to install emulators
- In your terminal, continue with the development mode or production mode commands.

### Run in development mode

Run the following two command sets to get started

#### FE

- `npm install` to install the depedencies
- `npm start` to start webpack development server
- navigate to http://localhost:3000 to see the FE
  - changes to files in `src` folder will cause the FE to reload
  - requests to non-static paths (example `GET /api/measurements`) are proxied to http://localhost:5001/sensor-panel/us-central1/app, which is the address for development BE

#### BE

- `cd functions`
- `npm install` to install the dependencies
- `npm run serve` to start the firebase functions and firestore emulator
- BE is deployed to http://localhost:5001/sensor-panel/us-central1/
  - Changes to files in `functions/src` will not be active until `npm run serve` is run again
  - Function logs are accessible at http://localhost:4000/logs
- Firestore Emulator UI is accessible at http://localhost:4000/firestore

### Run in production mode

The production command set builds the FE and BE production versions and emulates the whole environment (FE, BE, Firestore) with some prefilled data in Firestore.

- `npm install && cd functions && npm install && cd ..` to install the dependencies
- `npm run build && cd functions && npm run build && cd .. && firebase emulators:start --import="./emulator-data" --only functions,firestore,hosting`
- FE is deployed to http://localhost:5000
- BE is deployed to http://localhost:5001/sensor-panel/us-central1/
  - Function logs are accessible at http://localhost:4000/logs
- Firestore Emulator UI is accessible at http://localhost:4000/firestore

## API info

### POST /api/sink

Accepts `application/json` in format as defined [here](./functions/src/models/SinkPayload.ts).
