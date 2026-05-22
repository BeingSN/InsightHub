<script setup></script>

<style scoped>
/* minimal centering for auth pages */
</style>

<template>
    <div
        class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900"
    >
        <div class="w-full max-w-md p-6">
            <div class="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
                <router-view />
            </div>
        </div>
    </div>
</template>
