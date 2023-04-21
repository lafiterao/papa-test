<!--
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-20 16:28:57
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-20 20:42:15
 * @FilePath: \papa-test\src\views\page-a.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div>
        <textarea-com v-model="textarea" :show-next="true" @goNext='goNext'></textarea-com>
    </div>
</template>
<script>
import textareaCom from '@/components/textarea-com.vue';
export default {
    name: 'page-a',
    components: {
        textareaCom
    },
    computed: {
        textarea: {
            get() {
                return this.$store.state.textModule.textareaA
            },
            set(val) {
                this.$store.commit('setTextareaA', val)
            }
        }
    },
    methods: {
        goNext() {
            this.$router.push({path: '/pageB'})
        }
    }
}
</script>

<style scoped></style>