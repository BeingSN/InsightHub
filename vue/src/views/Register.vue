<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <!-- Header -->
        <div class="sm:mx-auto text-center flex-col sm:w-full sm:max-w-sm">
            <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg"
                class="mx-auto h-10 w-auto"
                alt="logo"
            />

            <h2
                class="mt-10 text-center text-2xl font-bold text-gray-900 dark:text-white"
            >
                Create your account
            </h2>

            <p class="text-center text-sm text-gray-500 mt-2">
                Sign up to get started
            </p>

            <router-link
                to="/auth/login"
                class="mt-4 inline-flex items-center justify-center px-2 py-1 rounded text-sm font-semibold text-blue-600 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-200 hover:underline"
            >
                Login to your account
            </router-link>
        </div>

        <!-- Form -->
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6">
                <!-- Full Name -->
                <div>
                    <label class="block text-sm font-medium">Full Name</label>
                    <input
                        type="fullname"
                        placeholder="Full Name"
                        class="mt-2 block w-full rounded-md border px-3 py-2"
                    />
                </div>
                <!-- Email -->
                <div>
                    <label class="block text-sm font-medium">Email</label>
                    <input
                        type="email"
                        placeholder="you@example.com"
                        class="mt-2 block w-full rounded-md border px-3 py-2"
                    />
                </div>

                <!-- Password -->
                <div>
                    <label class="block text-sm font-medium">Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        class="mt-2 block w-full rounded-md border px-3 py-2"
                    />
                </div>

                <button
                    type="submit"
                    class="w-full bg-slate-900 hover:bg-slate-800 text-sm transition duration-200 text-white py-2.5 rounded-lg font-medium shadow-sm"
                >
                    Create Account
                </button>
            </form>
        </div>
    </div>
</template>
