
<template>
    <div>
        <textarea-com v-model="textarea" :show-next="true" :show-before="true" @goNext='goNext' @goBefore='goBefore'>
            <div class="content">
                A页面textare的值为：
                <p class="green">{{ textareaA }}</p>
            </div>
        </textarea-com>
    </div>
</template>
<script>
import textareaCom from '@/components/textarea-com.vue';
export default {
    name: 'page-b',
    components: {
        textareaCom
    },
    computed: {
        textareaA() {
            return this.$store.state.textModule.textareaA
        },
        textarea: {
            get() {
                return this.$store.state.textModule.textareaB
            },
            set(val) {
                this.$store.commit('setTextareaB', val)
            }
        }
    },
    methods: {
        goNext() {
            this.$router.push({ path: '/pageC' })
        },
        goBefore() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
.green {
    color: green;
}
</style>