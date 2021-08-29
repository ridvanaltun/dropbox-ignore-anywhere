const Chalk = require('chalk');
const {computed} = require('../consts');
const absPath = require('../lib/absPath');

const {isWindows, isMacOS, isLinux} = computed;

const revoke = async (path) => {
  try {
    if (isWindows) {
      const execPowerShellCommand = require('../lib/execPowerShellCommand');
      const cmd = `Clear-Content -Path '${absPath(path)}' -Stream com.dropbox.ignored`;
      const response = await execPowerShellCommand(cmd);
      const isSuccessful = response === '';
      const successMessage = `${Chalk.green(`Successfully revoked the ignored attribute "${path}"`)}`;
      return isSuccessful ? successMessage : response;
    }

    if (isMacOS) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `xattr -d com.dropbox.ignored ${path.replace(' ', '\\ ')}`;
      return await execShellCommand(cmd);
    }

    if (isLinux) {
      const execShellCommand = require('../lib/execPowerShellCommand');
      const cmd = `attr -r com.dropbox.ignored ${path}`;
      return await execShellCommand(cmd);
    }
  } catch (error) {
    return `${Chalk.red(error.message)}`;
  }
};

module.exports = revoke;
