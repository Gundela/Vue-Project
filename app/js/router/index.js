import Vue from "vue"
import Router from "vue-router"
import Home from "home/index.vue"
import Money from "money/index.vue"
import Ious from "ious/index.vue"
import Crowd from "crowd/index.vue"
import Download from "download/download.vue"

import "../../css/reset.scss"

Vue.use(Router)


const routes = [{
    path: "/",
    name: "home",
    component: Home
}, {
    path: "/money",
    name: "money",
    component: Money
}, {
    path: "/ious",
    name: "ious",
    component: Ious
}, {
    path: "/crowd",
    name: "crowd",
    component: Crowd
}, {
    path: "/download",
    name: "download",
    component: Download
}]

const router = new Router({
    linkActiveClass: 'active',
    routes
})

export default router