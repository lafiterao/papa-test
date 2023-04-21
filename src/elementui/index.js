/*
 * @Author: lafite.rao 827943653@qq.com
 * @Date: 2023-04-20 18:58:20
 * @LastEditors: lafite.rao 827943653@qq.com
 * @LastEditTime: 2023-04-20 21:52:40
 * @FilePath: \papa-test\src\elementui\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Vue from 'vue';
import {
    Button,
    Input,
    Dialog,
    MessageBox,
    Message
} from 'element-ui';
Vue.use(Button);
Vue.use(Input);
Vue.use(Dialog);

Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
