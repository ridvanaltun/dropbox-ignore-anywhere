const Chalk = require('chalk');

const ignore = async (paths) => {
  try {
    const platform = process.platform;
    const isWindows = platform === 'win32';
    const isMacOS = platform === 'darwin';
    const isLinux = !isWindows && !isMacOS;

    if (isWindows) {
      const execPowerShellCommand = require('../lib/execPowerShellCommand');
      const cmd =
        'Set-Content -Path ' + paths + ' -Stream com.dropbox.ignored -Value 1';
      const response = await execPowerShellCommand(cmd);
      return response === '' ? `${Chalk.green('Successful')}` : response;
    }

    if (isMacOS) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `xattr -w com.dropbox.ignored 1 ${paths.replace(' ', '\\ ')}`;
      return await execShellCommand(cmd);
    }

    if (isLinux) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `attr -s com.dropbox.ignored -V 1 ${paths}`;
      return await execShellCommand(cmd);
    }
  } catch (error) {
    return `${Chalk.red(error.message)}`;
  }
};

module.exports = ignore;
