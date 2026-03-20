# Kotlin Website — React Router 7 Migration

A migration of the kotlinlang.org homepage to React Router 7 Framework Mode with SSR.

## Requirements

- Node.js 20+
- npm

## Install

```bash
npm install
```

## Run in development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
npm run start
```

App will be available at [http://localhost:3000](http://localhost:3000).

## Docker

```bash
docker build -t kotlin-website .
docker run -p 3000:3000 kotlin-website
```

Open [http://localhost:3000](http://localhost:3000).
