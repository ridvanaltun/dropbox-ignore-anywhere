const platform = process.platform;

const isWindows = platform === 'win32';
const isMacOS = platform === 'darwin';
const isLinux = !isWindows && !isMacOS;

module.exports = {
  isWindows,
  isMacOS,
  isLinux,
};
