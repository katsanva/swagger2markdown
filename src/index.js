#!/usr/bin/env node
'use strict';

import yargs from 'yargs';
import yaml from 'js-yaml';
import fs from 'fs';
import render from './render';

yargs
  .usage('Usage: $0 -swagger [string] -markdown [string]')
  .option(
    'swagger',
    {
      alias: 's',
      describe: 'Path to swagger file',
      coerce: a => fs.readFileSync(a, 'utf8'),
    }
  )
  .option(
    'markdown',
    {
      alias: 'm',
      describe: 'Path to output markdown file',
    }
  )
  .demandOption(['swagger', 'markdown']);

const {
  swagger = '../temp/public-rest-api.swagger.yaml',
  markdown = '../pages/main/en-us/rest-api.md',
} = yargs.argv;

try {
  const swaggerDocument = yaml.safeLoad(swagger);

  if (swaggerDocument.swagger !== '2.0') {
    throw Error('Only swagger 2.0 is currently supported');
  }

  const md = render(swaggerDocument);

  fs.writeFileSync(markdown, md);
} catch (e) {
  console.error(e);
}

