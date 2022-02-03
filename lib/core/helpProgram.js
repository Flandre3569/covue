const program = require('commander')

const helpProgram = () => {
  program.option('-f --framework <framework>', 'vue-core', () => {
    console.log('currently only support vue');
  })
  program.option('-d --destination <dest>', 'a destination folder')
}

module.exports = helpProgram;