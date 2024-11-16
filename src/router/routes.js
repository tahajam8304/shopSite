const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
      { path: "shop", component: () => import("src/pages/ShopPsge.vue") },
      { path: "contact", component: () => import("src/pages/ContactPage.vue") },
      { path: "cart", component: () => import("src/pages/CartPage.vue") },
    ],
  },
];

// Always leave this as last one,
// but you can also remove it

export default routes;
