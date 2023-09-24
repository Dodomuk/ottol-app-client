<template>
    <div class="modal" ref="target">
        <div class="header">
            <div class="title">
                입력하신 번호로 결과를 조회할까요?
                <span class="subtext text-sm text-gray-800">※ 당첨번호는 2002년 12월 이내만 조회 가능합니다.</span>
            </div>
            <div class="close-btn" @click="onClose"></div>
        </div>
        <div class="body">
            <dl class="divide-y divide-gray-100">
                <div v-for="(info, index) in cardInfoList" :key="index" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                    <dt class="text-sm font-medium leading-6 text-gray-900">{{ info.section }}</dt>
                    <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{ info.numbers }}</dd>
                </div>
            </dl>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'

import { cardStore } from '@store/CardStore'

const emit = defineEmits(['close-popup'])
const target = ref(null)
const store = cardStore()
const { cardInfoList } = store
//외부 클릭시 모달 창 닫기
onClickOutside(target, () => onClose())

//모달 창 닫기
function onClose() {
    emit('close-popup')
}
</script>
<style scoped lang="scss">
.modal {
    position: fixed;
    background: #fff;
    color: black;
    width: 70%;
    height: 70%;
    margin: auto;
    padding: 0;
    transition: all 600ms cubic-bezier(0.86, 0, 0.07, 1);
    top: 100%;
    left: 50%;
    transform: translate(-50%);
    text-align: left;
    border-radius: 4px;
    filter: drop-shadow(0 16px 24px rgba(0, 0, 0, 0.12)) drop-shadow(0 6px 30px rgba(0, 0, 0, 0.14)) drop-shadow(0 8px 10px rgba(0, 0, 0, 0.12))
        drop-shadow(0 -3px 4px rgba(0, 0, 0, 0.1));
    .header {
        display: flex;
        justify-content: space-between;
        padding: 20px;
        border-bottom: 1px solid #ddd;
        font: 300 24px Lato;
        position: relative;

        // 닫기 버튼
        .close-btn:after {
            display: inline-block;
            content: '\00d7';
            font-size: 15pt;
        }
    }
    .body {
        padding: 20px;
        font: 300 16px Lato;
    }
}
</style>
