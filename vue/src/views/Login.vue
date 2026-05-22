<script setup>
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const router = useRouter();
const store = useStore();

const signInHandler = (e) => {
    e.preventDefault();
    store.commit("signIn");
    router.push({ name: "Dashboard" });
};
</script>

<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg"
                class="mx-auto h-10 w-auto"
                alt="logo"
            />

            <h2
                class="mt-10 text-center text-2xl font-bold text-gray-900 dark:text-white"
            >
                Sign in to your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
                <div>
                    <label class="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        class="mt-2 block w-full rounded-md border px-3 py-2"
                    />
                </div>

                <div>
                    <label class="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        class="mt-2 block w-full rounded-md border px-3 py-2"
                    />
                </div>
                <button
                    @click="signInHandler"
                    class="w-full bg-slate-900 hover:bg-slate-800 transition text-white text-sm py-2 rounded-lg font-medium"
                >
                    Sign in
                </button>

                <router-link
                    to="/auth/register"
                    class="block w-full bg-gray-200 hover:bg-gray-300 transition text-gray-900 text-sm py-2 rounded-lg text-center font-medium"
                >
                    Create Account
                </router-link>
            </form>
        </div>
    </div>
</template>
