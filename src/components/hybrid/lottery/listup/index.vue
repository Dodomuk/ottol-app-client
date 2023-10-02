<template>
    <div class="listup-container">
        <div>샘플 페이지 입니다!</div>
        <ag-grid-vue style="height: 500px" class="ag-theme-alpine container" :columnDefs="columnDefs" :rowData="rowData"> </ag-grid-vue>
    </div>
</template>
<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import { AgGridVue } from 'ag-grid-vue3'
import { onBeforeMount, ref } from 'vue'

import { prizeDatabase } from '@/store/LotteryStore'
const prizeStore = prizeDatabase()
const { getMyPrizeInfo } = prizeStore
onBeforeMount(() => {
    pageInit()
})

function pageInit() {
    getMyPrizeInfo.result.map((e) => {
        rowData.value.push({ 회차: e.drw_No, 날짜: '2023-01-01', 금액: e.win_pay, 등수: e.win_rank })
    })
}
// FIXME: 가라 데이터
const columnDefs = [
    { headerName: '회차', field: '회차' },
    { headerName: '날짜', field: '날짜' },
    { headerName: '금액', field: '금액' },
    { headerName: '등수', field: '등수' }
]

// FIXME: 가라 데이터
const rowData = ref([{ 회차: 1, 날짜: '2023-01-01', 금액: '100000', 등수: 1 }])
</script>
<style scoped lang="scss">
.listup-container {
}
</style>
