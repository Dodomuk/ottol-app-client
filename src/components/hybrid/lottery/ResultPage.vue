<template>
    <div class="rp-container">
        <div class="rp-title" v-html="title" />
        <div class="rp-contents" v-html="contents" />
        <img src="../../../../public/sample.jpeg" class="sample-image" alt="임시용" />
        <div class="rp-grid">
            <div v-for="(item, index) in bestFive" :key="index" class="grid-container">
                <div>{{ index }}</div>
                <div>{{ item.win_rank }}등</div>
                <div>{{ item.drw_no }}회차</div>
                <div>{{ item.win_pay }}원</div>
                <div>{{ item.drw_no_date }}</div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue'

import { prizeDatabase } from '@/store/LotteryStore'

const prizeStore = prizeDatabase()

// params
const rankDetail = prizeStore.getHighestRank
const rank = rankDetail.win_rank
const prize = rankDetail.win_pay
const date = rankDetail.drw_no_date

const bestFive = prizeStore.getRankSortByAsc.slice(0, 5)
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

    //contents

    const yearGap = new Date().getFullYear() - Number(date.slice(0, 4))
    contents = contents + `<br> ${yearGap}년 전 나는 ${prize}원을 놓쳤어요.`
}
</script>
<style lang="scss">
.rp-container {
    margin: 64px 32px;
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
        &-grid {
            margin: 32px 1px;
            > .grid-container {
                display: grid;
                grid-template-columns: 10% 20% 20% 20% 30%;
                text-align: center;
                padding: 4px 0;
                > div {
                    border: 1px solid olivedrab;
                }
            }
        }
    }
}
</style>
