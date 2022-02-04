const program = require('commander')

const helpProgram = () => {
  program.option('-c --coisini', 'a coisini vue3 cli');
  program.option('-d --dest <dest>', 'a destination folder')
  program.option('-f --framework <framework>', 'your frameword')

  program.on('--help', function () {
    console.log("");
    console.log("That's all the instructions.");
  })
  console.log(program);
}

module.exports = helpProgram;