<!-- omit in toc -->
# Dropbox Ignore

[![npm version](https://img.shields.io/npm/v/dropbox-ignore-anywhere.svg)](https://npmjs.com/package/dropbox-ignore-anywhere)
[![npm downloads](https://img.shields.io/npm/dt/dropbox-ignore-anywhere.svg)](https://npmjs.com/package/dropbox-ignore-anywhere)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Build Status](https://travis-ci.com/ridvanaltun/dropbox-ignore-anywhere.svg?branch=master)](https://travis-ci.com/ridvanaltun/dropbox-ignore-anywhere)
[![license](https://img.shields.io/npm/l/dropbox-ignore-anywhere.svg)](https://github.com/ridvanaltun/dropbox-ignore-anywhere/blob/master/LICENSE)

Tested on Windows 10, macOS and Linux. If you found a bug let me know.

<!-- omit in toc -->
# Table of Contents

- [Usage](#usage)
- [Add Windows Context Menu](#add-windows-context-menu)
- [Development](#development)
- [License](#license)

# Usage

```bash
# learn how to use it
npx dropbox-ignore-anywhere --help

# ignore file or folder
npx dropbox-ignore-anywhere ignore <path>

# revoke ignore file or folder
npx dropbox-ignore-anywhere revoke <path>

# install the cli to your system
npm i dropbox-ignore-anywhere -g

# use it
di ignore <path>
```

# Add Windows Context Menu

Download `Add_Ignore_From_Dropbox_Context_Menu.reg` under [here](https://github.com/ridvanaltun/dropbox-ignore-anywhere/tree/master/regedit) and execute it.

You can remove this with `Remove_Ignore_From_Dropbox_Context_Menu.reg` file.

**Note:** Change the file if not fit your needs. For an example, Dropbox location may not same. Check before proceed.

![Windows Context Menu](./docs/windows-context-menu.png)

# Development

```bash
# clone the project
git clone https://github.com/ridvanaltun/dropbox-ignore-anywhere.git

# go to the project folder and install dependencies
cd dropbox-ignore-anywhere && npm install

# for ability to test the cli, link it
npm link

# commit your changes with commitizen then push it
npm run commit && git push

# if no need for test or development, unlink it
npm unlink -g
```

# License

[MIT](https://github.com/ridvanaltun/dropbox-ignore-anywhere/blob/master/LICENSE)
