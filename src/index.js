#!/usr/bin/env node

'use strict';

import 'babel-polyfill';
import yargs from 'yargs';

import init from './init'

init(yargs(process.argv));
