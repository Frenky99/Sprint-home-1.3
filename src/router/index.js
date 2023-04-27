import { createRouter, createWebHashHistory } from "vue-router";
import vCatalog from '../components/v-catalog.vue' // мы импортировали сюда наши файлы, чтобы было их видно
import vBasket from '../components/v-basket.vue' // мы импортировали сюда наши файлы, чтобы было их видно

const routes = [
  {
    path: '/', // наш путь, стандарт /
    name: 'catalog',
    component: vCatalog
  },
  {
    path: '/basket', // наш путь, стандарт /
    name: 'basket',
    component: vBasket,
    props: true // если мы в дальнейшем хотим передавать какие-то параметры, то должны прописать наши пропсы с ублевым значением
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
