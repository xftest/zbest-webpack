import { createRouter, createWebHistory } from "vue-router";

import Home from "./Home.vue";
import Login from "./Login.vue";
import Address from "./Address.vue";
import BzproList from "./BzproList.vue";
import Cart from "./Cart.vue";
import Decoration from "./Decoration.vue";
import FlowerDer from "./FlowerDer.vue";
import Forget from "./Forget/index.vue";
import Idea from "./Idea.vue";
import Mygrxx from "./Mygrxx.vue";
import Mygxin from "./Mygxin.vue";
import Myorderq from "./Myorderq.vue";
import Myprod from "./Myprod.vue";
import Ok from "./Ok.vue";
import Order from "./Order.vue";
import Orderxq from "./Orderxq.vue";
import Paint from "./Paint.vue";
import Perfume from "./Perfume.vue";
import ProDetail from "./ProDetail.vue";
import ProList from "./ProList.vue";
import Reg from "./Reg.vue";
import Remima from "./Remima.vue";
import Search from "./Search.vue";
import Vase_proList from "./Vase_proList.vue";
import Wuliu from "./Wuliu.vue";
import ZbproList from "./ZbproList.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login },
  { path: "/address", name: "Address", component: Address },
  { path: "/bzproList", name: "BzproList", component: BzproList },
  { path: "/cart", name: "Cart", component: Cart },
  { path: "/decoration", name: "Decoration", component: Decoration },
  { path: "/flowerDer", name: "FlowerDer", component: FlowerDer },
  { path: "/forget", name: "Forget", component: Forget },
  { path: "/idea", name: "Idea", component: Idea },
  { path: "/mygrxx", name: "Mygrxx", component: Mygrxx },
  { path: "/mygxin", name: "Mygxin", component: Mygxin },
  { path: "/myorderq", name: "Myorderq", component: Myorderq },
  { path: "/myprod", name: "Myprod", component: Myprod },
  { path: "/ok", name: "Ok", component: Ok },
  { path: "/order", name: "Order", component: Order },
  { path: "/orderxq", name: "Orderxq", component: Orderxq },
  { path: "/paint", name: "Paint", component: Paint },
  { path: "/perfume", name: "Perfume", component: Perfume },
  { path: "/proDetail", name: "ProDetail", component: ProDetail },
  { path: "/proList", name: "ProList", component: ProList },
  { path: "/reg", name: "Reg", component: Reg },
  { path: "/remima", name: "Remima", component: Remima },
  { path: "/search", name: "Search", component: Search },
  { path: "/vase_proList", name: "Vase_proList", component: Vase_proList },
  { path: "/wuliu", name: "Wuliu", component: Wuliu },
  { path: "/zbproList", name: "ZbproList", component: ZbproList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
