<template>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
        <div class="status">
            当前登录状态：{{ isLoginText }}
        </div>
        <el-button type="primary" @click="login">点击登录</el-button>
    </el-dialog>
</template>
<script>
export default {
    name: 'login-status',
    computed: {
        dialogVisible: {
            get() {
                return !this.$store.state.textModule.isLogin
            },
            set(val) {
                console.log(val);
            }
        },
        isLoginText() {
            return this.$store.state.textModule.isLogin ? '已登录' : '未登录'
        }
    },
    methods: {
        login() {
            this.$store.commit('setIsLogin', true)
        }
    }
}
</script>
<style scoped>
.status {
    text-align: center;
    margin-bottom: 20px;
}
</style>