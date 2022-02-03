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
  const renderPath = path.resolve(dest, `${props.name}.ts`)
  renderFile(templatePath, { props }, {}).then(result => {
    templateInput(renderPath, result)
  }).catch(err => {
    console.log(err);
  })
}



// 写入
const templateInput = (path, content) => {
  return fs.promises.writeFile(path, content)
}

module.exports = {
  componentCompile,
  storeCompile
}