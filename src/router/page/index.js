/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-21 10:36:05
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-21 10:44:25
 * @FilePath: \papa-test\src\router\page\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const pageA = (resolve) => require(["src/views/page-a.vue"], resolve);
const pageB = (resolve) => require(["src/views/page-b.vue"], resolve);
const pageC = (resolve) => require(["src/views/page-c.vue"], resolve);
const routes = [
  {
    path: "/pageA",
    meta: { title: "页面A", deep: 0 },
    component: pageA,
  },
  {
    path: "/pageB",
    meta: { title: "页面B", deep: 1 },
    component: pageB,
  },
  {
    path: "/pageC",
    meta: { title: "页面C", deep: 2 },
    component: pageC,
  },
  {
    path: "*",
    meta: { title: "页面A", deep: -1 },
    component: pageA,
  },
];

export default routes;
