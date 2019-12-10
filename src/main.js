import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import "./sass/main.scss"
import axios from "axios"

axios.defaults.baseURL=process.env.VUE_APP_SERVICE_URL

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount("#app")
