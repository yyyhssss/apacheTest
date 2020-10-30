import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import Vue from 'vue';
import VueRouter from 'vue-router';
const axios = require('axios');


// $("#myDiv").css("padding-top", "50px");
// $("body").append("<div>hello world</div>");

Vue.use(VueRouter);

import navBar from './js/navBar.vue';
// import comp1 from './js/App.vue';
import myorder from './js/myOrder.vue';
import fecapacity from './js/FECapacity.vue';
import signin from './js/Signin.vue';
import neworder from './js/newOrder.vue';

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/signin' },
        { path: '/myorder', component: myorder },
        { path: '/neworder', component: neworder },
        { path: '/fecapacity', component: fecapacity},
        { path: '/signin', component: signin },
    ]
});

var vm = new Vue({
    el: '#app',
    components: {
        navBar,
    },
    data: {
        dropdownData: ['Action', 'Another action', 'third action', 'last action'],
        menus: [
            {name:'My Order', route: '/myorder'},
            {name:'New Order', route: '/neworder'},
            {name:'FE Capacity', route: '/fecapacity'},
            {name:'Signin', route: '/signin'}],
        myorder: "",
    },
    router,
    beforeMount: function(){
        console.log("signin:  " + this.menus[3].route);
        axios.get('/getUserOrderData').then(function(res){
            console.log(res.body);
            // this.myorder = res.body;
        },function(err){
            this.myorder = "server error";
        })
    }
})

// var vmBpp = new Vue({
//     el: '#bpp',
//     data: {
//       lines: [
//         { OrderNo: "000001", PartNo: '377000012001', AnalysisType: "stiffness", Customer: "BMW", PSPNo: "61000", Orderer: "Xuan" },
//         { OrderNo: "000002", PartNo: '377000012002', AnalysisType: "stress", Customer: "Daimler", PSPNo: "61001", Orderer: "Xuan" },
//       ]
//     },
//   })