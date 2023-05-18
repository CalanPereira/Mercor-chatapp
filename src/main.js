import { createApp } from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'

VueElement.use(firestorePlugin)


createApp(App).mount('#app')
