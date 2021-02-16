import { createApp } from 'vue'
import App from './App.vue'
import * as FullStory from '@fullstory/browser';

FullStory.init({ 
  orgId: '56EM',
  host: "staging.fullstory.com"
});

const app = createApp(App);
app.config.globalProperties.window = window //reactive(window) doesn't make org2 work
app.config.globalProperties.$FullStory = FullStory //reactive(window) doesn't make org2 work

// .provide("$FullStory", FullStory)
app.mount('#app')
