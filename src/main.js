// import { createApp } from 'vue'
// import App from './App.vue'
// import { firestore } from 'vuefire'
// import { VueRouter } from 'vue-router'



// createApp(App).use(firestore).use(VueRouter).mount('#app')

import Vue from 'vue'
import App from './App.vue'
import { firestore } from 'vuefire'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(firestore)

Vue.config.productionTip = false 

import Home from './components/Home'

const router = new VueRouter({
    routes: [
        { path : '/', component: Home},
    ]
})

new Vue({
    router,
    render: h => h(App),
}).$mouth('#app')