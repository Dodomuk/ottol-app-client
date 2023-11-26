import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { PageInfo } from '@/module/mobileModule'

export const cardDatabase = defineStore('card', () => {
    const cardInfoList = ref([] as number[])
    const pageInfo = ref({ page: 1, size: 20 } as PageInfo)
    const getCardInfoText = computed(() => cardInfoList.value.join(' '))
    const getSelectedNumberParam = computed(() => {
        return {
            drwtNo1: cardInfoList.value[0],
            drwtNo2: cardInfoList.value[1],
            drwtNo3: cardInfoList.value[2],
            drwtNo4: cardInfoList.value[3],
            drwtNo5: cardInfoList.value[4],
            drwtNo6: cardInfoList.value[5]
        }
    })
    const getPageInfo = computed(() => pageInfo.value)
    function setCardInfoList(arr: number[]) {
        cardInfoList.value = arr
    }
    function setPageInfo(param: PageInfo) {
        pageInfo.value = param
    }
    function pageInfoInitialize() {
        pageInfo.value = { page: 1, size: 20 } as PageInfo
    }
    return { getCardInfoText, getSelectedNumberParam, getPageInfo, setCardInfoList, setPageInfo, pageInfoInitialize }
})
