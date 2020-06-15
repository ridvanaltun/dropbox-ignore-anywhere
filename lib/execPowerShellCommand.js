const Shell = require("node-powershell");

const ps = new Shell({
  executionPolicy: "Bypass",
  noProfile: true,
});

const execPowerShellCommand = (cmd) => {
  ps.addCommand(cmd);
  return new Promise((resolve, reject) => {
    ps.invoke()
      .then((output) => {
        resolve(output);
      })
      .catch((err) => {
        reject(err);
      })
      .finally(() => {
        ps.dispose();
      });
  });
};

module.exports = execPowerShellCommand;
