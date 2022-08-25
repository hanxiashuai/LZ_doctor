// 页面路径：store/index.js 
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);//vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		token: uni.getStorageSync("VUE_ADMIN_TOKEN") || "",
	},
	getters: {
		getToken(state) {
			return state.token;
		},
	},
	mutations: {
		// 设置token
		setTooken(state, data) {
			state.token = data;
			uni.setStorageSync("VUE_ADMIN_TOKEN", data);
		},
		//退出登录
		logout(state) {
			state.token = "";
			uni.removeStorageSync("VUE_ADMIN_TOKEN")
		},
	},
	actions: {
	},
})


export default store