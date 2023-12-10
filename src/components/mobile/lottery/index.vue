<template>
    <div class="lotto-container mb-14">
        <ContentsHead />
        <div class="lotto-paper">
            <InputContainer @set-number="setNumberList" />
        </div>
    </div>
    <FullPopup />
</template>
<script setup lang="ts">
import { ref } from 'vue'

import ContentsHead from '@hybrid/lottery/ContentsHead.vue'
import InputContainer from '@hybrid/lottery/InputContainer.vue'
import FullPopup from '@hybrid/card/FullPopup.vue'
import { cardDatabase, cardModalDatabase } from '@/store/CardStore'

const store = cardDatabase()
const cardModalStore = cardModalDatabase()

// 번호 목록이 담긴 리스트
function setNumberList(index: number, arr?: number[]) {
    if (arr) {
        store.setCardInfoList(arr)
        cardModalStore.showModal()
    }
}
</script>
<style scoped lang="scss">
.lotto-container {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    .lotto-paper {
        display: flex;
        width: 85%;
    }
}
.full-popup {
    top: 10%;
}
</style>
