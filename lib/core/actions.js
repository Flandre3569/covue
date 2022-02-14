// clone repo
const { promisify } = require('util')
const download = promisify(require('download-git-repo'))
// repo https
const { vueRepo, nodeRepo } = require('./config')
// terminal commands
const terminalCommands = require('../commands/terminal')
// compile template
const { componentCompile, storeCompile, pageCompile, routerCompile, makeDir, typeCompile } = require('./compile')
// inquirer
const inquirer = require('inquirer');

const createActions = async (project) => {
  const answer = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: '🦄please choose a framework:',
      choices: ['vue-core', 'node-koa']
    }
  ])
  
  if (answer.framework === 'vue-core') {
    console.log('✨✨ is creating a vue-core project');
    try {
      await download(vueRepo, project, { clone: true })
    } catch (error) {
      console.log(error);
    }
  } else if (answer.framework === 'node-koa') {
    console.log('✨✨ is creating a node-koa project');
    try {
      await download(nodeRepo, project, { clone: true })
    } catch (error) {
      console.log(error);
    }
  }

  // npm install
  // 判断平台，支持windows/mac os/linux
  
  const command = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm'
  await terminalCommands(command, ['install'], { cwd: `./${project}` })
}

const createComponent = async (name, dest) => {
  const props = {
    name,
    lowerName: name.toLowerCase(),
    firstUpperName: firstUpperCase(name)
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
    lowerName: name.toLowerCase(),
    firstUpperName: firstUpperCase(name)
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
    lowerName: name.toLowerCase(),
    firstUpperName: firstUpperCase(name)
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


function firstUpperCase(str) {
  return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

module.exports = {
  createActions,
  createComponent,
  createStore,
  createPage
};