#!/usr/bin/env node

'use strict';

import yargs from 'yargs';
import yaml from 'js-yaml';
import fs from 'fs';
import render from './render';
import transform from './transform';

yargs
  .usage('Usage: $0 -s [string] -m [string] -p [boolean]')
  .option(
    'swagger', {
      alias: 's',
      describe: 'Path to swagger file',
      coerce: a => fs.readFileSync(a, 'utf8'),
    }
  )
  .option(
    'markdown', {
      alias: 'm',
      describe: 'Path to output markdown file',
    }
  )
  .option(
    'prependHeader', {
      alias: 'p',
      describe: 'Should produce raw markdown or add render-related header',
      'default': true
    }
  )
  .boolean('prependHeader')
  .demandOption(['swagger', 'markdown']);

const {
  swagger,
  markdown,
  prependHeader,
} = yargs.argv;

const config = {
  prependHeader
};

transform(yaml, fs, render, swagger, markdown, config);