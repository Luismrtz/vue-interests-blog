import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons'; the WHOLE library, but dont want to do this
import { faCoffee, faBars, faArrowRight, faEnvelope, faLock, faUser, faArrowLeft, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleDown } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

library.add(faCoffee, faBars, faArrowRight, faArrowLeft, faArrowDown, faEnvelope, faLock, faUser, faArrowAltCircleDown, faLinkedin, faGithub);

createApp(App).component('fa', FontAwesomeIcon).use(store).use(router).mount('#app')
