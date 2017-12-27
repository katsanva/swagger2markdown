#!/usr/bin/env node

'use strict';

import yargs from 'yargs';
import yaml from 'js-yaml';
import fs from 'fs';
import render from './render';
import transform from './transform';

yargs
  .usage('Usage: $0 -swagger [string] -markdown [string]')
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
  .demandOption(['swagger', 'markdown']);

const {
  swagger,
  markdown,
} = yargs.argv;

transform(yaml, fs, render, swagger, markdown);