<template>
    <Main />
    <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Main from '@components/Main.vue'
const { inject } = Vue
</script>

<style scoped></style>
