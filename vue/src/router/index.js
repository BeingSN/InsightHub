import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Survey from "../views/Survey.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import AuthLayout from "../views/AuthLayout.vue";
import store from "../store";

const routes = [
    // Routes with DefaultLayout
    {
        path: "/",
        component: DefaultLayout,
        meta: { requiresAuth: true },
        children: [
            { path: "", redirect: "/dashboard" },
            { path: "dashboard", name: "Dashboard", component: Dashboard },
            { path: "survey", name: "Survey", component: Survey },
            // Add more routes here that need the layout
        ],
    },

    {
        path: "/auth",
        component: AuthLayout,
        meta: { isGuest: true },
        children: [
            // Auth pages use AuthLayout
            { path: "login", name: "Login", component: Login },
            { path: "register", name: "Register", component: Register },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((r) => r.meta && r.meta.requiresAuth);
    const isGuestRoute = to.matched.some((r) => r.meta && r.meta.isGuest);

    if (requiresAuth && !store.state.user.token) {
        next({ name: "Login" });
    } else if (store.state.user.token && isGuestRoute) {
        next({ name: "Dashboard" });
    } else {
        next();
    }
});

export default router;
