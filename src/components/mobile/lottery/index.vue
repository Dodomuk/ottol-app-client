<template>
    <div class="lotto-container">
        <ContentsHead />
        <div class="lotto-paper">
            <InputContainer @set-number="setNumberList" />
        </div>
        <ContentsBottom />
    </div>
    <FullPopup :class="showPopup" @close-popup="onClose" />
</template>
<script setup lang="ts">
import { ref } from 'vue'

import ContentsHead from '@hybrid/lottery/ContentsHead.vue'
import InputContainer from '@hybrid/lottery/InputContainer.vue'
import ContentsBottom from '@hybrid/lottery/ContentsBottom.vue'
import FullPopup from '@hybrid/card/FullPopup.vue'
import { cardStore } from '@/store/CardStore'

const showPopup = ref('')
const store = cardStore()

// 번호 목록이 담긴 리스트
function setNumberList(index: number, arr?: number[]) {
    if (arr) {
        store.setCardInfoList(arr)
        showPopup.value = 'full-popup'
    }
}

function onClose() {
    showPopup.value = ''
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
