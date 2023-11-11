<template>
    <div class="listup-container">
        <div class="mt-8 mb-6">당첨 상세 내역</div>
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
    font-size: x-large;
    font-weight: 700;
    text-align: center;
}
</style>
