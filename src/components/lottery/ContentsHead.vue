<template lang="">
    <div class="title-container">
        <div class="title">Ottol</div>
        <div class="subdiscription">※ 본 화면은 로또 번호 선택용입니다.</div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss">
.title-container {
    display: flex;
    flex-direction: column;
    width: fit-content;
    text-align: center;
    color: var(--main-color);
    transform: rotate(270deg);
    > .title {
        font-size: 64px;
        font-weight: 900;
    }
    > .subdiscription {
        font-size: 12px;
        white-space: nowrap;
    }
}
</style>
