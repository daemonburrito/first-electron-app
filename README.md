# First Electron App

A personal, first attempt at a boilerplate for the following stack:

* [`rollup`](https://github.com/rollup/rollup) Bundling and tree-shaking.
* [`react`](https://github.com/reactjs) UI
* [`electron`](https://github.com/electron/electron) Application runtime.
* [:tropical-fish:](https://github.com/babel/babel) ES6+ and JSX transpilation.

Whether or not this stack is well-advised is not addressed in this document.

This repository aims to be useful for reference, examples, and a scratch
point for experiments.

## Goals

* Light-weight
* Documented
* Open source (and libre, where possible)
* Eschew large build systems (Webpack, in particular). NPM scripts are the main
  paradigm.

## Reporting bugs and contributing

While this repo does not aim to be that much more than a personal snippet,
filing issues and pull requests is extremely helpful, both to myself and anyone
following this project. Both are very much appreciated.

## Building an application
*Subject to rapid change*

NPM `scripts` are currently used for almost everything.

```bash
# Run rollup and create the bundles.
npm run build

# Run rollup -c --watch
npm run watch

# Run electron with the bundle
npm start
```

Rollup builds two separate bundles, one for the host runtime (the one passed as
an argument to the `electron` executable), and another for the renderer(s) (the
HTML).

## Acknowledgements

The electron bootstrap (`src/app/main.js`) is based on [Electron Quick Start](https://github.com/electron/electron-quick-start/blob/master/main.js).