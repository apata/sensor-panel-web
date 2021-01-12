FROM node:12-buster
ARG VERSION
ENV FIREBASE_TOOLS_VERSION=${VERSION}
ENV HOME=/home/node
EXPOSE 4000
EXPOSE 4500
EXPOSE 5000
EXPOSE 5001
EXPOSE 8080
EXPOSE 8085
EXPOSE 9000
EXPOSE 9005
RUN apt-get update && apt install -y \
    default-jre-headless \
    bash && \
    rm -rf /var/lib/apt/lists/* && \
    yarn global add firebase-tools@${VERSION} && \
    yarn cache clean && \
    firebase setup:emulators:firestore && \
    firebase -V && \
    java -version && \
    chown -R node:node $HOME
USER node
VOLUME $HOME/.cache
WORKDIR $HOME
