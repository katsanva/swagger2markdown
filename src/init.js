#!/usr/bin/env node

'use strict';

import fs from 'fs';
import transform from './transform';
import {curry} from 'ramda';

export const init = curry((fs, transform, console, yargs) => {
  yargs
    .usage('Usage: $0 -s [string] -m [string] -p [boolean]')
    .option(
      'swagger', {
        alias: 's',
        describe: 'Path to swagger file',
        coerce: fs.readFileSync,
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
    prependHeader,
  };

  try {
    const out = transform(swagger, config);

    fs.writeFileSync(markdown, out);
  } catch (e) {
    console.error(e);
    console.error(e.stack);
  }
});

export default init(fs, transform, console);