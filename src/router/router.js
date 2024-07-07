import {createRouter, createWebHashHistory} from "vue-router"

import LoginView from '../view/LoginView.vue'
import PublicView from '../view/PublicView.vue'
import ProtectedView from '../view/ProtectedView.vue'
import {createRenderer} from "vue";

const routes = [
    {path:'/', name: 'Login', component: LoginView},
    {path:'/public', name: 'Public', component: PublicView},
    {path:'/protected', name: 'Protected', component: ProtectedView},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router