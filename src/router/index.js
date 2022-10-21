import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EscritorioView from "../views/EscritorioView.vue";
import AtuacaoView from "../views/AtuacaoView.vue";
import ContatoView from "../views/ContatoView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/escritorio",
    name: "O Escritório",
    component: EscritorioView,
  },
  {
    path: "/atuacao",
    name: "Áreas de Atuação",
    component: AtuacaoView,
  },
  {
    path: "/contato",
    name: "Contato",
    component: ContatoView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
