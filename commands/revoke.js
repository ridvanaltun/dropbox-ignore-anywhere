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
      const successMessage = Chalk.green(`Successfully revoked the ignored attribute "${path}"`);
      const errorMessage = Chalk.red(response);
      return isSuccessful ? successMessage : errorMessage;
    }

    if (isMacOS) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `xattr -d com.dropbox.ignored ${absPath(path)}`;
      const response = await execShellCommand(cmd);
      const isSuccessful = response.stderr === '';
      const successMessage = Chalk.green(`Successfully revoked the ignored attribute "${path}"`);
      const errorMessage = Chalk.red(response.stderr);
      return isSuccessful ? successMessage : errorMessage;
    }

    if (isLinux) {
      const execShellCommand = require('../lib/execPowerShellCommand');
      const cmd = `attr -r com.dropbox.ignored ${absPath(path)}`;
      const response = await execShellCommand(cmd);
      const isSuccessful = response.stderr === '';
      const successMessage = Chalk.green(`Successfully revoked the ignored attribute "${path}"`);
      const errorMessage = Chalk.red(response.stderr);
      return isSuccessful ? successMessage : errorMessage;
    }
  } catch (error) {
    return Chalk.red(error.message);
  }
};

module.exports = revoke;
