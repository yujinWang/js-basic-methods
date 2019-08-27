import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Father from '@/components/Father'
import Child from '@/components/child/Child'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/Father',
            name: 'Father',
            component: Father
        },
        {
            path: '/Child',
            name: 'Child',
            component: Child
        }
    ]
})