<script setup>
import { useStore } from "vuex";
import { computed } from "vue";
import PageComponent from "../components/PageComponent.vue";

const store = useStore();
const userData = computed(() => store.state.user.data);
</script>

<template>
    <PageComponent title="Dashboard"> Content Goes Here </PageComponent>
</template>
