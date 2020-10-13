import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import Vue from 'vue';
// import vueRouter from 'vue-router';


$("#myDiv").css("padding-top", "50px");
$("body").append("<div>hello world</div>");

// Vue.use(vueRouter);

import navBar from './js/navBar.vue';
import comp1 from './js/App.vue';

var vmNavBar = new Vue({
    el: '#myNav',
    // render: c => c(navBar),
    // template: '<comp1/>',
    components:{
        navBar,
        comp1
    },
    data: {
        dropdownData: ['Action', 'Another action', 'third action', 'last action']
    }
})

var vmDiv = new Vue({
    el: '#myDiv',
    // render: c => c(navBar),
    // template: '<comp1/>',
    components:{
        comp1
        // 'comp1' : '<h1>hhh2222</h1>'
    }
})