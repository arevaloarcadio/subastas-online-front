import { createRouter, createWebHistory } from '@ionic/vue-router';


const Dashboard = () => import('@/views/Dashboard')
const Layout = () => import('@/components/base/Layout')
const Login = () =>  import('@/views/pages/Login')
const Register = () =>  import('@/views/pages/Register')


/*const routes = [
  {
    path: '/',
    redirect: '/memories'
  },
  {
    path: '/memories',
    component: MemoriesPage
  },
  {
    path: '/memories/:id',
    component: () => import('../pages/MemoryDetailsPage.vue')
  },
  {
    path: '/memories/add',
    component: () => import('../pages/AddMemoryPage.vue')
  }
]*/

const routes = [
  {
    path: '/',
    redirect: '/login',
    name: 'Dashboard',
    component: Layout,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Registro',
    component: Register,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
