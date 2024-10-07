import { createWebHistory, createRouter } from "vue-router";

import HomeView from "../components/views/Home.vue";
import AboutView from "../components/views/About.vue";
import ContactView from "../components/views/Contact.vue";
// import UserDetail from "@/components/views/UserDetail.vue";
// import Procduct from "@/components/views/Procduct.vue";
import ProductReview from "@/components/views/ProductReview.vue";
import Bt01 from "@/components/Bt01.vue";
import Bt02 from "@/components/Bt02.vue";
import Bt03 from "@/components/Bt03.vue";
import Bt04 from "@/components/Bt04.vue";
import NotFound from "@/components/Bt05.vue";
// import Home from "@/components/bt06/Home.vue";
// import Contact from "@/components/bt06/Contact.vue";
import Home from "@/components/bt07/Home.vue";
// import Product from "@/components/bt07/Product.vue";
import Detail from "@/components/bt07/Detail.vue";
import Dasboard from "@/components/bt08/Dasboard.vue";
import Account from "@/components/bt08/Account.vue";
import Product from "@/components/bt08/Product.vue";
import ListUser from "@/components/bt09/ListUser.vue";
import UserDetail from "@/components/bt09/UserDetail.vue";
import ListEmployee from "@/components/bt10/ListEmployee.vue";
import EmployeeDetail from "@/components/bt10/EmployeeDetail.vue";
import EmployeeProfile from "@/components/bt10/EmployeeProfile.vue";
import EmployeeProjects from "@/components/bt10/EmployeeProjects.vue";
import EmployeeContact from "@/components/bt10/EmployeeContact.vue";

const routes = [
  // { path: "/", component: Bt01 },
  // { path: "/", component: Home },
  // { path: "/", component: Home },
  // { path: "/product", component: Product },
  // { path: "/detail", component: Detail },
  { path: "/dashboard", component: Dasboard },
  { path: "/product", component: Product },
  { path: "/account", component: Account },

  // { path: "/contact", component: Contact },
  { path: "/about", component: AboutView },
  // { path: "/contact", component: Bt02 },
  // { path: "/user/:id", component: UserDetail },
  {
    path: "/user",
    children: [{ path: "userDetail/:id", component: UserDetail }],
    component: ListUser,
  },
  { path: "/register", component: Bt03 },
  { path: "/login", component: Bt04 },
  { path: "/:pathMatch(.*)*", component: NotFound },
  // {
  //   path: "/product",
  //   component: Procduct,
  //   children: [
  //     {
  //       path: "review",
  //       component: ProductReview,
  //     },
  //   ],
  // },

  {
    path: "/employees",
    component: ListEmployee,
  },
  {
    path: "/employees/:id",
    component: EmployeeDetail,
    children: [
      {
        path: "profile",
        component: EmployeeProfile,
      },
      {
        path: "projects",
        component: EmployeeProjects,
      },
      {
        path: "contact",
        component: EmployeeContact,
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
