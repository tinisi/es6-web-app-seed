# es6-web-app-seed

A simple seed project for getting babel ES6 and webpack set up for a web application.

_Disclaimer: This is my first Webpack project, so I am still learning. Especially for web apps, what I have set up so far is just the tip of the iceberg. Suggestions welcome!_

The goal of this repo is to create a simplest possible useful boilerplate project to be used to create simple web apps using ES2015, AKA ES6 (I'll say it again, why did they have to name it after the year! So many syllables!)

This is also part of a two repo exploration of an ES6 ecosystem, check out [es6-lib-seed](https://github.com/tinisi/es6-lib-seed) which this web app depends on as an example of using ES6 authored npm modules for dependency management.

If you have suggestions that are in the spirit of "keep it simple" please submit a pull request.

## Setup

* Clone the repo
* Install or otherwise make available Node 5.11.0 (others will probably work, I use nodenv to avoid system installs)
* cd into the project
* run `npm install`

## Testing and Development

* `npm test` will run the jasmine specs
* `npm start` will kick off the AMAZING webpack dev server (try it, you'll like it!)
* `npm run build` will build to the dist folder
* `npm run repl` will get you into the groovy babel-node REPL, with the ES6 polyfill in scope.

Thanks to the babel test helper, jasmine is automatically transpiling the source code, so TDD is easy. And, the webpack dev server with hot module loading makes local development dreamy.
