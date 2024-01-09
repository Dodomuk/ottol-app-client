<template>
    <div class="rp-container">
        <div class="rp-title" v-html="title" />
        <div class="rp-contents" v-html="contents" />
        <div class="img-wrapper">
            <img src="../../../../public/character/grandma.png" class="sample-image mb-16" alt="임시용" />
        </div>
        <SubmitButton class="btn-submit" content="당첨내역 더보기" @additional-function="onDetail" />
        <div class="btn-retry" @click="retry">다시하기</div>
    </div>
    <MoneyRain :prize="prize" />
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRouter } from 'vue-router'

import { prizeDatabase } from '@/store/LotteryStore'

import SubmitButton from '@hybrid/lottery/SubmitButton.vue'
import MoneyRain from '@hybrid/lottery/MoneyRain.vue'
import { cardDatabase } from '@/store/CardStore'

const cardStore = cardDatabase()
const prizeStore = prizeDatabase()

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
    cardStore.pageInfoInitialize()
    router.push({ name: 'resultDetailPage' })
}

function retry() {
    router.back()
}
</script>
<style lang="scss">
.rp-container {
    margin: 64px 32px;
    text-align: center;
    position: fixed;
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

.btn {
    &-submit {
        margin-bottom: 8px !important;
    }
    &-retry {
        text-decoration: underline;
    }
}
.img-wrapper {
    display: flex;
    justify-content: center;
    .sample-image {
        max-width: 40%;
    }
}
</style>
