// clone repo
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
// repo https
const { vueRepo } = require('./config')
// terminal commands
const terminalCommands = require('../commands/terminal')

const createActions = async (project) => {
  console.log('✨✨ is creating a vue-core project')
  try {
    await download(vueRepo, project, { clone: true })
  } catch (error) {
    console.log(error);
  }
  
  // npm install
  // 判断平台，支持windows/mac os/linux
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
  try {
    await terminalCommands(command, ['install'], { cwd: `./${project}` })
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createActions
};