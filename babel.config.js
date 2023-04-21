/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-20 16:19:25
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-20 20:00:42
 * @FilePath: \papa-test\babel.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [  // 按需引用elmentui
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
