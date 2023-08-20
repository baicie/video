import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { ComponentLibrary } from '@baicie/video-core';

createApp(App).use(ComponentLibrary).mount('#app');
