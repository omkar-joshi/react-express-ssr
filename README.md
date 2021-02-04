# ⚛ React + Express – SSR Setup with TypeScript

## TOC

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Tricks](#tricks)
  - [Component scaffolding using plop](#client-side-version-opt-in)
  - [📕 Storybook support](#-storybook-support)
  - [Avoid source map generation for faster builds](#avoid-source-map-generation-for-faster-builds)
  - [Change the port of the dev environment](#change-the-port-of-the-dev-environment)
  - [Import SVGs as ReactComponent](#import-svgs-as-reactcomponent)

## Features

This project has out-of-the-box support for the following things:

- General Setup

  - 🔥 Babel 7
  - 📦 Webpack 4
  - 🔥 ESLint 7 (with a set of custom rules which may be mostly identical to AirBnB with some personal flavor added)
  - 🔥 TypeScript (via Babel)
  - 🔥 Prettier
  - 🔥 Jest
  - 🐐 React Testing Library
  - ✅ React i18next for multi language support
  - ✅ Server Side Rendering with Express
  - 🏎 React Fast Refresh
  - ✅ CSS Modules
  - ✅ PostCSS
  - ✅ Precommit hooks via lint-staged + Husky
  - ✅ Optional static build without the need for Node.js on the server
  - 📕 Support for [Storybook](https://storybook.js.org/) (>= 5.0.0)

- Libs and Dependencies

  - ✅ React i18next for multi language support
  - ⚛ React 16.x (latest), with Hooks!
  - ✅ Redux + Thunk middleware
  - ✅ Immer
  - ✅ Reselect
  - ✅ React Router 5
  - ✅ React Helmet

## Installation

Once you've cloned the repository here on Github, `cd` into the directory and run `yarn` (or `npm install`) on your command line to install all the dependencies. You're ready to go now!

## Usage

There are npm scripts for all the relevant things. The server will always be started on port 8500 unless otherwise specified in `process.env.PORT`. You can use a `.env` file to specify env vars. If you want to use them in your client side code, don't forget to add them in [config/env.js](config/env.js#L37).

### Noteworthy scripts:

#### `yarn start`

Starts the app in development mode: creates a new client and server dev build using webpack, starts the Express server build (for both file serving and server side pre-rendering) and keeps webpack open in watchmode. Updates the app (if possible) on change using HMR.

#### `yarn build`

Creates a new build, optimized for production. Does **not** start a dev server or anything else.

#### `yarn test`

Run all tests using jest.

#### `yarn test:update`

Update all Jest snapshots (if there are any)

#### `yarn lint:js`

Run ESLint for all JavaScript and TypeScript files

#### `yarn lint:css`

Run Stylelint for all CSS files

#### `yarn lint`

Run lint:js and lint:css in parallel

#### `yarn analyze`

Starts `webpack-bundle-analyzer` to give you the opportunity to analyze your bundle(s)

#### `yarn depgraph`

Creates an image of your dependency graph. Requires [GraphVIZ](https://www.graphviz.org/) to be in your system's `PATH`

#### `yarn plop`

Run plop to create new React components or Redux reducers via CLI

## Environment Variables

There are a few environment variables you can set to adjust the setup to your needs

| Variable         | Default            | Description                                                                                                                                                                                                                                                                                      |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `PORT`           | `8500`             | Port number your application will be served on.                                                                                                                                                                                                                                                  |
| `HOST`           | `http://localhost` | Host (including protocol!) your application will be served on. This is usually neglectable as most of the time your application will be served via remote proxy (e.g. Nginx) on localhost. **Note:** this is only for convenience. The server itself will not be bound exclusively to that host. |
| `DEVSERVER_HOST` | `http://localhost` | Optional. Different host for the Webpack Dev Server to be served on.                                                                                                                                                                                                                             |

## Tricks

### Component scaffolding using plop

Along with this starter kit comes `plop` - a great command line tool to keep the structure of your Redux components and Redux reducers consistent. Run `yarn plop` (or `npm run plop`) to have components and Redux reducers created for you automatically! Just enter a name, answer a few questions and you're ready to go! You can of course adjust everything to your needs. All Plop templates can be found in the `config/plop` directory.

### 📕 Storybook support

I've successfully tested Storybook and it integrates seamlessly and without any issues into this setup. If you want to add Storybook to your project, install Storybook `^4.0.0` and run `getstorybook` to have the basic setup created for you. You must then replace all the content in `.storybook/webpack.config.js` with the following line:

```js
module.exports = require('../config/webpack.config.js/storybook');
```

Afterwards you should be able to run `yarn storybook` to start the Storybook Dev Server.

### Avoid source map generation for faster builds

In some cases you might not want to generate source maps for the generated files. In this case you can set the `OMIT_SOURCEMAP` environment variable to `true`. No source map files will be generated then. This works no matter if you're in devmode or building for production.

### Change the port of the dev environment

By default if you run `yarn start` the development server will use port 8500. You can change this by specifying a `PORT` environment variable.

### Import SVGs as ReactComponent

You can import SVG files as React components exactly the way you can do it in Create React App 2.0:

```
import { ReactComponent as Logo } from './Logo.svg';
```

Then you can use it in JSX like `<div><Logo /></div>`.

[Here is a video](https://egghead.io/lessons/react-add-svgs-as-react-components-with-create-react-app-2-0) that explains that a bit more.

##### Happy Hacking! 🔥

