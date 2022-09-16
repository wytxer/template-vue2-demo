import Vue from 'vue'
import { Modal, message, notification, Button, Rate } from 'ant-design-vue'
import App from '@/app.vue'
import router from '@/router'
import LayoutBox from '@/components/layout-box'

import './app.less'
import '@wytxer/style-utils/lib/common.less'

Vue.config.productionTip = false

Vue.prototype.$confirm = Modal.confirm
Vue.prototype.$message = message
Vue.prototype.$notification = notification
Vue.prototype.$info = Modal.info
Vue.prototype.$success = Modal.success
Vue.prototype.$error = Modal.error
Vue.prototype.$warning = Modal.warning

Vue.use(Button)
Vue.use(Rate)
Vue.use(LayoutBox)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
