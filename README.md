# GraphQL on the edge using Cloudflare

GraphQL on the edge, close to the customer, far from the servers. Just for
client/frontend developers who don't want to create waterfalls when querying
REST APIs. This is for those who want to build flexible and performant apps
queries.

### Usage

```bash
# Setup node_modules
npm i
# Run linter
npm run lint
# Run linter and fix where possible
npm run lint-fix
# Run tests
npm test
# Build development readable worker js file
npm run build-dev
# Build production minified worker js file
npm run build
# Setup wrangler and config
npm i @cloudflare/wrangler -g
wrangler config <email> <api_key>
# !!!! Change in wrangler.toml the account_id (you can find it
# !!!! when you login at dash.cloudflare.com/<account_id>)
# Build and publish (change this build:publish command when you
# want to publish prod)
npm run build:publish
```

The build will generate a `dist/index.js` which you can deploy to Cloudflare.

### Files and Directories

- `src/` - Stores `index.ts` for the worker and any additional workers.
- `test/` - Stores `index.test.ts` to test the worker.
- `package.json` - The `npm` configuration contains common tasks such as `build`
  and `test`.
- `jest.config.js` - A TypeScript configuration for `jest`.
- `tsconfig.json` - A strict TypeScript configuration for building Workers for
  Cloudflare.
- `tslint.json` - A detailed `tslint` configuration with exceptions for common
  Worker needs.
- `webpack.config.js` - A simple `webpack` configuration to agreggate
  dependencies and build a worker.

## Copyright

I've used the
[Starter Template for a TypeScript Cloudflare Worker](https://github.com/udacity/cloudflare-typescript-worker-template).
See license below and in [./LICENSE](./LICENSE)

## License

Licensed under the Apache License, Version 2.0.

© 2019 Udacity, Inc.
