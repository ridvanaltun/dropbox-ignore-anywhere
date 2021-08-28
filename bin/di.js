#!/usr/bin/env node
const Commander = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const {ignore, revoke} = require('../commands');

updateNotifier({pkg}).notify({isGlobal: true});
Commander.version(pkg.version);

Commander.command('ignore <path>')
    .description('Ignore file or folder')
    .action(async (path) => {
      console.log(await ignore(path));
    });

Commander.command('revoke <path>')
    .description('Revoke ignore file or folder')
    .action(async (path, options) => {
      console.log(await revoke(path));
    });

Commander.parse(process.argv);
