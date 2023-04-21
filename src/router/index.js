/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-20 16:30:05
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-21 10:45:00
 * @FilePath: \papa-test\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
let routes = []
const matches = require.context('./', true, /^\.\/[^/]+\/.+\.js$/)
matches.keys().forEach(key => {
  routes = routes.concat(matches(key).default)
})

const router = new VueRouter({
  routes,
});

export default router;
