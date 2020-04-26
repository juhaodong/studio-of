import Vue from 'vue'
import VueRouter from 'vue-router'
import WorkList from "@/views/WorkList";
import Privacy from "@/views/Privacy";
import WorkDetail from "@/views/WorkDetail";
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'work',
        component: WorkList
    },
    {
        path: '/privacy',
        name: 'privacy',
        component: Privacy
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/detail/:id',
        name: 'detail',
        props: true,
        component: WorkDetail
    }

]

const router = new VueRouter({
    mode: 'history',
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     // console.log(from,to)
    //     // if (from.name === 'detail' && to.name === 'work') {
    //     //     console.log( '#work' + from.params.id)
    //     //     return {
    //     //         selector: '#work' + from.params.id
    //     //     }
    //     // }
    //     if (savedPosition) {
    //         console.log(savedPosition)
    //         return savedPosition
    //     } else {
    //         return {x: 0, y: 0}
    //     }
    // }
})

export default router
