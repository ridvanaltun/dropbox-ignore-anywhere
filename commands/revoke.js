const Chalk = require('chalk');

const revoke = async (paths) => {
  try {
    const platform = process.platform;
    const isWindows = platform === 'win32';
    const isMacOS = platform === 'darwin';
    const isLinux = !isWindows && !isMacOS;

    if (isWindows) {
      const execPowerShellCommand = require('../lib/execPowerShellCommand');
      const cmd =
        'Clear-Content -Path ' + paths + ' -Stream com.dropbox.ignored';
      const response = await execPowerShellCommand(cmd);
      return response === '' ? `${Chalk.green('Successful')}` : response;
    }

    if (isMacOS) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `xattr -d com.dropbox.ignored ${paths.replace(' ', '\\ ')}`;
      return await execShellCommand(cmd);
    }

    if (isLinux) {
      const execShellCommand = require('../lib/execPowerShellCommand');
      const cmd = `attr -r com.dropbox.ignored ${paths}`;
      return await execShellCommand(cmd);
    }
  } catch (error) {
    return `${Chalk.red(error.message)}`;
  }
};

module.exports = revoke;
