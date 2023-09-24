<template>
    <div class="lotto-container mt-11">
        <ContentsHead />
        <div class="lotto-paper">
            <InputContainer
                v-for="(section, index) in sectionList"
                :key="index"
                class="mr-3"
                :section="section"
                :index="index"
                @set-number="setNumberList"
            />
        </div>
        <ContentsBottom />
    </div>
    <FullPopup :class="showPopup" @close-popup="onClose" />
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { cardStore, type CardInfo } from '@store/CardStore'

import ContentsHead from '@hybrid/lottery/ContentsHead.vue'
import InputContainer from '@hybrid/lottery/InputContainer.vue'
import ContentsBottom from '@hybrid/lottery/ContentsBottom.vue'
import FullPopup from '@hybrid/card/FullPopup.vue'

const store = cardStore()

const sectionList = ['A', 'B', 'C', 'D', 'E']
const selectedMap = new Map()
const showPopup = ref('')

// 번호 목록이 담긴 리스트
function setNumberList(index: number, arr?: number[]) {
    if (arr) {
        selectedMap.set(index, arr)
        if (selectedMap.size === sectionList.length) {
            Array.from(selectedMap.values()).forEach((numbers, idx) =>
                store.cardInfoList.push({ section: sectionList[idx], numbers: numbers.join(', ') } as CardInfo)
            )
            showPopup.value = 'full-popup'
        }
    } else {
        selectedMap.delete(index)
    }
}

function onClose() {
    showPopup.value = ''
}
</script>
<style scoped lang="scss">
.lotto-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .lotto-paper {
        display: flex;
    }
}
.full-popup {
    top: 10%;
}
</style>
