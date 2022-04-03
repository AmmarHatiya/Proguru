import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import ContactsView from '../views/ContactsView.vue'
import BashView from '../views/BashView.vue'
import DataTypesView from '../views/DataTypesView.vue'
import SequenceView from '../views/SequenceView.vue'
import NumericView from '../views/NumericView.vue'
import StringView from '../views/StringView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/bash',
    name: 'bash',
    component: BashView
  },
  {
    path: '/datatypes',
    name: 'datatypes',
    component: DataTypesView
  },
  {
    path: '/datatypes/strings',
    name: 'strings',
    component: StringView
  },
  {
    path: '/datatypes/numeric',
    name: 'numeric',
    component: NumericView
  },
  {
    path: '/datatypes/sequence',
    name: 'sequence',
    component: SequenceView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
