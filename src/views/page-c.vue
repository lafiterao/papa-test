<template>
    <div>
        <loginState></loginState>
        <div class="status">
            当前登录状态：{{ isLoginText }}
        </div>
        <textarea-com v-model="textareaA" :disabled="true"></textarea-com>
        <textarea-com v-model="textareaB" :disabled="true" :show-before="true" :show-submit="true" @submit='goSubmit'
            @goBefore='goBefore'></textarea-com>
    </div>
</template>
<script>
import loginState from '@/components/login-state.vue';
import textareaCom from '@/components/textarea-com.vue';
export default {
    name: 'page-c',
    computed: {
        textareaA() {
            return this.$store.state.textModule.textareaA
        },
        textareaB() {
            return this.$store.state.textModule.textareaB
        },
        isLoginText() {
            return this.$store.state.textModule.isLogin ? '已登录' : '未登录'
        }
    },
    components: {
        loginState,
        textareaCom
    },
    methods: {
        goSubmit() {
            console.log(111,this);
            this.$confirm(`确定提交页面A的内容---${this.textareaA} 页面B的内容---${this.textareaB}`, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '提交成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消'
                });
            });
        },
        goBefore() {
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped></style>