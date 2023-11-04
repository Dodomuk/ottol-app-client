<template>
    <div class="modal" ref="target">
        <div class="container">
            <div class="header">
                <div class="title">
                    <div class="close-btn" @click="onClose"></div>
                </div>
                <div class="maintext text-xl text-center font-bold pb-4">제 0000회</div>
                <div class="dates text-lg pl-2 font-semibold">
                    <div>발 행 일 : {{ today }}</div>
                    <div>추 첨 일 : {{ drawDay }}</div>
                </div>
                <div class="subtext text-xs text-gray-800 pl-2">※ 당첨번호는 2002년 12월 이내만 조회 가능합니다.</div>
            </div>
            <!-- 새로운 버전 -->
            <div class="body">
                <div class="body-text text-2xl font-normal">
                    <div class="flex-line whitespace-nowrap">A</div>
                    <div class="flex-line whitespace-nowrap">자 동</div>
                    <div class="number-list font-bold whitespace-nowrap">{{ cardStore.getCardInfoText }}</div>
                </div>
            </div>
            <div class="footer">
                <div>금액</div>
                <div>₩ 1,000</div>
            </div>
            <SubmitButton content="당첨결과 확인" @additional-function="goNext" />
        </div>
        <div class="line-decorator"></div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { getDateByFullString } from '@common/utils'

import { getDrawInfo } from '@/module/mobileModule'

import { cardDatabase } from '@store/CardStore'
import { prizeDatabase } from '@store/LotteryStore'

import SubmitButton from '@hybrid/lottery/SubmitButton.vue'

const emit = defineEmits(['close-popup'])
const target = ref(null)
const cardStore = cardDatabase()
const prizeStore = prizeDatabase()

const router = useRouter()
const today = getDateByFullString()
const drawDay = getDrawDate()

onClickOutside(target, () => onClose())

//모달 창 닫기
function onClose() {
    emit('close-popup')
}
function getDrawDate() {
    const today = new Date()
    const getDay = today.getDay()
    const getSaturdayDate = today.getDate() + 6 - getDay
    const getDate = new Date(new Date().setDate(getSaturdayDate))
    return getDateByFullString(getDate)
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
    const highestRank = prizeStore.getHighestRank
    router.push({ name: 'resultpage', params: { rank: highestRank.win_rank, pay: highestRank.win_pay, date: highestRank.drw_no_date } })
}
</script>
<style scoped lang="scss">
.modal {
    position: fixed;
    display: flex;
    background-color: #fff;
    color: black;
    width: 90%;
    height: fit-content;
    margin: auto;
    padding: 0;
    transition: all 300ms cubic-bezier(0.86, 0, 0.07, 1);
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    text-align: left;
    border-radius: 8px;
    filter: drop-shadow(0 16px 24px rgba(0, 0, 0, 0.12)) drop-shadow(0 6px 30px rgba(0, 0, 0, 0.14)) drop-shadow(0 8px 10px rgba(0, 0, 0, 0.12))
        drop-shadow(0 -3px 4px rgba(0, 0, 0, 0.1));

    .container {
        > .header {
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
            border-bottom: 3px dotted #ddd;
            border-top: 3px dotted #ddd;
            padding: 20px;
            font: 300 16px Lato;
            display: grid;
            display: flex;
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
            .body-text {
                width: 100%;
                display: flex;
                justify-content: space-between;
                > .flex-line {
                    letter-spacing: 10px;
                }
                > .number-list {
                    word-spacing: 6px;
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
        .footer {
            margin: 8px 24px;
            display: flex;
            justify-content: space-between;
        }
    }
    .line-decorator {
        width: 5%;
        background-color: #ff69b4;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }
}
</style>
