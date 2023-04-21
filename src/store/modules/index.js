const state = {
  textareaA: "Hello papa English this ia pageA",
  textareaB: "Hello papa English, this ia pageB",
  isLogin: false
};
const mutations = () => {
  const methods = {};
  for (let key in state) {
    const setKey = key.substring(0, 1).toLocaleUpperCase() + key.substring(1);
    methods["set" + setKey] = (state, payload) => {
      state[key] = payload;
    };
  }
  return methods
};
const getters = ()=>{}
const actions = ()=>{}
export default {
  state,
  mutations: mutations(),
  getters,
  actions,
};
