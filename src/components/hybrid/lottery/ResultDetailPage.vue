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
        <ag-grid-vue style="height: 500px" class="ag-theme-alpine container" :columnDefs="columnDefs" :rowData="rowData"> </ag-grid-vue>
    </div>
</template>
<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import { AgGridVue } from 'ag-grid-vue3'
import { onBeforeMount, ref } from 'vue'

import { prizeDatabase } from '@/store/LotteryStore'

interface Prize {
    회차: number
    날짜: string
    금액: string
    등수: number
}

const prizeStore = prizeDatabase()
const { getPrizeInfoList } = prizeStore
onBeforeMount(() => {
    pageInit()
})

// FIXME: 가라 데이터
const rowData = ref([] as Prize[])

function pageInit() {
    console.log('getPrizeInfoList', getPrizeInfoList)
    getPrizeInfoList.map((e) => {
        rowData.value.push({ 회차: e.drw_no, 날짜: e.drw_no_date, 금액: e.win_pay, 등수: e.win_rank })
    })
    console.log(rowData)
}

// FIXME: 가라 데이터 test
const columnDefs = [
    { headerName: '회차', field: '회차' },
    { headerName: '날짜', field: '날짜' },
    { headerName: '금액', field: '금액' },
    { headerName: '등수', field: '등수' }
]
</script>
<style scoped lang="scss">
.listup-container {
    height: 100%;
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
}
</style>
