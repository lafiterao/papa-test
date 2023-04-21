/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-20 16:19:25
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-21 10:42:43
 * @FilePath: \papa-test\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => { 
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('src', resolve('./src'))
  }
})
