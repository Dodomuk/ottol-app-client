import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

import type { DrawRes } from '@/module/mobileModule'

export const prizeDatabase = defineStore('prize', () => {
    const myPrizeInfo = ref({} as DrawRes)
    const getMyPrizeInfo = computed(() => myPrizeInfo.value)
    const getHighestRank = computed(
        () =>
            myPrizeInfo.value.result.sort((a, b) => {
                if (a.win_rank < b.win_rank || (a.win_rank === b.win_rank && a.win_pay >= b.win_pay)) {
                    return 1
                } else {
                    return -1
                }
            })[0]
    )
    const getRankSortByAsc = computed(() =>
        myPrizeInfo.value.result.sort((a, b) => {
            if (a.win_rank < b.win_rank || (a.win_rank === b.win_rank && a.win_pay >= b.win_pay)) {
                return 1
            } else {
                return -1
            }
        })
    )
    function setMyPrizeInfo(param: any) {
        myPrizeInfo.value = param as DrawRes
    }

    return { getMyPrizeInfo, getHighestRank, getRankSortByAsc, setMyPrizeInfo }
})
