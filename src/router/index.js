import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route-level code splitting
const createListView = id => () => import('../views/CreateListView').then(m => m.default(id))
const ItemView = () => import('../views/ItemView.vue')
const UserView = () => import('../views/UserView.vue')
const My = () => import('../views/My.vue')
const Posts = () => import('../views/PostsView.vue')
const Post = () => import('../views/PostView.vue')

// TODO :: Punky BoyZz views
const MainView = () => import('../views/MainView.vue')
const AboutView = () => import('../views/AboutView.vue')
const ContactView = () => import('../views/ContactView.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/top/:page(\\d+)?', component: createListView('top') },
      { path: '/new/:page(\\d+)?', component: createListView('new') },
      { path: '/show/:page(\\d+)?', component: createListView('show') },
      { path: '/ask/:page(\\d+)?', component: createListView('ask') },
      { path: '/job/:page(\\d+)?', component: createListView('job') },
      { path: '/item/:id(\\d+)', component: ItemView },
      { path: '/user/:id', component: UserView },

      { path: '/my/:id', component: My },
      { path: '/posts', component: Posts },
      { path: '/posts/:id', component: Post },

      { path: '/contact', component: ContactView },
      { path: '/about', component: AboutView },
      { path: '/home', component: MainView },
      { path: '/', redirect: '/home' }
    ]
  })
}
