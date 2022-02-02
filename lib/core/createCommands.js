const program = require('commander')
const { createActions } = require('./actions')

const createCommands = () => {
  program
    .command('create <project>')
    .description('create a vue-core project')
    .action(createActions);
}

module.exports = createCommands