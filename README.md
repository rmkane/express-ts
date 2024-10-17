# Express with TypeScript

This is a basic setup for an Express server written in TypeScript.

## Table of contents

- [Setup](#setup)
  - [Running in a Node.js environment](#running-in-a-nodejs-environment)
    - [Prerequisites](#prerequisites)
    - [Commands for pnpm](#commands-for-pnpm)
  - [Running in a Bun environment](#running-in-a-bun-environment)
    - [Commands for bun](#commands-for-bun)

## Setup

### Running in a Node.js environment

If you ran this as a single TypeScript file:

```shell
node --experimental-strip-types --no-warnings ./src/index.ts
```

#### Prerequisites

This project uses `pnpm` as the dependency manager. Also, TypeScript should preferrably be installed globally.

```shell
npm i -g pnpm typescript
```

#### Commands for pnpm

Here are the available commands:

- `pnpm install` ~ Install the project dependencies
- `pnpm dev` ~ Run the TypeScript index file directly using `tsx`
- `pnpm dev:watch` ~ Same ad `dev`, but reloads the server on change
- `pnpm compile` ~ Uses `tsc` to compile to ES modules in `dist/`
  - **Note:** After running this, you can call `node dist/index.js` to start the server
- `pnpm build` ~ Uses `esbuild` to build a bundle targeted for `node`
  - **Note:** After running this, you can call `node dist/bundle.js` to start the server
- `pnpm clean`  ~ Remove the `dist/` directory

### Running in a Bun environment

You can easily install the Bun environemnt via `npm`:

```shell
npm i -g bun
```

#### Commands for bun

Here are the available commands:

**Note:** If you previously ran `npm` or `pnpm` to install dependencies, you wikll need to remove the `node_modules/` directory prior to compiling.

- `bun install` ~ Install the project dependencies
- `bun src/index.ts` ~ Run the server
- `bun --hot src/index.ts` ~ Run dev HMR
- `bun --watch src/index.ts` ~ Run dev with watch to restart the server upon change
- `bun tsc` ~ Compile with `tsc`
  - **Note:** After running this, you can call `bun dist/index.js` to start the server
- `bun build src/index.ts --minify --target node --outfile dist/bundle.js` ~ Build bundle
  - **Note:** After running this, you can call `bun dist/bundle.js` to start the server
