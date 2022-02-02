#! /usr/bin/env node
const program = require('commander')
const helpProgram = require('./lib/core/helpProgram')
const createCommands = require('./lib/core/createCommands')

// 版本号
program.version(require('./package.json').version)

// --help
helpProgram()

// 其他指令
createCommands()

// 解析
program.parse(process.argv)