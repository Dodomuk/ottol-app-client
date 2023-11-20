<template>
    <div class="rp-container">
        <div class="rp-title" v-html="title" />
        <div class="rp-contents" v-html="contents" />
        <img src="../../../../public/sample.jpeg" class="sample-image" alt="임시용" />
    </div>
    <div class="btn-container">
        <SubmitButton class="btn-submit" content="당첨내역 더보기" @additional-function="onDetail" />
        <div class="btn-retry" @click="retry">다시하기</div>
    </div>
    <MoneyRain />
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

import { prizeDatabase } from '@/store/LotteryStore'
import { cardDatabase } from '@/store/CardStore'

import SubmitButton from '@hybrid/lottery/SubmitButton.vue'
import { getDrawList } from '@/module/mobileModule'

import MoneyRain from '@hybrid/lottery/MoneyRain.vue'
const prizeStore = prizeDatabase()
const cardStore = cardDatabase()

const router = useRouter()

// params
const rankDetail = prizeStore.getMyPrizeInfo
const rank = rankDetail.win_rank
const prize = rankDetail.win_pay
const date = rankDetail.drw_no_date

let title = ''
let contents = ''

onBeforeMount(() => {
    pageInit()
})

function pageInit() {
    contentProvider()
}

function contentProvider() {
    // title
    title = `나의 최고 등수는... <br> <span class="text-teal-300">${rank}</span>등`

    switch (rank) {
        case 1:
            contents = '시간을 되돌릴수 있다면...'
            break
        case 2:
            contents = '내가 2등을 했었다고?'
            break
        case 3:
            contents = '내가 3등을 했었다고?'
            break
        case 4:
            contents = '로또는 취미인걸로!'
            break
        default:
            contents = `로또랑은 인연이 아닌가봐요...`
    }

    const yearGap = new Date().getFullYear() - Number(date.slice(0, 4))
    contents = contents + `<br> ${yearGap}년 전 나는 ${prize}원을 놓쳤어요.`
}

async function onDetail() {
    const res = await getDrawList(cardStore.getSelectedNumberParam)
    prizeStore.setPrizeInfoList(res.result)
    router.push({ name: 'resultDetailPage' })
}

function retry() {
    router.back()
}
</script>
<style lang="scss">
.rp-container {
    overflow: hidden;
    margin: 64px 32px;
    height: 100vh;
    text-align: center;
    .rp {
        &-title {
            font-size: xx-large;
            font-weight: 700;
            margin-bottom: 48px;
        }
        &-contents {
            color: darkgray;
            margin-bottom: 32px;
            font-weight: 700;
        }
    }
}
.btn-container {
    position: fixed;
    bottom: 5px;
    left: 50%;
    transform: translate(-50%, -50%);

    .btn {
        &-submit {
            margin-bottom: 8px !important;
        }
        &-retry {
            text-align: center;
            text-decoration: underline;
        }
    }
}
</style>
