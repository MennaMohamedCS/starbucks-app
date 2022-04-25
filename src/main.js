import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {createRouter,createWebHistory} from 'vue-router';
import homeComp from './components/home.vue';
import itemsComp from './components/items.vue';
import createComp from './components/creat.vue';
import detailsComp from './components/details.vue';
import notfoundComp from './components/navgation.vue' ;

import axios  from 'axios';

const routes = [
    {
        path:'/',
        component:homeComp
    },
    {
        path:'/home',
        component:homeComp
    },
    {
        path:'/items',
        component:itemsComp,
    },
    {
        path:'/create',
        component:createComp
    },
    {
        path:'/details/:id',
        component:detailsComp,
        props:true
    },
    {
        path:'/:Notfound(.*)*',
        component:notfoundComp
    }
 
]


axios.defaults.baseURL='http://localhost:3000/'
const router = createRouter({
    history:createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
