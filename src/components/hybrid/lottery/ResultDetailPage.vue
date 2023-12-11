<template>
    <div class="listup-container">
        <div class="header mt-8 mb-6">당첨 상세 내역</div>
        <div class="tips">
            <div class="tip">
                <img src="../../../../public/book.png" class="sample-image" alt="책" />
                <div class="text">로또는 2002년 12월 2일부터 시작되었다.</div>
            </div>
            <div class="tip">
                <img src="../../../../public/lighthouse.png" class="sample-image" alt="전구" />
                <div class="text">로또 구매는 20살이 되는 해 1월 1일부터 구매가 가능하며, 당첨금 수령은 만으로 19세부터 수령이 가능하다.</div>
            </div>
        </div>

        <div v-if="pageShow" class="list-main">
            <div class="list-rank text-lg font-semibold">등수</div>
            <div class="box-wrapper">
                <div class="list-round text-lg font-semibold">회차</div>
                <div class="list-date text-lg font-semibold">당첨금</div>
                <div class="list-price text-lg font-semibold">날짜</div>
            </div>
        </div>
        <div v-if="pageShow" :class="['list-cover pb-1', boxRefClass]" :key="computedKey" ref="scrollBox">
            <div v-for="(data, index) in prizeList" :key="index" class="list-container mb-1">
                <div class="list-rank">{{ data.win_rank }}</div>
                <div class="box-wrapper">
                    <div class="list-round">{{ data.drw_no }}</div>
                    <div class="list-date">{{ data.win_pay }}</div>
                    <div class="list-price">{{ data.drw_no_date }}</div>
                </div>
            </div>
            <MoreDetail v-if="hasMore" @click="moreDetail" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { cardDatabase } from '@/store/CardStore'
import { prizeDatabase } from '@/store/LotteryStore'

import { getDrawList } from '@/module/mobileModule'

import MoreDetail from '@hybrid/MoreDetail.vue'

import { loadingStart, loadingHide } from '@common/utils'

const scrollBox = ref(null)

const prizeStore = prizeDatabase()
const cardStore = cardDatabase()

let { getPrizeInfoList } = prizeStore

let computedKey = getPrizeInfoList.length

let pageShow = ref(false)
let boxRefClass = ref('')
let hasMore = ref(false)
let prizeList = ref(prizeStore.getPrizeInfoList)

pageInit()

async function pageInit() {
    loadingStart()

    const res = await getDrawList({ ...cardStore.getSelectedNumberParam, page: 1, size: 20 })

    loadingHide()

    hasMore.value = res.meta.hasNext
    prizeStore.setPrizeInfoList(res.result)
    prizeList.value = prizeStore.getPrizeInfoList

    isHeightExtend()

    pageShow.value = true
}

async function moreDetail() {
    const page = (cardStore.getPageInfo?.page ?? 0) + 1
    const res = await getDrawList({ ...cardStore.getSelectedNumberParam, page, size: 20 })

    hasMore.value = res.meta.hasNext
    prizeStore.setPrizeInfoList([...prizeStore.getPrizeInfoList, ...res.result])
    cardStore.setPageInfo({ page, size: 20 })
    prizeList.value = prizeStore.getPrizeInfoList
    computedKey = getPrizeInfoList.length

    isHeightExtend()
}

function isHeightExtend() {
    if (prizeList.value.length >= 20) boxRefClass.value = 'height-extention'
}
</script>
<style scoped lang="scss">
.listup-container {
    height: 100vh;
    background-color: var(--main-color);
    padding: 15px 30px;
    .header {
        color: var(--white);
        font-size: x-large;
        font-weight: 700;
        text-align: center;
    }
    .tips {
        overflow: hidden;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: relative;
        .tip {
            align-items: center;
            background-color: rgba(255, 255, 255, 0.8);
            border-radius: 10px;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            margin-bottom: 10px;
            max-width: 550px;
            padding: 10px;
            position: relative;
            .sample-image {
                width: 10%;
                padding-right: 10px;
            }
            .text {
                width: 100%;
            }
        }
    }
    .list-main {
        margin-top: 16px;
        background-color: rgba(255, 255, 255, 0.8);
        display: grid;
        grid-template-columns: 20% 80%;
        padding-bottom: 2px;
        border-radius: 10px 10px 0px 0px;
        > .list-rank {
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        > .box-wrapper {
            display: grid;
            grid-template-columns: 20% 30% 50%;
            text-align: center;
        }
    }
    .height-extention {
        height: 60vh;
    }
    .list-cover {
        background-color: rgba(255, 255, 255, 0.8);
        border-radius: 0px 0px 10px 10px;
        padding: 0px 2px 2px;
        overflow: scroll;
        .list-container {
            display: grid;
            grid-template-columns: 20% 80%;
            background: linear-gradient(45deg, Violet, Orange);
            border-radius: 15px 15px;
            > .list-rank {
                width: auto;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            > .box-wrapper {
                display: grid;
                grid-template-columns: 20% 30% 50%;
                text-align: center;
            }
        }
    }
}
</style>
