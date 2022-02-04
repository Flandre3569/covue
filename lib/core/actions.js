// clone repo
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
// repo https
const { vueRepo } = require('./config')
// terminal commands
const terminalCommands = require('../commands/terminal')
// compile template
const { componentCompile, storeCompile, pageCompile, routerCompile, makeDir, typeCompile } = require('./compile')


const createActions = async (project) => {
  log.hint('✨✨ is creating a vue-core project')
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

const createComponent = async (name, dest) => {
  const props = {
    name,
    lowerName: name.toLowerCase()
  }
  try {
    await componentCompile("component.ejs", props, dest)
  } catch (error) {
    console.log(error);
  }
  
}

const createStore = async (name, dest) => {
  const props = {
    name,
    lowerName: name.toLowerCase()
  }
  try {
    if (makeDir(`${dest}/${props.lowerName}`)) {
      await storeCompile("store.ejs", props, dest)
      await typeCompile("types.ejs", props, dest)
    }
  } catch (error) {
    console.log(error);
  }
}

const createPage = async (name, dest) => {
  const props = {
    name,
    lowerName: name.toLowerCase()
  }
  try {
    if (makeDir(`${dest}/${props.lowerName}`)) {
      await pageCompile("component.ejs", props, dest)
      await routerCompile("router.ejs", props, dest)
      await typeCompile("types.ejs", props, dest)
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createActions,
  createComponent,
  createStore,
  createPage
};