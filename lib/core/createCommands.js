const program = require('commander')
const { createActions, createComponent, createStore, createPage } = require('./actions')

const createCommands = () => {
  program
    .command('create <project>')
    .description('create a vue-core project')
    .action(createActions);
  
  program
    .command('add <component>')
    .description('create a vue-core component')
    .action((component) => {
      createComponent(component, program.destination ?? 'src/components')
    });
  
  program
    .command('addstore <store>')
    .description('create a pinia store')
    .action((store) => {
      createStore(store, program.destination ?? 'src/store')
    });
  
  program
    .command('addpage <page>')
    .description('create a page')
    .action((page) => {
      createPage(page, program.destination ?? 'src/pages')
  });
}

module.exports = createCommands