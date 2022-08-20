# Scavenger Hunt

A single page application

# Development

## Setup Steps

Add "start": "npx nodemon" to "scripts" in "package.json"

```
npm init -y
npm install express --save-dev
npm install nodemon --save-dev
npm install pg
```

## Setup Database

```
iTerm> psql postgres
psql> CREATE DATABASE scavenger_hunt;
psql> \q
iTerm> psql scavenger_hunt < db/schema.sql
iTerm> psql scavenger_hunt < db/seed.sql
```

## Start Server

```
npm start
```