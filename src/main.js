import { createApp } from 'vue'
import App from './App.vue'
import * as FullStory from '@fullstory/browser';

FullStory.init({ 
  orgId: '56EM',
  host: "staging.fullstory.com"
});

createApp(App)
.provide("$FullStory", FullStory)
.mount('#app')
