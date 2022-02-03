const program = require('commander')
const { createActions, createComponent, createStore, createPage } = require('./actions')

const createCommands = () => {
  program
    .command('create <project>')
    .description('create a vue-core project')
    .action(createActions);
  
  program
    .command('add <project>')
    .description('create a vue-core component')
    .action((project) => {
      createComponent(project, program.dest || 'src/components')
    });
  
  program
    .command('addstore <project>')
    .description('create a pinia store')
    .action((project) => {
      createStore(project, program.dest || 'src/store')
    });
  
  program
    .command('addpage <project>')
    .description('create a vue-core component')
    .action((project) => {
      createPage(project, program.dest || 'src/pages')
  });
}

module.exports = createCommands