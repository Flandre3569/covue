const path = require('path')
const ejs = require('ejs')
const fs = require('fs')

// 转为promise
const { promisify } = require('util');
const renderFile = promisify(ejs.renderFile);

const componentCompile = (template, props, dest) => {
  // 拼接字符串到模板位置
  const templatePath = path.resolve(__dirname, `../templates/${template}`)
  // 目标位置
  const renderPath = path.resolve(dest, `${props.name}.vue`)
  
  renderFile(templatePath, { props }, {}).then(result => {
    // 调用写入
    templateInput(renderPath, result)
  }).catch(err => {
    console.log(err);
  })
}

const storeCompile = (template, props, dest) => {
  const templatePath = path.resolve(__dirname, `../templates/${template}`)
  const renderPath = path.resolve(dest, `${props.lowerName}/${props.name}.ts`)

  renderFile(templatePath, { props }, {}).then(result => {
    templateInput(renderPath, result)
  }).catch(err => {
    console.log(err);
  })
}

const pageCompile = (template, props, dest) => {
  const templatePath = path.resolve(__dirname, `../templates/${template}`)
  const pagePath = path.resolve(dest, `${props.lowerName}/${props.name}.vue`)
  
  renderFile(templatePath, { props }, {}).then(result => {
    templateInput(pagePath, result)
  }).catch(err => {
    console.log(err);
  })
}

const routerCompile = (template, props, dest) => {
  const templatePath = path.resolve(__dirname, `../templates/${template}`)
  const routerPath = path.resolve(dest, `${props.lowerName}/router.ts`)
  
  renderFile(templatePath, { props }, {}).then(result => {
    templateInput(routerPath, result)
  }).catch(err => {
    console.log(err);
  })
}

const typeCompile = (template, props, dest) => {
  const templatePath = path.resolve(__dirname, `../templates/${template}`)
  const typePath = path.resolve(dest, `${props.lowerName}/type.ts`)
  
  renderFile(templatePath, { props }, {}).then(result => {
    templateInput(typePath, result)
  }).catch(err => {
    console.log(err);
  })
}

// 递归判断文件夹是否存在，如果不存在，则创建文件夹
const makeDir = (dirPath) => {
  if (fs.existsSync(dirPath)) {
    return true;
  } else {
    if (makeDir(path.dirname(dirPath))) {
      fs.mkdirSync(dirPath)
      return true;
    }
  }
}

// 写入
const templateInput = (path, content) => {
    return fs.promises.writeFile(path, content)
}

module.exports = {
  componentCompile,
  storeCompile,
  pageCompile,
  routerCompile,
  makeDir,
  typeCompile
}