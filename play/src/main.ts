import { createApp } from 'vue'
import './style.css'
import { BCVideo } from '../../packages/vue/src'
import 'video.js/dist/video-js.min.css'

// import { BCVideo } from '@baicie/video'
import App from './App.vue'

const app = createApp(App)
console.log(BCVideo)
app.use(BCVideo)

app.mount('#app')
