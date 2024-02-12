# syntax=docker/dockerfile:1.4

FROM --platform=$BUILDPLATFORM node:18 as builder

RUN mkdir /project
WORKDIR /project

RUN npm install -g @angular/cli@16

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
CMD ["ng", "serve", "--host", "0.0.0.0"]

FROM builder as dev-envs

# Aggiungi apt-get update prima di installare i pacchetti
RUN apt-get update && \
    apt-get install -y --no-install-recommends git

# Esegui altri comandi di sistema necessari
RUN useradd -s /bin/bash -m vscode && \
    groupadd docker && \
    usermod -aG docker vscode

# installa Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /

CMD ["ng", "serve", "--host", "0.0.0.0"]
