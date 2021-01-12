# Building Sensor Panel

Building Sensor Panel web app is a proof of concept app to monitor data sent by a wireless network of Internet of Things (IoT) sensors (currently simulated).

## System architectural concept

- simple cloud deployment pipelines (Firebase)
  - single repository for back-end and front-end
- shared Typescript models between back-end and front-end to simplify iterative changes and API changes
  - back-end as lambda function
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

### System dependencies

#### Linux / MacOS

- Node (version 12 specifically needed for Cloud Functions)
- npm package (globally installed) firebase-tools (version 9.1.2)
  - Run `firebase setup:emulators:firestore` to setup the emulator dependency
  - Java Runtime Environment is needed for this particular tool

#### Dockerized (experimental)

The development environment is almost fully dockerized (see [Dockerfile](./Dockerfile) and [docker-compose](./docker-compose.yml)), but there are some network bugs there to be worked out, which prevent full adoption. Dockerfile is based on https://github.com/AndreySenov/firebase-tools-docker image, but with non-alpine Linux so the shell commands would execute faster in the container.

Start with these experimental commands:

- `docker build --build-arg VERSION=9.1.2 . -t apata/firebase-tools:9.1.2-node12`
- `docker-compose up -d`
- `docker-compose exec emulators bash`

In the opened bash terminal, continue with the development mode or production mode commands

### Development mode

#### FE

- `npm install`
- `npm start`
- navigate to http://localhost:3000 to see the app
  - requests to non-static paths (example `GET /api/measurements`) are proxied to http://localhost:5001/sensor-panel/us-central1/app, which is the address for development BE

#### BE

- `cd functions`
- `npm install`
- `npm run serve`
- functions are now served from http://localhost:5001/sensor-panel/us-central1/
- navigate to http://localhost:4000 to see the emulator info panel with logs

### Production

The production command builds the FE, BE production versions and emulates the whole environment (FE, BE, Firestore Datastore) with some prefilled data.

- `npm run build && cd functions && npm run build && cd .. && firebase emulators:start --import="./emulator-data" --only functions,firestore,hosting`
- FE is at http://localhost:5000
- BE is at http://localhost:5001/sensor-panel/us-central1/
- Emulator panel with Firestore panel is at http://localhost:4000

### API

#### POST /api/sink

Accepts `application/json` in format as defined [here](./functions/src/models/SinkPayload.ts).
