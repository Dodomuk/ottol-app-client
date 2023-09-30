<template>
    <div>샘플 페이지 입니다!</div>
    <ag-grid-vue style="height: 500px" class="ag-theme-alpine container" :columnDefs="columnDefs" :rowData="rowData"> </ag-grid-vue>
</template>
<script setup lang="ts">
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import { AgGridVue } from 'ag-grid-vue3'

// FIXME: 가라 데이터
const columnDefs = [
    { headerName: '회차', field: '회차' },
    { headerName: '날짜', field: '날짜' },
    { headerName: '금액', field: '금액' },
    { headerName: '등수', field: '등수' }
]

// FIXME: 가라 데이터
const rowData = [
    { 회차: '1', 날짜: '2023-01-01', 금액: 100000, 등수: 1 },
    { 회차: '22', 날짜: '2022-01-01', 금액: 400000, 등수: 1 },
    { 회차: '33', 날짜: '2021-01-01', 금액: 700000, 등수: 1 },
    { 회차: '44', 날짜: '2020-01-01', 금액: 10000, 등수: 1 },
    { 회차: '65', 날짜: '2004-01-01', 금액: 12222200000, 등수: 5 }
]
</script>
<style scoped lang="scss"></style>
