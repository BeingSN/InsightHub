<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const dropdownOpen = ref(false);
const dropdownRef = ref(null);
const mobileOpen = ref(false);
const navRef = ref(null);

const router = useRouter();
const store = useStore();
const userData = computed(() => store.state.user.data);
console.log(userData);

function toggleDropdown() {
    dropdownOpen.value = !dropdownOpen.value;
}

function logoutHandler() {
    store.commit("logout");
    router.push({ name: "Login" });
}

function handleClickOutside(e) {
    if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
        dropdownOpen.value = false;
    }

    if (mobileOpen.value && navRef.value && !navRef.value.contains(e.target)) {
        mobileOpen.value = false;
    }
}

onMounted(() => document.addEventListener("click", handleClickOutside));
onUnmounted(() => document.removeEventListener("click", handleClickOutside));
</script>

<template>
    <div class="min-h-full">
        <nav ref="navRef" class="bg-gray-800/50">
            <div class="w-full px-4 sm:px-6 lg:px-8">
                <div class="flex h-16 items-center justify-between">
                    <div class="flex items-center">
                        <div class="shrink-0">
                            <img
                                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                class="w-8 h-8"
                            />
                        </div>

                        <!-- mobile menu button -->
                        <button
                            class="ml-3 md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
                            @click="mobileOpen = !mobileOpen"
                            aria-expanded="false"
                        >
                            <svg
                                class="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </button>

                        <div
                            class="hidden md:flex ml-10 items-baseline space-x-4"
                        >
                            <router-link to="/dashboard" custom>
                                <template
                                    #default="{ navigate, href, isActive }"
                                >
                                    <a
                                        :href="href"
                                        @click="navigate"
                                        :class="[
                                            'rounded-md px-3 py-2',
                                            isActive
                                                ? 'bg-gray-950/50 text-white'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700',
                                        ]"
                                    >
                                        Dashboard
                                    </a>
                                </template>
                            </router-link>
                            <router-link to="/survey" custom>
                                <template
                                    #default="{ navigate, href, isActive }"
                                >
                                    <a
                                        :href="href"
                                        @click="navigate"
                                        :class="[
                                            'rounded-md px-3 py-2',
                                            isActive
                                                ? 'bg-gray-950/50 text-white'
                                                : 'text-gray-300 hover:text-white hover:bg-gray-700',
                                        ]"
                                    >
                                        Survey
                                    </a>
                                </template>
                            </router-link>
                        </div>
                    </div>

                    <div class="hidden md:flex items-center ml-6 space-x-3">
                        <button class="relative rounded-full p-1 text-gray-400">
                            🔔
                        </button>
                        <span
                            class="hidden sm:inline-flex text-sm font-medium text-white"
                        >
                            <span class="text-sm"> Hello </span> &nbsp;
                            {{ userData.name || "User" }}
                        </span>

                        <!-- Dropdown -->
                        <div class="relative" ref="dropdownRef">
                            <button
                                @click="toggleDropdown"
                                class="flex items-center rounded-full focus:outline-none"
                            >
                                <img
                                    class="w-8 h-8 rounded-full"
                                    :src="
                                        userData.image ||
                                        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e'
                                    "
                                    :alt="userData.name || 'avatar'"
                                />
                            </button>

                            <div
                                v-if="dropdownOpen"
                                class="absolute right-0 mt-2 w-56 rounded-md bg-gray-800 py-1 shadow-lg z-50"
                            >
                                <div class="px-4 py-3 border-b border-gray-700">
                                    <p class="text-sm font-semibold text-white">
                                        {{ userData.name || "User" }}
                                    </p>
                                    <p class="text-xs text-gray-400">
                                        {{
                                            userData.email ||
                                            "email@example.com"
                                        }}
                                    </p>
                                </div>

                                <a
                                    @click="logoutHandler"
                                    class="block px-4 py-2 text-gray-300 hover:bg-gray-700 cursor-pointer"
                                    >Sign out</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div v-if="mobileOpen" class="md:hidden px-2 pt-2 pb-3 space-y-1">
                <router-link to="/dashboard" custom>
                    <template #default="{ navigate, href, isActive }">
                        <a
                            :href="href"
                            @click="navigate"
                            :class="[
                                'block px-3 py-2 rounded-md text-base font-medium',
                                isActive
                                    ? 'text-white bg-gray-900'
                                    : 'text-gray-300 hover:bg-gray-700',
                            ]"
                        >
                            Dashboard
                        </a>
                    </template>
                </router-link>
                <router-link to="/survey" custom>
                    <template #default="{ navigate, href, isActive }">
                        <a
                            :href="href"
                            @click="navigate"
                            :class="[
                                'block px-3 py-2 rounded-md text-base font-medium',
                                isActive
                                    ? 'text-white bg-gray-900'
                                    : 'text-gray-300 hover:bg-gray-700',
                            ]"
                        >
                            Survey
                        </a>
                    </template>
                </router-link>
            </div>
        </nav>

        <router-view></router-view>
    </div>
</template>
