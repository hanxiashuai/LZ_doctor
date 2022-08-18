import App from './App'

import uView from '@/uni_modules/uview-ui'
// 引入 cu-custom 组件。
import cuCustom from './colorui/components/cu-custom.vue'
// #ifndef VUE3
import Vue from 'vue'
Vue.use(uView)
Vue.component('cu-custom',cuCustom)
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif






// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif