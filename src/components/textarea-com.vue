<!--
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-20 16:19:25
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-20 23:27:58
 * @FilePath: \papa-test\src\components\textarea.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="textarea-box">
        <slot></slot>
        <el-input type="textarea" v-bind="$attrs" v-on="$listeners" :value="value" :disabled="disabled" :autosize="{ minRows: 4, maxRows: 10 }"
            placeholder="请输入内容"></el-input>
        <div class="btn">
            <el-button v-if="showBefore" class="left" type="primary" @click="goBefore">before</el-button>
            <el-button v-if="showNext" class="center"  type="success" @click="goNext">next</el-button>
            <el-button v-if="showSubmit" class="right"  type="success" @click="goSubmit">submit</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'textarea-com',
    props: {
        value: {
            type: String,
            default: '',
        },
        showBefore: {
            type: Boolean,
            default: false
        },
        showNext: {
            type: Boolean,
            default: false
        },
        showSubmit: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {}
    },
    methods: {
        goBefore() {
            // 去上一页面
            this.$emit("goBefore");
        },
        goNext() {
            // 去下一页面
            this.$emit("goNext");
        },
        goSubmit() {
            // 提交
            this.$emit("submit");
        },
        changeVal(e) {
            this.$emit("input", e.target.value);
        }
    }
}

</script>

<style scoped>
.textarea-box {
    width: 500px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
}

.btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 10px;
}

.left ,.center, .right{
    flex:1;
}
</style>