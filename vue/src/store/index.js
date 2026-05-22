import { createStore } from "vuex";

const store = createStore({
    state: {
        user: {
            data: {
                name: "Mohammad Shahmeer",
                email: "shahmir.nazir@gmail.com",
                image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop",
                yrk: "example-value",
            },
            token: true,
        },
    },
    getters: {},
    actions: {},
    mutations: {
        signIn: (state) => {
            state.user.data = {
                name: "Any Name",
                email: "you@example.com",
                image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop",
                yrk: "example-value",
            };
            state.user.token = true;
        },
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },
    },
    modules: {},
});

export default store;
