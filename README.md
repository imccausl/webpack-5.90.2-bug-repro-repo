# webpack_bug_repro-repo

This repo is set up to reproduce a strange behaviour in the latest (5.90.2) version of webpack. It appears to have something to do with [this change](https://github.com/webpack/webpack/commit/2a063f88da046377ee4eac1e57fc2ea9966e55c8#diff-96335405b47eef62b17ba6fe88f6b35a1e37c9cf98fd762fe74599aca1c65d94R195), because if you revert the change then everything works.

This repo uses yarn modern. To get started:

1. if you have nvm installed you can `nvm install` to install node 20,
2. `corepack enable` to initialize yarn.
3. `yarn install`
4. `yarn webpack`
5. `node ./dist/bundle.js`

You should see `src_someOtherFunction` is not a function at this point. This is because I destructured it from a named import of one of the packages in the workspaces. If you remove `sideEffects: false` from the webpack config in this repo, things will work. I'm not sure why `sideEffects` has anything to do with it in this instance, because we don't set `sideEffects` to false in the production build in which this issue happened but so far it's the only way I can reproduce the issue in isolation. If you keep that line intact and link webpack with `yarn link ../webpack` (or whatever directory you have the webpack repo installed), and then change `canMangle` to `false`, then this project will be bundled correctly and you will not see any errors.

Note: I created a few workspaces to act as "packages" to "import", but the gist of where the issue lies can be found in `src/index.js`
