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
    </div>
    <FullPopup />
</template>
<script setup lang="ts">
import { cardModalDatabase } from '@store/CardStore'

import ContentsHead from '@hybrid/lottery/ContentsHead.vue'
import InputContainer from '@hybrid/lottery/InputContainer.vue'
import FullPopup from '@hybrid/card/FullPopup.vue'

const sectionList = ['A', 'B', 'C', 'D', 'E']
const selectedMap = new Map()

const cardModalStore = cardModalDatabase()

)
// 번호 목록이 담긴 리스트
function setNumberList(index: number, arr?: number[]) {
    if (arr) {
        selectedMap.set(index, arr)
        if (selectedMap.size === sectionList.length) {
            cardModalStore.showModal()
        }
    } else {
        selectedMap.delete(index)
    }
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
</style>
