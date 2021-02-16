import { createApp } from 'vue'
import App from './App.vue'
import * as FullStory from '@fullstory/browser';

FullStory.init({ 
  orgId: '56EM',
  host: "staging.fullstory.com"
});

const app = createApp(App);
// using globalProperties
app.config.globalProperties.$FullStory = FullStory
// using provide/inject
// .provide("$FullStory", FullStory)
app.mount('#app')
