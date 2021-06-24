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


//Product
const CreateProduct = () =>  import('@/views/products/CreateProduct')
const DetailsProduct = () =>  import('@/views/products/DetailsProduct')
const CreateDetailsProduct = () =>  import('@/views/products/CreateDetailsProduct')
const MyProducts = () =>  import('@/views/products/MyProducts')

//Send Request
const AddMessage = () =>  import('@/views/send_requests/AddMessage')
const SelectProduct = () =>  import('@/views/send_requests/SelectProduct')
const RequestSuccess = () =>  import('@/views/send_requests/Success')

const MyExchanges = () =>  import('@/views/my_exchanges/MyExchanges')

const SavedPost = () =>  import('@/views/saved_posts/SavedPost')

const Chat = () =>  import('@/views/chat/Chat')
const PoliciesAndTerms = () =>  import('@/views/chat/PoliciesAndTerms')

const Profile = () =>  import('@/views/profile/Profile')
const Setting = () =>  import('@/views/profile/Setting')
const EditProfile = () =>  import('@/views/profile/EditProfile')

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
      {
        path: '/details/:productId',
        name: 'details.product',
        component: DetailsProduct,
      },
      {
        path: '/create/product',
        name: 'create.product',
        component: CreateProduct,
      },
      {
        path: '/create/details/product',
        name: 'create.details.product',
        component: CreateDetailsProduct,
      },
      {
        path: '/send_requests/select_product/:productId',
        name: 'select_product.requests',
        component: SelectProduct
      },
      {
        path: '/send_requests/add_message/:productId',
        name: 'add_message.requests',
        component: AddMessage
      },
      
      {
        path: '/send_requests/success',
        name: 'success.requests',
        component: RequestSuccess
      },
      {
        path: '/my_exchanges',
        name: 'my.exchanges',
        component: MyExchanges
      },
      {
        path: '/saved_posts',
        name: 'saved.posts',
        component: SavedPost
      },
      {
        path: '/chat',
        name: 'chat',
        component: Chat
      },
      {
        path: '/profile',
        name: 'profile',
        component: Profile,
      },
      {
        path: '/edit/profile',
        name: 'edit.profile',
        component: EditProfile,
      },
      {
        path: '/my_products',
        name: 'my.products',
        component: MyProducts,
      },
      {
        path: '/setting',
        name: 'setting',
        component: Setting,
      }
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
  },
  {
    path: '/chat/policies/terms',
    name: 'chat.policies.terms',
    component: PoliciesAndTerms,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
