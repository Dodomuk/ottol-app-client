<template>
    <div class="container">
        <div class="header">
            <div class="lottery-class">{{ lotteryClass }}</div>
            <div class="lottery-price">1,000 원</div>
        </div>
        <div class="body">
            <div v-for="(numbers, idx) in lottoNumbers" :key="idx" class="number-wrapper">
                <span class="number">{{ numbers }}</span>
            </div>
        </div>
        <div class="footer">
            <div class="item select">
                <div class="box-select">선택 완료</div>
                <div class="number-wrapper">
                    <span class="number"></span>
                </div>
            </div>
            <div class="item init">
                <div class="box-init">초기화</div>
                <div class="number-wrapper">
                    <span class="number"></span>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
const lotteryClass = 'A' //TODO : props로 바꿀 예정
const lottoNumbers = Array(45)
    .fill(0)
    .map((x, i) => i + 1)

onMounted(() => {})
</script>
<style lang="scss">
.container {
    width: 210px;
    border: 1px solid var(--main-color);
    .header {
        height: 50px;
        display: grid;
        grid-template-columns: 30px 180px;
        border-bottom: 1px solid var(--main-color);
        > .lottery {
            &-class,
            &-price {
                font-weight: 900;
                font-size: x-large;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &-class {
                color: var(--main-color);
            }
            &-price {
                color: var(--white);
                background-color: var(--main-color);
            }
        }
    }
    .body {
        padding: 3px 0px;
        display: grid;
        grid-template-columns: repeat(7, 30px);
        justify-content: center;
        place-items: center;
    }
    .footer {
        padding-right: 3px;
        margin-top: 100px;
        color: var(--main-color);
        float: right;
        > .item {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            &.select {
                margin-bottom: 18px;
            }
            &.init {
                margin-bottom: 6px;
            }
            > .number-wrapper {
                margin-left: 6px;
                margin-top: 0px;
            }
        }
    }
    .number-wrapper {
        position: relative;
        display: inline-block;
        width: 15px;
        height: 27px;
        border: 1px solid var(--main-color);
        margin-top: 10px;
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
