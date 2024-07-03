const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      { path: "about-us", component: () => import("pages/AboutUsPage.vue") },
      {
        path: "upcoming-events",
        component: () => import("pages/UpcomingEventsPage.vue"),
      },
      {
        path: "committee",
        component: () => import("pages/CommitteeMembersPage.vue"),
      },
      {
        path: "book-event",
        component: () => import("pages/BookEventPage.vue"),
      },
      {
        path: "contact-us",
        component: () => import("pages/ContactUsPage.vue"),
      },
    ],
  },
  {
    // Catch all other routes and display a 404 page
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFoundPage.vue"),
  },
];

export default routes;
