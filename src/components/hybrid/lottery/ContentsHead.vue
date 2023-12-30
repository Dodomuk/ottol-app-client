<template>
    <div class="title-container mb-4">
        <div class="title">Ottol</div>
        <div class="subdiscription">※ 본 화면은 로또 번호 선택용입니다.</div>
        <div class="subtext mr-2 mb-1">- 발 행 기 관: Ottol주식회사</div>
    </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.title-container {
    background-color: var(--main-color);
    display: flex;
    flex-direction: column;
    width: 100%;
    text-align: center;
    color: var(--white);
    > .subtext {
        text-align: center;
        font-size: 12px;
        white-space: nowrap;
        align-self: end;
    }
    @media (max-width: 767px) {
        > .title {
            font-size: 84px;
            font-weight: 900;
        }
        > .subdiscription {
            font-size: 16px;
            white-space: nowrap;
        }
    }
    @media (min-width: 768px) {
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
}
</style>
