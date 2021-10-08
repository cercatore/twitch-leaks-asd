#!/usr/bin/env node

require = require('esm')(module /*, options */);
const path = require('path')
console.log(__dirname);
require(path.join(__dirname, 'src/cli') //.cli(process.argv);