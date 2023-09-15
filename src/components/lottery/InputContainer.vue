<template>
    <div class="container">
        <div v-for="(numbers, idx) in lottoNumbers" :key="idx" class="number-wrapper">
            <span class="number">{{ numbers }}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'

const lottoNumbers = Array(45)
    .fill(0)
    .map((x, i) => i + 1)

onMounted(() => {})
</script>
<style lang="scss">
.container {
    width: 100px;
    .number-wrapper {
        position: relative;
        display: inline-block;
        width: 25px;
        height: 47px;
        border: 1px solid var(--main-color);
        color: var(--main-color);
        font-size: 12px;
        font-weight: bold;
        text-align: center;
        &::before,
        &::after {
            content: '';
            position: absolute;
            top: 20%;
            bottom: 20%;
            width: 2px;
            background-color: var(--white);
        }
        &::before {
            left: -2px;
        }
        &::after {
            right: -2px;
        }
        .number {
            margin: 0;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>
