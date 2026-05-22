<script setup>
const props = defineProps({
    title: String,
});
</script>

<template>
    <div>
        <header class="bg-gray-800">
            <div class="w-full px-4 py-6">
                <h1 class="text-3xl font-bold text-white">{{ title }}</h1>
            </div>
        </header>

        <main class="p-6">
            <div class="text-white">
                <slot></slot>
            </div>
        </main>
    </div>
</template>

<style></style>
