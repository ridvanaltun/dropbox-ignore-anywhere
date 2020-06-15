#!/usr/bin/env node
const Commander = require('commander');
const updateNotifier = require('update-notifier');
const pkg = require('../package.json');
const {ignore, revoke} = require('../commands');

updateNotifier({pkg}).notify({isGlobal: true});
Commander.version(pkg.version);

Commander.command('ignore <paths>')
    .description('Ignore file or folder')
    .action(async (paths) => {
      console.log(await ignore(paths));
    });

Commander.command('revoke <paths>')
    .description('Revoke ignore file or folder')
    .action(async (paths, options) => {
      console.log(await revoke(paths));
    });

Commander.parse(process.argv);
