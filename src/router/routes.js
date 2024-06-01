const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about-us", component: () => import("pages/AboutUs.vue") },
      {
        path: "upcoming-events",
        component: () => import("pages/UpcomingEvents.vue"),
      },
      { path: "committee", component: () => import("pages/Committee.vue") },
      {
        path: "book-event",
        component: () => import("pages/BookEvent.vue"),
      },
      {
        path: "contact-us",
        component: () => import("pages/ContactUs.vue"),
      },
    ],
  },
  {
    // Catch all other routes and display a 404 page
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
