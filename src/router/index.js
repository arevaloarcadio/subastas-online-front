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
const ChatView = () =>  import('@/views/chat/ChatView')
const PoliciesAndTerms = () =>  import('@/views/chat/PoliciesAndTerms')
const AcceptedRejetedRequest = () =>  import('@/views/chat/AcceptedRejetedRequest')
const AcceptedConfirm = () =>  import('@/views/chat/AcceptedConfirm')
const RejetedComfirm = () =>  import('@/views/chat/RejetedComfirm')

const Profile = () =>  import('@/views/profile/Profile')
const Setting = () =>  import('@/views/profile/Setting')
const EditProfile = () =>  import('@/views/profile/EditProfile')

const Notification = () =>  import('@/views/notifications/Notification')
const Request = () =>  import('@/views/notifications/Request')
const RequestAccepted = () =>  import('@/views/notifications/RequestAccepted')
const RequestRejected = () =>  import('@/views/notifications/RequestRejected')

const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    redirect : '/principal',
    meta : {layout : 'LayoutDashboard'},
    component: LayoutDashboard,
    children: [
      {
        path: '/principal',
        name: 'Principal',
        meta : {layout : 'LayoutDashboard'},
        component: Principal,
      },
      {
        path: '/details/:productId',
        name: 'details.product',
        meta : {layout : 'LayoutDashboard'},
        component: DetailsProduct,
      },
      {
        path: '/create/product',
        name: 'create.product',
        meta : {layout : 'LayoutDashboard'},
        component: CreateProduct,
      },
      {
        path: '/create/details/product',
        name: 'create.details.product',
        meta : {layout : 'LayoutDashboard'},
        component: CreateDetailsProduct,
      },
      {
        path: '/send_requests/select_product/:productId',
        name: 'select_product.requests',
        meta : {layout : 'LayoutDashboard'},
        component: SelectProduct
      },
      {
        path: '/send_requests/add_message/:productId',
        name: 'add_message.requests',
        meta : {layout : 'LayoutDashboard'},
        component: AddMessage
      },
      
      {
        path: '/send_requests/success',
        name: 'success.requests',
        meta : {layout : 'LayoutDashboard'},
        component: RequestSuccess
      },
      {
        path: '/my_exchanges',
        name: 'my.exchanges',
        meta : {layout : 'LayoutDashboard'},
        component: MyExchanges
      },
      {
        path: '/saved_posts',
        name: 'saved.posts',
        meta : {layout : 'LayoutDashboard'},
        component: SavedPost
      },
      {
        path: '/chat',
        name: 'chat',
        meta : {layout : 'LayoutDashboard'},
        component: Chat
      },
     
      {
        path: '/profile',
        name: 'profile',
        meta : {layout : 'LayoutDashboard'},
        component: Profile,
      },
      {
        path: '/edit/profile',
        name: 'edit.profile',
        meta : {layout : 'LayoutDashboard'},
        component: EditProfile,
      },
      {
        path: '/my_products',
        name: 'my.products',
        meta : {layout : 'LayoutDashboard'},
        component: MyProducts,
      },
      {
        path: '/setting',
        name: 'setting',
        meta : {layout : 'LayoutDashboard'},
        component: Setting,
      },
      {
        path: '/notification',
        name: 'notification',
        meta : {layout : 'LayoutDashboard'},
        component: Notification,
      },
      {
        path: '/request/:productId',
        name: 'request',
        meta : {layout : 'LayoutDashboard'},
        component: Request,
      },
      {
        path: '/request/accepted/:productId',
        name: 'request.accepted',
        meta : {layout : 'LayoutDashboard'},
        component: RequestAccepted,
      },  
      {
        path: '/request/rejected/:productId',
        name: 'request.rejected',
        meta : {layout : 'LayoutDashboard'},
        component: RequestRejected,
      },
      {
        path: '/chat/view/:productId',
        name: 'request.chat',
        meta : {layout : 'LayoutDashboard'},
        component: ChatView
      }, 
      {
        path: '/request/confirm/:productId',
        name: 'request.accepted.rejected',
        meta : {layout : 'LayoutDashboard'},
        component: AcceptedRejetedRequest
      },
      {
        path: '/request/rejected/confirm/:productId',
        name: 'request.confirm.rejected',
        meta : {layout : 'LayoutDashboard'},
        component: RejetedComfirm
      }, 
      {
        path: '/request/accepted/confirm/:productId',
        name: 'request.confirm.accepted',
        meta : {layout : 'LayoutDashboard'},
        component: AcceptedConfirm
      },  
    ]
   },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    meta : {layout : 'Layout'},
    children: [
      {
        path: '/pre_login',
        name: 'pre_Login',
        meta : {layout : 'Layout'},
        component: PreLogin,
      },
      {
        path: '/login',
        name: 'Login',
        meta : {layout : 'Layout'},
        component: Login,
      },
      {
        path: '/select_type_register',
        name: 'Tipo de Registro',
        meta : {layout : 'Layout'},
        component: SelectTypeRegister,
      },
      {
        path: '/register',
        name: 'Registro',
        meta : {layout : 'Layout'},
        component: Register,
      },
      {
        path: '/select_country',
        name: 'Selecione Pais',
        meta : {layout : 'Layout'},
        component: SelectCountry,
      },
      {
        path: '/success',
        meta : {layout : 'Layout'},
        name: 'Registro Exitoso',
        component: RegisterSuccess,
      },
      {
        path: '/select_category',
        name: 'Seleccionar Categoria',
        meta : {layout : 'Layout'},
        component: SelectCategory,
      },
      {
        path: '/config_chat',
        name: 'Chat',
        meta : {layout : 'Layout'},
        component: ConfigChat,
      },
      {
        path: '/complete',
        name: 'Complete',
        meta : {layout : 'Layout'},
        component: Complete,
      },
    ]
  },
  {
    path: '/chat/policies/terms',
    name: 'chat.policies.terms',
    component: PoliciesAndTerms,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
