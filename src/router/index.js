import { createRouter, createWebHistory } from '@ionic/vue-router';

//Register
const Layout = () => import('@/components/base/Layout')
const Login = () =>  import('@/views/pages/Login')
const PreLogin = () =>  import('@/views/pages/PreLogin')
const Register = () =>  import('@/views/pages/Register')
const SelectCountry = () =>  import('@/views/pages/SelectCountry')
const SelectTypeRegister = () =>  import('@/views/pages/SelectTypeRegister')
const RegisterSuccess = () =>  import('@/views/pages/RegisterSuccess')
const SelectCategory = () =>  import('@/views/pages/SelectCategory')
const ConfigChat = () =>  import('@/views/pages/ConfigChat')
const Complete = () =>  import('@/views/pages/Complete')

//Dashboard

const LayoutDashboard = () =>  import('@/components/base/LayoutDashboard')
const Principal = () =>  import('@/views/dashboard/Principal')


const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect : '/principal',
    component: LayoutDashboard,
    children: [
      {
        path: '/principal',
        name: 'Principal',
        component: Principal,
      },
    ]
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/pre_login',
        name: 'pre_Login',
        component: PreLogin,
      },
      {
        path: '/login',
        name: 'Login',
        component: Login,
      },
      {
        path: '/select_type_register',
        name: 'Tipo de Registro',
        component: SelectTypeRegister,
      },
      {
        path: '/register',
        name: 'Registro',
        component: Register,
      },
      {
        path: '/select_country',
        name: 'Selecione Pais',
        component: SelectCountry,
      },
      {
        path: '/success',
        name: 'Registro Exitoso',
        component: RegisterSuccess,
      },
      {
        path: '/select_category',
        name: 'Seleccionar Categoria',
        component: SelectCategory,
      },
      {
        path: '/config_chat',
        name: 'Chat',
        component: ConfigChat,
      },
      {
        path: '/complete',
        name: 'Complete',
        component: Complete,
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
