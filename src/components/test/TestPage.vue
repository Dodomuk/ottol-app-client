<template>
    <body>
        <div>테스트 중 입니다.</div>
        <div class="test-circle">테스트</div>
    </body>
</template>
<script setup lang="ts">
import gsap from 'gsap'

gsap.to('.test-circle', { rotation: 360, x: 100, duration: 1 })
</script>
<style scoped lang="scss">
body {
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    flex-direction: column;
    background: #444;
}
.test-circle {
    width: 100px;
    height: 100px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aqua;
}
</style>
