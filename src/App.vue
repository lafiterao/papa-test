<!--
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-20 16:19:25
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-20 23:28:40
 * @FilePath: \papa-test\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div id="app">
    <transition :name="transitionName" class="box">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      transitionName: ''
    }
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to的deep大于from的deep值,判断为前进状态,反之则为后退状态
      this.transitionName = to.meta.deep < from.meta.deep ? 'slide-right' : 'slide-left'
    },
  }
}
</script>

<style>
body, html {
  padding: 0;
  margin: 0;
}
#app {
  text-align: center;
  padding-top: 20px;
  width: 100%;
  overflow: hidden;
}
.box {
  height: 100vh;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}

.slide-right-leave-active {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-enter {
  opacity: 0;
  transform: translateX(100%);
}

.slide-left-leave-active {
  opacity: 0;
  transform: translateX(-100%);
}
</style>
