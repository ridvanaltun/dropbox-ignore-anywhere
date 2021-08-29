const Chalk = require('chalk');
const {computed} = require('../consts');
const absPath = require('../lib/absPath');

const {isWindows, isMacOS, isLinux} = computed;

const ignore = async (path) => {
  try {
    if (isWindows) {
      const execPowerShellCommand = require('../lib/execPowerShellCommand');
      const cmd = `Set-Content -Path '${absPath(path)}' -Stream com.dropbox.ignored -Value 1`;
      const response = await execPowerShellCommand(cmd);
      const isSuccessful = response === '';
      const successMessage = Chalk.green(`Successfully added the ignore attribute to "${path}"`);
      const errorMessage = Chalk.red(response);
      return isSuccessful ? successMessage : errorMessage;
    }

    if (isMacOS) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `xattr -w com.dropbox.ignored 1 ${absPath(path)}`;
      const response = await execShellCommand(cmd);
      const isSuccessful = response.stderr === '';
      const successMessage = Chalk.green(`Successfully added the ignore attribute to "${path}"`);
      const errorMessage = Chalk.red(response.stderr);
      return isSuccessful ? successMessage : errorMessage;
    }

    if (isLinux) {
      const execShellCommand = require('../lib/execShellCommand');
      const cmd = `attr -s com.dropbox.ignored -V 1 ${absPath(path)}`;
      const response = await execShellCommand(cmd);
      const isSuccessful = response.stderr === '';
      const successMessage = Chalk.green(`Successfully added the ignore attribute to "${path}"`);
      const errorMessage = Chalk.red(response.stderr);
      return isSuccessful ? successMessage : errorMessage;
    }
  } catch (error) {
    return Chalk.red(error.message);
  }
};

module.exports = ignore;
