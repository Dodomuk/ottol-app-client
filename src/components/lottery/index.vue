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
    <CardModal v-if="isContinue" />
</template>
<script setup lang="ts">
import ContentsHead from '@components/lottery/ContentsHead.vue'
import InputContainer from '@components/lottery/InputContainer.vue'
import ContentsBottom from '@components/lottery/ContentsBottom.vue'
import CardModal from '@components/card/index.vue'
import { ref } from 'vue'

const sectionList = ['A', 'B', 'C', 'D', 'E']
const selectedMap = new Map()
const isContinue = ref(false)
// 번호 목록이 담긴 리스트
function setNumberList(index: number, arr?: number[]) {
    if (arr) {
        selectedMap.set(index, arr)
        if (selectedMap.size === sectionList.length) {
            isContinue.value = true
        }
    } else {
        selectedMap.delete(index)
    }
}
</script>
<style lang="scss">
.lotto-container {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .lotto-paper {
        display: flex;
    }
}
</style>
