const execShellCommand = (cmd) => {
  const exec = require("child_process").exec;
  return new Promise((resolve, reject) => {
    const child = exec(cmd, (err, stdout, stderr) =>
      err
        ? reject(err)
        : resolve({
            stdout: stdout,
            stderr: stderr,
          })
    );
  });
};

module.exports = execShellCommand;
