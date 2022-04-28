import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ContactsView from '../views/ContactsView.vue'
import BashView from '../views/BashView.vue'
import DataTypesView from '../views/DataTypesView.vue'
import NumericView from '../views/NumericView.vue'
import StringView from '../views/StringView.vue'
import CView from '../views/CView.vue'
import CQuizView from '../views/CQuizView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
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
    path: '/cplusplus',
    name: 'cplusplus',
    component: CView
  },
  {
    path: '/Cquiz',
    name: 'CQuiz',
    component: CQuizView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
