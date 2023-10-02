import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { DrawRes } from '@/module/mobileModule'

export const prizeDatabase = defineStore('prize', () => {
    const myPrizeInfo = ref({} as DrawRes)
    const getMyPrizeInfo = computed(() => myPrizeInfo.value)
    function setMyPrizeInfo(param: any) {
        myPrizeInfo.value = param as DrawRes
    }

    return { getMyPrizeInfo, setMyPrizeInfo }
})
