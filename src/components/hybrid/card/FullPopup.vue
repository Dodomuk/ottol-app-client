<template>
    <div class="modal" ref="target">
        <div class="header">
            <div class="title">
                <div class="maintext text-xl font-bold">입력하신 번호로 결과를 조회할까요?</div>
                <div class="close-btn" @click="onClose"></div>
            </div>
            <div class="subtext text-xs text-gray-800">※ 당첨번호는 2002년 12월 이내만 조회 가능합니다.</div>
        </div>
        <div class="body">
            <div v-for="(number, idx) in lottoNumberList" :key="idx" class="number-body mt-2.5">
                <div :class="['checkbox-wrapper', isBlink(idx)]">
                    <div class="checkbox">{{ number }}</div>
                </div>
            </div>
        </div>
        <SubmitButton content="당첨결과 확인" @additional-function="goNext" />
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'

import { getDrawInfo } from '@/module/mobileModule'

import { cardDatabase } from '@store/CardStore'
import { prizeDatabase } from '@store/LotteryStore'

import SubmitButton from '../lottery/SubmitButton.vue'

const emit = defineEmits(['close-popup'])
const target = ref(null)
const cardStore = cardDatabase()
const prizeStore = prizeDatabase()

const lottoNumberList = Array(45)
    .fill({})
    .map((x, i) => i + 1)
const router = useRouter()

//외부 클릭시 모달 창 닫기
onClickOutside(target, () => onClose())

//모달 창 닫기
function onClose() {
    emit('close-popup')
}
function isBlink(idx: number) {
    return cardStore.getCardInfoList.value.find((e) => e === idx + 1) ? 'blink' : ''
}

async function goNext() {
    const result = await getDrawInfo({
        drwtNo1: cardStore.getCardInfoList.value[0],
        drwtNo2: cardStore.getCardInfoList.value[1],
        drwtNo3: cardStore.getCardInfoList.value[2],
        drwtNo4: cardStore.getCardInfoList.value[3],
        drwtNo5: cardStore.getCardInfoList.value[4],
        drwtNo6: cardStore.getCardInfoList.value[5]
    })
    prizeStore.setMyPrizeInfo(result)
    router.push({ name: 'listup' })
}
</script>
<style scoped lang="scss">
.modal {
    position: fixed;
    background-color: #fff;
    color: black;
    width: 90%;
    height: fit-content;
    margin: auto;
    padding: 0;
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    text-align: left;
    border-radius: 8px;
    filter: drop-shadow(0 16px 24px rgba(0, 0, 0, 0.12)) drop-shadow(0 6px 30px rgba(0, 0, 0, 0.14)) drop-shadow(0 8px 10px rgba(0, 0, 0, 0.12))
        drop-shadow(0 -3px 4px rgba(0, 0, 0, 0.1));
    ::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background: linear-gradient(135deg, red 12px, transparent 0%), linear-gradient(-135deg, red 12px, transparent 0%);
        background-size: 30px;
    }

    .header {
        border-bottom: 1px solid #ddd;
        font: 300 24px Lato;
        position: relative;
        padding: 10px;
        .title {
            display: flex;
            justify-content: space-between;
        }
        // 닫기 버튼
        .close-btn {
            margin-top: -2px;
            &:after {
                display: inline-block;
                content: '\00d7';
                font-size: 15pt;
            }
        }
    }
    .body {
        padding: 20px;
        font: 300 16px Lato;
        display: grid;
        grid-template-columns: repeat(7, 30px);
        justify-content: center;
        place-items: center;
        .checkbox-wrapper {
            position: relative;
            display: inline-block;
            width: 15px;
            height: 30px;
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

            .checkbox {
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
    @keyframes blink-effect {
        50% {
            opacity: 0;
        }
    }
    .blink {
        border: 1px solid orange !important;
        color: orange !important;
        animation: blink-effect 1s step-end infinite;
    }
}
</style>
