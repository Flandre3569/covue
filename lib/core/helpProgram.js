const program = require('commander')

const helpProgram = () => {
  program.option('-f --frameword <framework>', 'vue-core')
  program.option('-d --destination <dest>', 'a destination folder')
}

module.exports = helpProgram;