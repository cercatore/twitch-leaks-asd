#!/usr/bin/env node

require = require('esm')(module /*, options */);
const path = require('path')
console.log(__dirname);
require('../src/cli.js' ).cli(process.argv);