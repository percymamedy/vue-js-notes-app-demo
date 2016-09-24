// All Style sheets here.
require('./assets/sass/app.scss');

import Vue from 'vue';
import store from './vuex/store';
import App from './App';

new Vue({
    store,
    el: 'body',
    components: {App},
});
