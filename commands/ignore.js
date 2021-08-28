const Chalk = require('chalk');
const {computed} = require('../consts');

const {isWindows, isMacOS, isLinux} = computed;

const ignore = async (path) => {
  try {
    if (isWindows) {
      const execPowerShellCommand = require('../lib/execPowerShellCommand');
      const cmd =
        'Set-Content -Path ' + path + ' -Stream com.dropbox.ignored -Value 1';
      const response = await execPowerShellCommand(cmd);
      return response === '' ? `${Chalk.green('Successful')}` : response;
    }

    if (isMacOS) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `xattr -w com.dropbox.ignored 1 ${path.replace(' ', '\\ ')}`;
      return await execShellCommand(cmd);
    }

    if (isLinux) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `attr -s com.dropbox.ignored -V 1 ${path}`;
      return await execShellCommand(cmd);
    }
  } catch (error) {
    return `${Chalk.red(error.message)}`;
  }
};

module.exports = ignore;
