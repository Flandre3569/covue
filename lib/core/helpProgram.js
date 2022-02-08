const program = require('commander')

const helpProgram = () => {
  program.option('-c --coisini', 'a coisini vue3 cli')
  program.option('-d --destination <dest>', 'a destination folder')
  program.option('-f --framework <framework>', 'your framework')

  program.on('--help', function () {
    console.log("");
    console.log("That's all the instructions.");
  })
}

module.exports = helpProgram;