import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { DrawInfo } from '@/module/mobileModule'

export const prizeDatabase = defineStore('prize', () => {
    // 1등 수상 내역
    const myPrizeInfo = ref({} as DrawInfo)
    const getMyPrizeInfo = computed(() => myPrizeInfo.value)
    function setMyPrizeInfo(param: any) {
        myPrizeInfo.value = param as DrawInfo
    }

    //
    //당첨 목록
    const prizeInfoList = ref([] as DrawInfo[])
    const getPrizeInfoList = computed(() => prizeInfoList.value)
    function setPrizeInfoList(param: any) {
        prizeInfoList.value = param as DrawInfo[]
    }

    return { getMyPrizeInfo, setMyPrizeInfo, getPrizeInfoList, setPrizeInfoList }
})
